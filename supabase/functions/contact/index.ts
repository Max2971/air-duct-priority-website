import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import nodemailer from "npm:nodemailer@6.9.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  zip: string;
  message?: string;
  source?: string;
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
    const { name, phone, email, zip, message, source, honeypot } = formData;

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
    if (!name || !phone || !email || !zip) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
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

Name: ${name}
Phone: ${phone}
Email: ${email}
Zip Code: ${zip}
${message ? `Message: ${message}` : ""}
${source ? `Source: ${source}` : ""}

Submitted at: ${new Date().toLocaleString()}
    `.trim();

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `New Contact Form Submission from ${name}`,
      text: businessEmailContent,
      replyTo: email,
    });

    // Send confirmation email to customer
    const customerEmailContent = `
Hello ${name},

Thanks for reaching out! We've received your request and will get back to you shortly.

Your submitted information:
- Phone: ${phone}
- Zip Code: ${zip}

We'll contact you soon to discuss your needs.

Best regards,
Air Duct Priority
    `.trim();

    await transporter.sendMail({
      from: mailFrom,
      to: email,
      subject: "Thank you for contacting Air Duct Priority",
      text: customerEmailContent,
    });

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
