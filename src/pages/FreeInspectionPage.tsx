import { CheckCircle2, Phone, SearchCheck, ShieldX } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const checkedItems = ['Visible dryer vent and accessible duct conditions', 'Signs of lint buildup or blockage', 'Heavy dust or debris', 'Bird nest and exterior vent concerns', 'Airflow concerns', 'Odor concerns', 'Construction or renovation dust', 'Visible damage or disconnected sections'];
const usefulWhen = ['Your dryer takes two cycles to dry', 'You are considering replacing your dryer', 'You are unsure whether air duct cleaning is needed', 'There was recent renovation or construction', 'You notice odors, debris, or weak airflow', 'You want a second opinion without pressure'];
const noPressure = ['No scare tactics', 'No fake mold claims', 'No pressure to clean ducts that look clean', 'No hidden fees', 'No bait-and-switch pricing', 'No unnecessary upsells'];

export default function FreeInspectionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-32">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <SearchCheck className="mx-auto mb-6 h-14 w-14 text-[#F97316]" />
          <h1 className="mb-6 text-4xl font-bold !text-white md:text-5xl lg:text-6xl">Free In-Person Dryer Vent &amp; Air Duct Inspection</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-200">No pressure. If cleaning is not needed, we say so. Air Duct Priority explains what we find and provides clear pricing before work begins.</p>
          <a href="tel:+12157108781" className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700"><Phone className="h-5 w-5" />Call for Free Inspection</a>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <img
            src="/max-air-duct-priority-service-van.webp"
            alt="Max G.A., founder of Air Duct Priority, standing beside the company service van"
            width="1536"
            height="1024"
            className="w-full rounded-lg object-cover shadow-lg"
          />
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Owner-Operated Service</p>
            <h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">A Direct Recommendation From the Person Responsible for the Work</h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">Air Duct Priority is not a call-center operation. Max personally stands behind the inspection, recommendation, and work performed in your home.</p>
            <p className="text-lg leading-relaxed text-slate-700">The purpose of the inspection is to identify the real issue and explain whether cleaning, repair, installation, appliance service, or no work at all is the right next step.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28"><div className="container mx-auto max-w-7xl px-6"><div className="grid gap-12 lg:grid-cols-2">
        <div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">What Is Included</p><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">A Clear Look at the Real Problem</h2><p className="mb-8 text-lg text-slate-700">The inspection helps determine whether the right next step is cleaning, repair, installation, appliance service, or no work at all.</p><ul className="grid gap-4 sm:grid-cols-2">{checkedItems.map(item => <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-slate-800"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />{item}</li>)}</ul></div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 lg:p-10"><h2 className="mb-6 text-2xl font-bold text-slate-900">When to Schedule an Inspection</h2><ul className="space-y-4">{usefulWhen.map(item => <li key={item} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />{item}</li>)}</ul></div>
      </div></div></section>

      <section className="bg-slate-900 py-20 lg:py-24"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div><ShieldX className="mb-5 h-10 w-10 text-[#F97316]" /><h2 className="mb-5 text-3xl font-bold !text-white lg:text-4xl">What We Do Not Do</h2><p className="text-lg text-slate-300">The goal is to solve the real problem, not sell a service the customer does not need.</p></div>
        <ul className="grid gap-4 sm:grid-cols-2">{noPressure.map(item => <li key={item} className="flex gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />{item}</li>)}</ul>
      </div></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 text-center"><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">How Pricing Works</h2><p className="mb-5 text-lg text-slate-700">Pricing depends on the actual condition, access, vent length, blockage, number of duct systems, and whether repair or installation is needed.</p><p className="font-semibold text-slate-900">You receive the price and scope before work begins. No hidden fees.</p></div></section>

      <section id="request-inspection" className="bg-slate-50 py-20 lg:py-24"><div className="container mx-auto max-w-3xl px-6"><div className="mb-10 text-center"><h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">Request Your Free Inspection</h2><p className="text-lg text-slate-700">Serving Bucks County and Montgomery County, Pennsylvania.</p></div><ContactForm /></div></section>
      <Footer />
    </div>
  );
}
