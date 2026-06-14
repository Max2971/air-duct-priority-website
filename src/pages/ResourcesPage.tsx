import { ArrowRight, BookOpen, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const resources = [
  ['Signs Your Dryer Vent May Be Clogged','Learn the common warning signs, what you can check safely, and when the dryer should be stopped.','/resources/signs-dryer-vent-clogged'],
  ['Dryer Vent Cleaning, Repair, or Replacement: What Is Actually Needed?','Understand which service solves lint buildup, physical damage, poor routing, or a failed vent line.','/resources/dryer-vent-cleaning-repair-or-replacement'],
  ['Bird Nest in an Exterior Vent: What Homeowners Should Know','Identify affected exhaust vents, avoid common mistakes, and understand removal and prevention options.','/resources/bird-nest-in-exterior-vent'],
  ['Why Some Air Duct and Dryer Vent Prices Require an Inspection','Learn why an inspection protects homeowners from unnecessary cleaning, oversized installation scopes, and misleading phone quotes.','/resources/air-duct-cleaning-price-inspection'],
  ['How Often Should a Dryer Vent Be Cleaned?','Understand the annual baseline and why household use, pets, and vent design can change the right interval.','/resources/how-often-clean-dryer-vent'],
  ['Rigid Metal vs. Flexible Dryer Vent: Where Each Belongs','Understand the difference between the permanent metal exhaust route and the short transition behind the dryer.','/resources/rigid-vs-flexible-dryer-vent'],
];

export default function ResourcesPage(){return <div className="min-h-screen"><Header />
  <section className="bg-slate-900 py-20 text-center md:py-28"><div className="container mx-auto max-w-5xl px-6"><BookOpen className="mx-auto mb-6 h-12 w-12 text-[#F97316]" /><h1 className="mb-6 text-4xl font-bold !text-white md:text-6xl">Dryer Vent &amp; Air Duct Resources</h1><p className="mx-auto max-w-3xl text-xl text-slate-200">Practical answers based on real field experience, written to help homeowners understand the problem before choosing a service.</p></div></section>
  <section className="bg-white py-20"><div className="container mx-auto max-w-6xl px-6"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{resources.map(([title,description,href]) => <article key={href} className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-7"><h2 className="mb-4 text-2xl font-bold text-slate-900">{title}</h2><p className="mb-6 flex-1 text-slate-700">{description}</p><Link to={href} className="inline-flex items-center gap-2 font-semibold text-blue-700 underline">Read the guide <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div></section>
  <section className="bg-slate-900 py-16 text-center"><div className="container mx-auto max-w-4xl px-6"><h2 className="mb-4 text-3xl font-bold !text-white">Still Not Sure What Your System Needs?</h2><p className="mb-7 text-lg text-slate-300">A free in-person inspection can separate a cleaning issue from a repair, routing, or appliance problem.</p><a href="tel:+12157108781" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white"><Phone className="h-5 w-5" />Call for Free Inspection</a></div></section><Footer /></div>}
