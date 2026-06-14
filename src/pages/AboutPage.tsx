import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, CheckCircle2, ClipboardCheck, Wind, Target, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/owner-family-air-duct-priority.webp"
            alt="Max G.A., founder of Air Duct Priority, with his family"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/80"></div>
        </div>
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            Dryer Vent & Airflow Safety Specialists
          </h1>
          <p className="mb-4 text-xl text-gray-200 lg:text-2xl">
            Serving Bucks County & Montgomery County, PA
          </p>
          <p className="mb-8 text-base text-gray-300 lg:text-lg max-w-2xl mx-auto">
            We focus on professional dryer vent cleaning and airflow safety inspections to prevent fire risk and system damage.
          </p>
          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Free Inspection – Call (215) 710-8781
          </a>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Why We Exist
          </h2>

          <div className="space-y-6 text-base text-slate-700 lg:text-lg leading-relaxed">
            <p>
              Over 15,000 dryer fires occur every year in the United States. Most of them are preventable. Lint buildup and blocked airflow turn a routine appliance into a serious fire hazard. Yet most homeowners never inspect their dryer vents until something goes wrong.
            </p>

            <p>
              Hidden problems inside your vent line restrict airflow, trap heat, and create dangerous conditions you cannot see from the outside. Longer dry times and damp clothes are early warning signs that buildup is already blocking your system.
            </p>

            <p>
              We exist to prevent these problems before they happen. Our inspection-first approach identifies risk early, and our deep-cleaning process removes years of hidden buildup. We focus on airflow safety so your home stays protected and your dryer runs efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            What Makes Us Different
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <ClipboardCheck className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Inspection-First Approach</h3>
                <p className="text-slate-700">We assess airflow and identify hidden problems before we clean, so nothing gets missed.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Wind className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Full-Line Deep Cleaning</h3>
                <p className="text-slate-700">We clean the entire vent line from dryer to exterior, not just the easy-access areas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Target className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Commercial-Grade Equipment</h3>
                <p className="text-slate-700">Professional rotary brush systems and high-powered vacuums remove buildup other methods leave behind.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Before & After Verification</h3>
                <p className="text-slate-700">You see the buildup we remove and the airflow improvement we deliver.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2 md:max-w-md md:mx-auto">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Local, Accountable Service</h3>
                <p className="text-slate-700">We serve Bucks and Montgomery counties. Our reputation depends on doing the work right.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Our Process
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  1
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Inspection</h3>
              <p className="text-slate-700">
                We check airflow, measure restrictions, and identify problem areas in your vent system.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  2
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Deep Cleaning</h3>
              <p className="text-slate-700">
                We use rotary brushes and high-powered vacuums to remove all lint and debris from the entire line.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  3
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Airflow Confirmation</h3>
              <p className="text-slate-700">
                We verify proper airflow and test system performance to ensure the problem is fully resolved.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                  4
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Prevention Recommendations</h3>
              <p className="text-slate-700">
                We provide guidance on maintenance intervals and best practices to keep your system safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
            Protect Your Home Before There's a Problem
          </h2>
          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Free Inspection – Call (215) 710-8781
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
