import { ArrowRight, Hammer, RefreshCw, Wind, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Wind,
    title: 'Dryer Vent Cleaning',
    description: 'Remove accessible lint buildup, check airflow, and inspect the exterior termination.',
    href: '/services/dryer-vent-cleaning',
  },
  {
    icon: Wrench,
    title: 'Dryer Vent Repair',
    description: 'Repair disconnected, crushed, damaged, or poorly performing dryer vent lines.',
    href: '/services/dryer-vent-repair',
  },
  {
    icon: Hammer,
    title: 'Dryer Vent Installation',
    description: 'Install or replace dryer vent lines with safety and airflow in mind.',
    href: '/services/dryer-vent-installation',
  },
  {
    icon: RefreshCw,
    title: 'Air Duct Cleaning',
    description: 'Inspection-based, full-system cleaning when the ductwork shows a real need.',
    href: '/services/air-duct-cleaning',
  },
];

export default function HomeServicesSection() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F97316]">Core Services</p>
          <h2 className="mb-5 text-3xl font-bold text-slate-900 lg:text-4xl">
            Dryer Vent &amp; Air Duct Services from One Local Company
          </h2>
          <p className="text-base text-slate-700 md:text-lg">
            Air Duct Priority provides cleaning, repair, installation, and airflow-focused solutions throughout Bucks County and Montgomery County.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              to={href}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-6"
            >
              <Icon className="mb-4 h-8 w-8 text-[#F97316] md:mb-5 md:h-9 md:w-9" />
              <h3 className="mb-2 text-lg font-bold text-slate-900 md:mb-3 md:text-xl">{title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-700 md:mb-5">{description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
