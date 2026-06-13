import { Camera, CheckCircle2, SearchCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const inspectionPoints = [
  'We inspect accessible dryer vent and air duct conditions.',
  'We explain what we find before recommending work.',
  'If cleaning is not needed, we say so.',
  'You receive clear pricing before work begins.',
];

const proofPoints = [
  'Before-and-after video proof when possible.',
  'Full-system air duct cleaning, not just visible vent covers.',
  'Airflow checks after dryer vent service.',
  'Repair recommendations only when the system needs them.',
];

export default function InspectionProofSection() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Clear Answers, Real Proof</p>
          <h2 className="text-3xl font-bold text-white lg:text-4xl">No Pressure. No Guesswork.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 lg:p-10">
            <SearchCheck className="mb-5 h-10 w-10 text-[#F97316]" />
            <h3 className="mb-4 text-2xl font-bold !text-white">Free In-Person Inspection</h3>
            <p className="mb-6 text-slate-300">
              We identify whether the real issue is cleaning, repair, installation, or something inside the appliance.
            </p>
            <ul className="space-y-3">
              {inspectionPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/free-inspection" className="mt-7 inline-block font-semibold text-blue-400 underline hover:text-blue-300">Learn about the free inspection</Link>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 lg:p-10">
            <Camera className="mb-5 h-10 w-10 text-[#F97316]" />
            <h3 className="mb-4 text-2xl font-bold !text-white">Before-and-After Video Proof</h3>
            <p className="mb-6 text-slate-300">
              Customers should be able to understand what was found and see the work performed inside their own system.
            </p>
            <ul className="space-y-3">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
