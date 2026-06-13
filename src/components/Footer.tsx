import { Phone, Mail, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Air Duct Priority
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Owner-operated dryer vent & air duct services.
            </p>
            <p className="text-gray-400 text-sm">
              Jamison, PA
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Licensed & Insured · PA154999
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Serving Bucks County and Montgomery County
            </p>
          </div>

          {/* Column 2: Key Services */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm md:text-base">
              Services
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1 md:space-y-3 text-xs md:text-sm">
              <li>
                <a href="/services/dryer-vent-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Dryer Vent Cleaning
                </a>
              </li>
              <li>
                <a href="/services/dryer-vent-repair" className="text-gray-400 hover:text-white transition-colors">
                  Dryer Vent Repair
                </a>
              </li>
              <li>
                <a href="/services/dryer-vent-installation" className="text-gray-400 hover:text-white transition-colors">
                  Dryer Vent Installation
                </a>
              </li>
              <li>
                <a href="/services/air-duct-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Air Duct Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1 md:space-y-3 text-xs md:text-sm">
              
              <li>
                <a href="/service-area" className="text-gray-400 hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li><a href="/free-inspection" className="text-gray-400 hover:text-white transition-colors">Free Inspection</a></li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+12157108781"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(215) 710-8781</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:airductpriority@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>airductpriority@gmail.com</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://maps.app.goo.gl/c8kKh1yKKoHy9qNu6"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="h-4 w-4 fill-current" />
                  <span>Google Reviews</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Air Duct Priority. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
