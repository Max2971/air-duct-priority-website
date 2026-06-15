import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import nodemailer from "npm:nodemailer@6.9.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name?: string;
  phone: string;
  email?: string;
  zip: string;
  service?: string;
  message?: string;
  page?: string;
  landingPage?: string;
  referrer?: string;
  honeypot?: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Only allow POST
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ ok: false, error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Parse form data
    const formData: ContactFormData = await req.json();
    const { name, phone, email, zip, service, message, page, landingPage, referrer, honeypot } = formData;

    // Honeypot check - reject if filled
    if (honeypot) {
      return new Response(
        JSON.stringify({ ok: false, error: "Spam detected" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate required fields
    if (!phone || !zip) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    let submissionId: string | undefined;
    let stored = false;

    if (supabaseUrl && serviceRoleKey) {
      const supabase = createClient(supabaseUrl, serviceRoleKey);
      const { data: submission, error: storageError } = await supabase
        .from("contact_submissions")
        .insert({
          name: name || null,
          phone,
          email: email || null,
          zip,
          service: service || null,
          message: message || null,
          page: page || null,
          landing_page: landingPage || null,
          referrer: referrer || null,
          ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
        })
        .select("id")
        .single();

      if (storageError) {
        console.error("Unable to store contact submission:", storageError);
      } else {
        submissionId = submission.id;
        stored = true;
      }
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: Deno.env.get("SMTP_HOST"),
      port: parseInt(Deno.env.get("SMTP_PORT") || "587"),
      secure: Deno.env.get("SMTP_PORT") === "465",
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASS"),
      },
    });

    const mailFrom = Deno.env.get("MAIL_FROM") || Deno.env.get("SMTP_USER");
    const mailTo = "max@airductpriority.com";

    // Send email to business owner
    const businessEmailContent = `
New Contact Form Submission

Name: ${name || "Not provided"}
Phone: ${phone}
Email: ${email || "Not provided"}
Zip Code: ${zip}
${service ? `Service / Problem: ${service}` : ""}
${message ? `Message: ${message}` : ""}
${page ? `Page: ${page}` : ""}
${landingPage ? `Landing Page: ${landingPage}` : ""}
${referrer ? `Referrer: ${referrer}` : ""}

Submitted at: ${new Date().toLocaleString()}
    `.trim();

    let ownerNotified = false;
    let notificationError = "";

    try {
      await transporter.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: `New Website Lead${service ? `: ${service}` : ""}`,
        text: businessEmailContent,
        replyTo: email || undefined,
      });
      ownerNotified = true;
    } catch (error) {
      notificationError = error instanceof Error ? error.message : "Owner notification failed";
      console.error("Owner notification failed:", error);
    }

    // Customer confirmation is optional and must not make a valid lead fail.
    const customerEmailContent = `
Hello${name ? ` ${name}` : ""},

Thanks for reaching out! We've received your request and will get back to you shortly.

Your submitted information:
- Phone: ${phone}
- Zip Code: ${zip}

We'll contact you soon to discuss your needs.

Best regards,
Air Duct Priority
    `.trim();

    if (email) {
      try {
        await transporter.sendMail({
          from: mailFrom,
          to: email,
          subject: "Thank you for contacting Air Duct Priority",
          text: customerEmailContent,
        });
      } catch (error) {
        console.error("Customer confirmation failed:", error);
      }
    }

    if (submissionId && supabaseUrl && serviceRoleKey) {
      const supabase = createClient(supabaseUrl, serviceRoleKey);
      await supabase
        .from("contact_submissions")
        .update({
          owner_notified_at: ownerNotified ? new Date().toISOString() : null,
          notification_error: notificationError || null,
        })
        .eq("id", submissionId);
    }

    if (!stored && !ownerNotified) {
      throw new Error("The lead could not be stored or delivered.");
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to process form submission" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
