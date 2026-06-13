import { CheckCircle2, Phone, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProofSection from '../components/sections/ProofSection';

const themes = ['Honesty and no-pressure recommendations', 'Max mentioned by name', 'Punctual and professional service', 'Clear pricing and explanations', 'Clean, careful work', 'Dryer vent and air duct expertise', 'Before-and-after proof'];

export default function ReviewsPage() {
  return <div className="min-h-screen"><Header />
    <section className="bg-slate-900 py-20 text-center md:py-32"><div className="container mx-auto max-w-5xl px-6"><div className="mb-6 flex justify-center gap-2">{[1,2,3,4,5].map(n=><Star key={n} className="h-9 w-9 fill-yellow-400 text-yellow-400" />)}</div><h1 className="mb-6 text-4xl font-bold !text-white md:text-6xl">Air Duct Priority Reviews</h1><p className="mx-auto mb-8 max-w-3xl text-xl text-slate-200">Air Duct Priority has 543 verified Google reviews and a 5-star Google profile reported by the company as of June 2026.</p><a href="https://maps.app.goo.gl/c8kKh1yKKoHy9qNu6" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">Read Verified Google Reviews</a></div></section>
    <section className="bg-white py-20"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Common Review Themes</p><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">What Local Homeowners Consistently Mention</h2><p className="text-lg text-slate-700">Reviews frequently describe direct owner involvement, honest inspections, careful work, and clear explanations before service begins.</p></div><ul className="grid gap-4 sm:grid-cols-2">{themes.map(t=><li key={t} className="flex gap-3 rounded-lg bg-slate-50 p-5 text-slate-800"><CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#F97316]" />{t}</li>)}</ul></div></div></section>
    <ProofSection />
    <section className="bg-slate-900 py-16 text-center"><div className="container mx-auto max-w-4xl px-6"><h2 className="mb-6 text-3xl font-bold !text-white">Call for a Free In-Person Inspection</h2><a href="tel:+12157108781" className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white"><Phone className="h-5 w-5" />(215) 710-8781</a></div></section>
    <Footer /></div>;
}
