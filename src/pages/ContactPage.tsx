import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Phone, MessageSquare, ClipboardCheck, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            Contact Air Duct Priority
          </h1>
          <p className="mb-4 text-xl text-gray-200 lg:text-2xl">
            Free Inspection • Bucks County & Montgomery County, PA
          </p>
          <p className="mb-8 text-base text-gray-300 lg:text-lg max-w-2xl mx-auto">
            Call, text, or request service online. We respond fast.
          </p>
          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Free Inspection – Call (215) 710-8781
          </a>
          <div className="mt-4">
            <a href="#contact" className="text-gray-300 hover:text-white underline text-sm">
              Or request service below
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-8 w-8 text-[#F97316]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Call Now</h3>
              <p className="mb-4 text-sm text-slate-600">
                Speak with us directly for immediate assistance
              </p>
              <a
                href="tel:+12157108781"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 w-full mt-auto"
              >
                (215) 710-8781
              </a>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <MessageSquare className="h-8 w-8 text-[#F97316]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Text Us</h3>
              <p className="mb-4 text-sm text-slate-600">
                Send us a quick message anytime
              </p>
              <a
                href="sms:+12157108781"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 w-full mt-auto"
              >
                Send Text Message
              </a>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <ClipboardCheck className="h-8 w-8 text-[#F97316]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Request Service</h3>
              <p className="mb-4 text-sm text-slate-600">
                Fill out the form and we'll get back to you
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 w-full mt-auto"
              >
                Fill Out Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="container mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <img
            src="/air-duct-priority-van-at-local-home.webp"
            alt="Air Duct Priority service van outside a local Pennsylvania home"
            width="1680"
            height="945"
            className="w-full rounded-lg object-cover shadow-lg"
          />
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Local Service</p>
            <h2 className="mb-5 text-3xl font-bold text-white lg:text-4xl">Serving Homes Across Bucks and Montgomery Counties</h2>
            <p className="text-lg leading-relaxed text-slate-300">Call, text, or submit the form below to describe the concern. We will confirm the service area and schedule an in-person inspection when appropriate.</p>
          </div>
        </div>
      </section>

      {/* Request Service Form */}
      <section id="contact" className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              Request Service Online
            </h2>
            <p className="text-lg text-slate-700">
              Complete the form below and we'll reach out to schedule your free inspection
            </p>
          </div>

          <ContactForm />

          <p className="mt-6 text-center text-sm text-slate-600">
            We typically respond the same day. Urgent airflow or overheating dryer? Call immediately.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            What Happens Next
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">You Contact Us</h3>
              <p className="text-slate-700">
                Call, text, or submit the form with your service needs and location
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">We Confirm & Schedule</h3>
              <p className="text-slate-700">
                We respond quickly to set up a convenient time for your free inspection
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Inspection & Clear Recommendations</h3>
              <p className="text-slate-700">
                We assess your system and provide honest recommendations for service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Mini Block */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Serving Bucks County & Montgomery County
          </h2>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Bucks County</h3>
              <p className="text-slate-700">
                Doylestown, Newtown, Warminster, Warrington, Richboro, Churchville, Chalfont, and surrounding areas
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Montgomery County</h3>
              <p className="text-slate-700">
                Lansdale, Hatfield, North Wales, Horsham, Willow Grove, and surrounding areas
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/service-area" className="text-blue-600 hover:text-blue-700 font-semibold underline">
              View Full Service Area
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
            Ready for a Free Inspection?
          </h2>
          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Free Inspection – Call (215) 710-8781
          </a>
          <p className="mt-4 text-sm text-gray-300">
            Prefer texting? Send us a message anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
