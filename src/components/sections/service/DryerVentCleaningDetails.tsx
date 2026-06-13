import { CheckCircle2, Flame, Gauge, Home, Wind } from 'lucide-react';

const symptoms = [
  'Dryer takes two cycles to dry', 'Dryer gets unusually hot', 'Burning smell while drying',
  'Lint around the exterior vent', 'Weak airflow outside', 'LG D90 or another airflow error',
  'Bird nest or exterior debris', 'Roof-exit vent appears clogged', 'Long or inefficient dryer vent run',
];

const included = [
  'Inspection of the accessible dryer vent system', 'Cleaning of the accessible dryer vent line',
  'Lint, debris, and blockage removal', 'Exterior termination check',
  'Bird nest removal when present and accessible', 'Airflow check after cleaning',
  'Before-and-after proof when possible', 'Clear repair recommendation only if needed',
];

export default function DryerVentCleaningDetails() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Dryer Vent Warning Signs</p>
          <h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">When to Schedule Dryer Vent Cleaning</h2>
          <p className="text-lg text-slate-700">Restricted airflow often develops gradually. These symptoms can indicate lint buildup, a blockage, or a vent-system problem that should be inspected.</p>
        </div>
        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {symptoms.map((symptom, index) => {
            const icons = [Wind, Gauge, Flame, Home];
            const Icon = icons[index % icons.length];
            return <div key={symptom} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5"><Icon className="h-6 w-6 flex-shrink-0 text-[#F97316]" /><p className="font-semibold text-slate-800">{symptom}</p></div>;
          })}
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-900 p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">What Is Included</p>
              <h2 className="mb-5 text-3xl font-bold !text-white lg:text-4xl">Inspection, Cleaning, and Clear Answers</h2>
              <p className="text-slate-300">Air Duct Priority cleans the accessible vent line, checks airflow, and explains whether cleaning solved the problem or whether repair is needed.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
