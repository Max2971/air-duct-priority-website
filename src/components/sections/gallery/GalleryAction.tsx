import { Phone, SearchCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryAction() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-slate-900">
            Not Sure What Condition Your Dryer Vent or Air Ducts Are In?
          </h2>

          <p className="mb-8 text-lg text-slate-700 max-w-2xl mx-auto">
            Most homeowners never see inside these systems. Call us to discuss dryer vent concerns, or request a complimentary in-person inspection when you are unsure whether your air ducts need cleaning.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:+12157108781" className="inline-flex items-center justify-center gap-3 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800">
              <Phone className="h-5 w-5" />
              Call About Dryer Vent Service
            </a>
            <Link to="/free-inspection#request-inspection" className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700">
              <SearchCheck className="h-5 w-5" />
              Request Air Duct Inspection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
