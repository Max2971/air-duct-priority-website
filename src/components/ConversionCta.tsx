import { CheckCircle2, MessageSquareText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

type ConversionCtaProps = {
  title?: string;
  description?: string;
  onlineLabel?: string;
};

const trustPoints = [
  '544 verified Google reviews',
  'Licensed & insured',
  'Owner-operated',
  'Clear price before work',
];

export default function ConversionCta({
  title = 'Not sure what your system needs?',
  description = 'Request a free in-person inspection. If cleaning is not needed, we say so.',
  onlineLabel = 'Request Free Inspection',
}: ConversionCtaProps) {
  return (
    <section className="bg-slate-900 py-12 text-white lg:py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">A clear next step</p>
            <h2 className="mb-4 text-3xl font-bold !text-white lg:text-4xl">{title}</h2>
            <p className="max-w-2xl text-lg text-slate-300">{description}</p>
          </div>
          <div>
            <div className="mb-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-200">
              {trustPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  {point}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+12157108781" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700">
                <Phone className="h-5 w-5" />
                Call
              </a>
              <a href="sms:+12157108781" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500 px-6 py-4 font-bold text-white hover:bg-slate-800">
                <MessageSquareText className="h-5 w-5" />
                Text Us
              </a>
              <Link to="/free-inspection#request-inspection" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 text-center font-bold text-slate-900 hover:bg-slate-100">
                {onlineLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
