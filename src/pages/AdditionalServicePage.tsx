import { CheckCircle2, Phone, Wrench } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  eyebrow: string; title: string; intro: string; problems: string[];
  process: Array<{ title: string; description: string }>; detailsTitle: string; details: string[];
};

export default function AdditionalServicePage({ eyebrow, title, intro, problems, process, detailsTitle, details }: Props) {
  return <div className="min-h-screen"><Header />
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-28"><div className="container mx-auto max-w-5xl px-6 text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F97316]">{eyebrow}</p><h1 className="mb-6 text-4xl font-bold !text-white md:text-5xl lg:text-6xl">{title}</h1><p className="mx-auto mb-8 max-w-3xl text-xl text-slate-200">{intro}</p>
      <a href="tel:+12157108781" className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700"><Phone className="h-5 w-5" />Request a Free Inspection</a>
    </div></section>
    <section className="bg-white py-20 lg:py-24"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">When to Call</p><h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">Signs the System Needs Attention</h2><ul className="space-y-4">{problems.map(x => <li key={x} className="flex gap-3 text-lg text-slate-700"><CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#F97316]" />{x}</li>)}</ul></div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 lg:p-10"><Wrench className="mb-5 h-10 w-10 text-[#F97316]" /><h2 className="mb-5 text-2xl font-bold text-slate-900">{detailsTitle}</h2><ul className="space-y-4">{details.map(x => <li key={x} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />{x}</li>)}</ul></div>
    </div></div></section>
    <section className="bg-slate-900 py-20 lg:py-24"><div className="container mx-auto max-w-7xl px-6"><div className="mb-12 text-center"><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Our Process</p><h2 className="text-3xl font-bold !text-white lg:text-4xl">Inspection First, Clear Solution Second</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{process.map((step, i) => <div key={step.title} className="rounded-lg border border-slate-700 bg-slate-800 p-6"><span className="mb-4 block text-3xl font-bold text-[#F97316]">{i + 1}</span><h3 className="mb-3 text-xl font-bold !text-white">{step.title}</h3><p className="text-slate-300">{step.description}</p></div>)}</div></div></section>
    <section className="bg-white py-20 text-center lg:py-24"><div className="container mx-auto max-w-4xl px-6"><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">Get a Clear Recommendation Before Work Begins</h2><p className="mb-8 text-lg text-slate-700">Owner-operated service, clear pricing, and no-pressure recommendations across Bucks County and Montgomery County.</p><a href="tel:+12157108781" className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700"><Phone className="h-5 w-5" />Call (215) 710-8781</a></div></section>
    <Footer /></div>;
}
