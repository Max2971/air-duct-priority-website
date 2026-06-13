import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Calendar, MapPin, Clock, Shield, FileCheck } from 'lucide-react';

export default function ServiceAreaPage() {
  const bucksCountyCities = [
    'Doylestown',
    'Newtown',
    'Warrington',
    'Yardley',
    'Jamison',
    'Lahaska',
    'Richboro',
    'Southampton',
    'New Hope',
    'Holland'
  ];

  const montgomeryCountyCities = [
    'Lansdale',
    'North Wales',
    'Montgomeryville',
    'Horsham',
    'Ambler',
    'Willow Grove'
  ];

  const whyLocalMatters = [
    { icon: Clock, text: 'Faster response times' },
    { icon: MapPin, text: 'Experience with Pennsylvania bird nesting issues' },
    { icon: Shield, text: 'Knowledge of regional home ventilation systems' },
    { icon: FileCheck, text: 'No franchise pricing' },
    
    { icon: Shield, text: 'Professional Vacuum equipment' }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Dryer Vent & Air Duct Cleaning in Bucks County, Montgomery County & Philadelphia
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
              Air Duct Priority proudly serves homeowners across Southeastern Pennsylvania with professional dryer vent cleaning, bird nest removal, and full air duct cleaning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+12157108781"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call for FREE Inspection
              </a>
              <a
                href="tel:+12157108781"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                Schedule Service
              </a>
            </div>

            <a
              href="tel:+12157108781"
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-7 h-7" />
              (215) 710 8781
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Based in Bucks County. Serving Surrounding Communities.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Air Duct Priority is locally owned and based in Doylestown, PA. We proudly provide professional dryer vent and air duct cleaning services throughout Bucks County, Montgomery County, and the city of Philadelphia.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our team understands local home construction, seasonal issues, and common dryer vent safety risks in this region.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Areas We Serve
          </h2>
<p className="text-lg text-slate-700 leading-relaxed text-center">
              Same-day / next-day availability may be available depending on your area.
            </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                Bucks County
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {bucksCountyCities.map((city) => (
                  <li key={city} className="text-slate-700 text-sm md:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full flex-shrink-0"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                Montgomery County
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {montgomeryCountyCities.map((city) => (
                  <li key={city} className="text-slate-700 text-sm md:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full flex-shrink-0"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-orange-50 border-l-4 border-orange-600 p-8 rounded-lg max-w-3xl mx-auto">
           
            <p className="text-lg text-slate-800 leading-relaxed">
              If you're unsure whether you're within our service area, simply call us and we'll confirm availability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Choosing a Local Dryer Vent Company Matters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyLocalMatters.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-50 p-6 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-slate-800 font-medium pt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Not Sure If You're in Our Service Area?
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Call Air Duct Priority today to schedule your FREE dryer vent inspection.
          </p>

          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-3 bg-orange-600 text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-orange-700 transition-colors shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Call Now: (215) 710 8781
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
