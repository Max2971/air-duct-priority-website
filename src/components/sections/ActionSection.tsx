import { Phone } from 'lucide-react';
import ContactForm from '../ContactForm';

export default function ActionSection() {
  return (
    <section id="action" className="bg-slate-50 pt-12 pb-20 lg:pt-16 lg:pb-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left Side - Context & Phone */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Need help with your dryer vent or air duct system?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              Free in-person inspection, clear pricing before work, and no-pressure recommendations from an owner-operated local company.

            </p>

            {/* Primary Action - Phone */}
            <a href="tel:+12157108781" className="block mb-8 rounded-lg border-2 border-blue-600 bg-white p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
                Call for service
              </p>
              <div className="group mb-2 flex items-center gap-4 text-2xl font-bold text-blue-600 transition hover:text-blue-700 md:text-3xl lg:text-4xl min-w-0">
                <Phone className="h-8 w-8 flex-shrink-0" />
                <span className="break-words min-w-0" style={{ overflowWrap: 'anywhere' }}>
                  (215) 710-8781
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Phone Hours: 24/7
              </p>
              <p className="text-sm text-slate-600">
                Service Hours: Monday-Saturday, 8am-6pm
              </p>
            </a>

            {/* Service Area */}
            <p className="text-sm text-slate-600">
              Serving Bucks County and Montgomery County, Pennsylvania
            </p>
          </div>

          {/* Right Side - Form */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}
