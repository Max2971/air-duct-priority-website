import { CheckCircle2, Phone, ShieldX } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const checkedItems = ['Visible accessible duct conditions', 'Heavy dust or debris', 'Return and supply duct concerns', 'Airflow concerns', 'Odor concerns', 'Construction or renovation dust', 'Visible damage or disconnected sections', 'Whether cleaning is actually needed'];
const usefulWhen = ['You are unsure whether air duct cleaning is needed', 'There was recent renovation or construction', 'You notice odors, debris, or weak airflow', 'You recently purchased a home', 'You want a second opinion without pressure', 'You want a clear scope and price before work'];
const noPressure = ['No scare tactics', 'No fake mold claims', 'No pressure to clean ducts that look clean', 'No hidden fees', 'No bait-and-switch pricing', 'No unnecessary upsells'];

export default function FreeInspectionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative min-h-[640px] overflow-hidden text-white lg:min-h-[720px]">
        <img
          src="/max-air-duct-priority-service-van.webp"
          alt="Max G.A., founder of Air Duct Priority, standing beside the company service van"
          width="1536"
          height="1024"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/20" />
        <div className="container relative mx-auto flex min-h-[640px] max-w-7xl items-center px-6 py-20 lg:min-h-[720px]">
          <div className="max-w-2xl rounded-2xl border border-white/15 bg-slate-950/45 p-7 shadow-2xl backdrop-blur-[2px] md:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FDBA74]">Owner-Operated, No Pressure</p>
            <h1 className="mb-6 text-4xl font-bold !text-white md:text-5xl lg:text-6xl">Free In-Person Air Duct Inspection</h1>
            <p className="mb-4 text-xl leading-relaxed text-slate-100">Meet directly with Max and get a clear recommendation from the person responsible for the work.</p>
            <p className="mb-8 text-base leading-relaxed text-slate-300">If air duct cleaning is not needed, we say so. Dryer vent cleaning and repair are separate booked services.</p>
            <a href="tel:+12157108781" className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"><Phone className="h-5 w-5" />Call About an Air Duct Inspection</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28"><div className="container mx-auto max-w-7xl px-6"><div className="grid gap-12 lg:grid-cols-2">
        <div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">What Is Included</p><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">A Clear Look at Your Air Duct System</h2><p className="mb-8 text-lg text-slate-700">The inspection helps determine whether the right next step is air duct cleaning, repair, or no work at all.</p><ul className="grid gap-4 sm:grid-cols-2">{checkedItems.map(item => <li key={item} className="flex gap-3 rounded-lg bg-white p-4 text-slate-800"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />{item}</li>)}</ul></div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 lg:p-10"><h2 className="mb-6 text-2xl font-bold text-slate-900">When to Schedule an Inspection</h2><ul className="space-y-4">{usefulWhen.map(item => <li key={item} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />{item}</li>)}</ul></div>
      </div></div></section>

      <section className="bg-slate-900 py-20 lg:py-24"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div><ShieldX className="mb-5 h-10 w-10 text-[#F97316]" /><h2 className="mb-5 text-3xl font-bold !text-white lg:text-4xl">What We Do Not Do</h2><p className="text-lg text-slate-300">The goal is to solve the real problem, not sell a service the customer does not need.</p></div>
        <ul className="grid gap-4 sm:grid-cols-2">{noPressure.map(item => <li key={item} className="flex gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />{item}</li>)}</ul>
      </div></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 text-center"><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">How Pricing Works</h2><p className="mb-5 text-lg text-slate-700">Air duct cleaning pricing depends on the actual condition, access, number of duct systems, and whether repair is needed.</p><p className="font-semibold text-slate-900">You receive the price and scope before work begins. No hidden fees.</p></div></section>

      <section id="request-inspection" className="scroll-mt-24 bg-slate-50 py-20 lg:py-24"><div className="container mx-auto max-w-3xl px-6"><div className="mb-10 text-center"><h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">Request Your Free Air Duct Inspection</h2><p className="text-lg text-slate-700">Serving Bucks County and Montgomery County, Pennsylvania.</p></div><ContactForm /></div></section>
      <Footer />
    </div>
  );
}
