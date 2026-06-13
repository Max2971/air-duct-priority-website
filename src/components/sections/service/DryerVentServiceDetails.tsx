import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  eyebrow: string;
  heading: string;
  intro: string;
  items: string[];
  approachHeading: string;
  approach: string[];
  faqHeading: string;
  faqs: Array<[string, string]>;
};

export default function DryerVentServiceDetails({ eyebrow, heading, intro, items, approachHeading, approach, faqHeading, faqs }: Props) {
  return (
    <>
      <section className="bg-white py-20 lg:py-28"><div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">{eyebrow}</p><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">{heading}</h2><p className="text-lg text-slate-700">{intro}</p></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" /><p className="font-semibold text-slate-800">{item}</p></div>)}</div>
      </div></section>
      <section className="bg-slate-900 py-20 lg:py-24"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Clear Recommendation</p><h2 className="mb-5 text-3xl font-bold !text-white lg:text-4xl">{approachHeading}</h2><p className="mb-6 text-slate-300">Air Duct Priority provides a free in-person inspection, explains what is found, and recommends the practical option without pressure.</p><Link to="/services/dryer-vent-cleaning" className="font-semibold text-blue-400 underline hover:text-blue-300">Learn about dryer vent cleaning</Link></div>
        <ul className="space-y-4">{approach.map((item) => <li key={item} className="flex gap-3 text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />{item}</li>)}</ul>
      </div></div></section>
      <section className="bg-white py-20 lg:py-28"><div className="container mx-auto max-w-4xl px-6"><div className="mb-12 text-center"><h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">{faqHeading}</h2><p className="text-lg text-slate-700">Clear answers before you schedule an inspection.</p></div><div className="space-y-4">{faqs.map(([question, answer]) => <article key={question} className="rounded-lg border border-slate-200 bg-slate-50 p-6"><h3 className="mb-2 text-lg font-bold text-slate-900">{question}</h3><p className="text-slate-700">{answer}</p></article>)}</div></div></section>
    </>
  );
}
