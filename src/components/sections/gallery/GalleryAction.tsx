import { Phone } from 'lucide-react';

export default function GalleryAction() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-slate-900">
            Not Sure What Condition Your Dryer Vent Is In?
          </h2>

          <p className="mb-8 text-lg text-slate-700 max-w-2xl mx-auto">
            Most homeowners never see inside their dryer vent system.
We offer a free inspection so you can understand the condition of your vent before any work is done.
          </p>

          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-3 rounded-lg bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800"
          >
            <Phone className="h-6 w-6" />
            Schedule Free Inspection (215) 710 8781
          </a>
        </div>
      </div>
    </section>
  );
}
