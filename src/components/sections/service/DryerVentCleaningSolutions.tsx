import { ArrowRight, Bird, Hammer, RefreshCw, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const relatedServices = [
  { icon: Wrench, title: 'Dryer Vent Repair', description: 'For disconnected, crushed, leaking, or damaged dryer vent lines.', href: '/services/dryer-vent-repair' },
  { icon: Hammer, title: 'Dryer Vent Installation', description: 'For missing, unsafe, or poorly installed vent lines that need replacement.', href: '/services/dryer-vent-installation' },
  { icon: RefreshCw, title: 'Dryer Vent Rerouting', description: 'For long or inefficient routes that continue restricting airflow.', href: '/services/dryer-vent-rerouting' },
  { icon: Bird, title: 'Bird Guard Installation', description: 'For bird nests, damaged exterior covers, and recurring animal entry.', href: '/services/bird-guard' },
];

export default function DryerVentCleaningSolutions() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">When Cleaning Is Not Enough</p><h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">Some Airflow Problems Require Repair</h2><p className="mb-5 text-lg text-slate-700">A clean vent can still perform poorly if the line is crushed, disconnected, damaged, improperly routed, or blocked by the wrong exterior termination.</p><p className="text-slate-700">If the issue appears to be inside the dryer instead of the vent, we tell the customer. No unnecessary upsells and no pressure to approve work that is not needed.</p></div>
          <div className="rounded-lg border-l-4 border-[#F97316] bg-slate-50 p-8"><h3 className="mb-5 text-xl font-bold text-slate-900">Problems Cleaning Alone May Not Fix</h3><ul className="space-y-3 text-slate-700"><li>Disconnected or crushed vent line</li><li>Improper flexible duct behind the dryer</li><li>Long, inefficient, or poorly routed vent</li><li>Damaged exterior cover or roof termination</li><li>Moisture, condensation, or attic vent issues</li><li>An airflow error caused by the dryer itself</li></ul></div>
        </div></div>
      </section>
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6"><div className="mx-auto mb-12 max-w-3xl text-center"><h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">Related Dryer Vent Services</h2><p className="text-lg text-slate-700">Cleaning, repair, installation, and exterior vent solutions from one owner-operated local company.</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{relatedServices.map(({ icon: Icon, title, description, href }) => <Link key={title} to={href} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><Icon className="mb-5 h-8 w-8 text-[#F97316]" /><h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3><p className="mb-5 text-sm leading-relaxed text-slate-700">{description}</p><span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
        </div>
      </section>
    </>
  );
}
