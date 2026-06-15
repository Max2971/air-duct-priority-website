import { AlertTriangle, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConversionCta from '../components/ConversionCta';

export type ResourceSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ResourceArticleData = {
  title: string;
  summary: string;
  updated: string;
  readTime: string;
  sections: ResourceSection[];
  warningTitle: string;
  warnings: string[];
  table?: { headings: string[]; rows: string[][] };
  faqs: Array<[string, string]>;
  related: Array<[string, string]>;
};

export default function ResourceArticlePage({ data }: { data: ResourceArticleData }) {
  return <div className="min-h-screen bg-slate-50"><Header />
    <header className="bg-slate-900 py-16 text-white md:py-24"><div className="container mx-auto max-w-5xl px-6">
      <Link to="/resources" className="mb-5 inline-block text-sm font-semibold text-blue-300 underline">Resources</Link>
      <h1 className="mb-6 text-4xl font-bold !text-white md:text-5xl">{data.title}</h1>
      <p className="mb-6 max-w-4xl text-xl text-slate-200">{data.summary}</p>
      <p className="text-sm text-slate-400">By Max G.A., Founder and Owner-Operator | Updated {data.updated} | {data.readTime}</p>
    </div></header>

    <main className="py-16 lg:py-20"><div className="container mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[260px_minmax(0,850px)] lg:justify-center">
      <aside><nav className="rounded-lg border border-slate-200 bg-white p-6 lg:sticky lg:top-28"><p className="mb-4 font-bold text-slate-900">In This Guide</p><ul className="space-y-3 text-sm">{data.sections.map(s => <li key={s.id}><a href={`#${s.id}`} className="text-blue-700 underline">{s.title}</a></li>)}<li><a href="#faq" className="text-blue-700 underline">Frequently Asked Questions</a></li></ul></nav></aside>
      <article className="min-w-0">
        <section className="mb-10 rounded-lg border-l-4 border-[#F97316] bg-white p-7 shadow-sm"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#F97316]">Quick Answer</p><p className="text-lg leading-relaxed text-slate-800">{data.summary}</p></section>

        {data.sections.map((section, index) => <section id={section.id} key={section.id} className="mb-12 scroll-mt-28">
          <h2 className="mb-5 text-3xl font-bold text-slate-900">{section.title}</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-700">{section.paragraphs?.map(p => <p key={p}>{p}</p>)}</div>
          {section.bullets && <ul className="mt-6 space-y-3">{section.bullets.map(b => <li key={b} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />{b}</li>)}</ul>}
          {index === 1 && <div className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-6"><div className="mb-3 flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-amber-700" /><h3 className="text-xl font-bold text-slate-900">{data.warningTitle}</h3></div><ul className="space-y-2 text-slate-800">{data.warnings.map(w => <li key={w}>- {w}</li>)}</ul></div>}
          {index === 2 && data.table && <ComparisonTable table={data.table} />}
        </section>)}

        <section id="faq" className="mb-12 scroll-mt-28"><h2 className="mb-6 text-3xl font-bold text-slate-900">Frequently Asked Questions</h2><div className="space-y-4">{data.faqs.map(([q,a]) => <article key={q} className="rounded-lg border border-slate-200 bg-white p-6"><h3 className="mb-2 text-xl font-bold text-slate-900">{q}</h3><p className="text-slate-700">{a}</p></article>)}</div></section>

        <section className="mb-12 rounded-lg bg-slate-900 p-8"><h2 className="mb-4 text-2xl font-bold !text-white">Related Services</h2><div className="grid gap-3 sm:grid-cols-2">{data.related.map(([label,href]) => <Link key={href} to={href} className="rounded bg-slate-800 p-4 font-semibold text-blue-300 underline">{label}</Link>)}</div></section>

        <section className="rounded-lg border border-slate-200 bg-white p-8"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#F97316]">About the Author</p><h2 className="mb-3 text-2xl font-bold text-slate-900">Max G.A., Founder of Air Duct Priority</h2><p className="mb-5 text-slate-700">Max is the owner-operator of Air Duct Priority, based in Jamison, Pennsylvania, with more than nine years of field experience in dryer vent and air duct services.</p><a href="tel:+12157108781" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"><Phone className="h-5 w-5" />Request a Free Inspection</a></section>
      </article>
    </div></main>
    <ConversionCta title="Want a Clear Answer for Your Own Home?" description="Request a free in-person inspection to separate a cleaning issue from repair, routing, or an appliance problem." />
    <Footer /></div>;
}

function ComparisonTable({ table }: { table: NonNullable<ResourceArticleData['table']> }) {
  return <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white"><table className="w-full min-w-[620px] text-left"><thead className="bg-slate-900 text-white"><tr>{table.headings.map(h => <th key={h} className="p-4 font-semibold">{h}</th>)}</tr></thead><tbody>{table.rows.map((row, i) => <tr key={row[0]} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>{row.map(cell => <td key={cell} className="border-t border-slate-200 p-4 align-top text-slate-700">{cell}</td>)}</tr>)}</tbody></table></div>;
}
