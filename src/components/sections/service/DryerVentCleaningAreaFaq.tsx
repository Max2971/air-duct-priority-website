import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const areas = ['Jamison', 'Doylestown', 'Newtown', 'Richboro', 'Warrington', 'Yardley', 'New Hope', 'Lansdale', 'Blue Bell'];
const faqs = [
  ['How do I know if my dryer vent is clogged?', 'Common signs include longer drying times, two drying cycles, a hot dryer, weak exterior airflow, lint around the exterior vent, an airflow error, or a burning smell.'],
  ['How often should a dryer vent be cleaned?', 'The right interval depends on the vent length, route, dryer usage, household size, and prior buildup. An inspection can determine whether cleaning is currently needed.'],
  ['Do you clean roof-exit dryer vents?', 'Yes, roof-exit dryer vents can be inspected and cleaned when access and conditions allow.'],
  ['Are you licensed and insured?', 'Yes. Air Duct Priority is licensed and insured. Pennsylvania license PA154999.'],
  ['Do you repair dryer vents or only clean them?', 'Air Duct Priority provides dryer vent cleaning, repair, installation, rerouting, bird nest removal, bird guard installation, and exterior vent cover replacement.'],
  ['Can you remove a bird nest from a dryer vent?', 'Yes. Bird nesting material can be removed when present and accessible, and an appropriate exterior solution may be recommended to help prevent recurrence.'],
  ['What if the dryer still shows an airflow error after cleaning?', 'The vent route, exterior termination, damaged vent sections, and dryer itself may need further evaluation. If the issue appears to be inside the appliance, we tell the customer.'],
  ['Do you provide before-and-after proof?', 'Yes. Before-and-after proof is provided when possible so customers can understand the condition and result of their own dryer vent service.'],
  ['What areas do you serve?', 'Air Duct Priority serves Bucks County and Montgomery County, including Jamison, Doylestown, Newtown, Richboro, Warrington, Yardley, New Hope, Lansdale, and Blue Bell.'],
  ['How much does dryer vent cleaning cost?', 'Pricing depends on vent length, exit location, access, blockage level, bird nests, and whether repair is needed. Air Duct Priority provides clear pricing before work begins.'],
];

export default function DryerVentCleaningAreaFaq() {
  return (
    <>
      <section className="bg-white py-20 lg:py-24"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div><MapPin className="mb-5 h-10 w-10 text-[#F97316]" /><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">Dryer Vent Cleaning Across Bucks County and Montgomery County</h2><p className="mb-6 text-lg text-slate-700">Air Duct Priority is based in Jamison, Pennsylvania and provides owner-operated dryer vent service throughout the local area.</p><Link to="/service-area" className="font-semibold text-blue-600 underline hover:text-blue-700">View the full service area</Link></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{areas.map((area) => <div key={area} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center font-semibold text-slate-800">{area}, PA</div>)}</div>
      </div></div></section>
      <section className="bg-slate-50 py-20 lg:py-28"><div className="container mx-auto max-w-4xl px-6"><div className="mb-12 text-center"><h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">Dryer Vent Cleaning FAQ</h2><p className="text-lg text-slate-700">Answers about inspections, cleaning, airflow problems, repairs, and pricing.</p></div><div className="space-y-4">{faqs.map(([question, answer]) => <article key={question} className="rounded-lg border border-slate-200 bg-white p-6"><h3 className="mb-2 text-lg font-bold text-slate-900">{question}</h3><p className="text-slate-700">{answer}</p></article>)}</div></div></section>
    </>
  );
}
