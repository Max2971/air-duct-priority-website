import { Facebook, Instagram, Mail, MessageSquareText, Phone, Star } from 'lucide-react';

const services = [
  ['Dryer Vent Cleaning', '/services/dryer-vent-cleaning'],
  ['Dryer Vent Repair', '/services/dryer-vent-repair'],
  ['Dryer Vent Installation', '/services/dryer-vent-installation'],
  ['Air Duct Cleaning', '/services/air-duct-cleaning'],
  ['Flexible Duct Replacement', '/services/flexible-duct-replacement'],
  ['Bird Nest Removal', '/services/bird-nest-removal'],
  ['Bathroom Exhaust Vent Cleaning', '/services/bathroom-exhaust-vent-cleaning'],
  ['Kitchen Exhaust Vent Cleaning', '/services/kitchen-exhaust-vent-cleaning'],
  ['Exterior Vent Cover Replacement', '/services/exterior-vent-cover-replacement'],
];

const quickLinks = [
  ['Service Areas', '/service-area'],
  ['Air Duct Inspection', '/free-inspection'],
  ['Reviews', '/reviews'],
  ['Gallery', '/gallery'],
  ['Resources', '/resources'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white md:py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div>
            <h3 className="mb-2 text-xl font-bold">Air Duct Priority</h3>
            <p className="mb-3 text-sm text-gray-400">Owner-operated dryer vent &amp; air duct services.</p>
            <p className="text-sm text-gray-400">Jamison, PA</p>
            <p className="mt-2 text-sm text-gray-400">Licensed &amp; Insured · PA154999</p>
            <p className="mt-2 text-sm text-gray-400">Serving Bucks County and Montgomery County</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white md:text-base">Services</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:grid-cols-1 md:text-sm">
              {services.map(([label, href], index) => (
                <li key={href} className={index > 3 ? 'hidden md:list-item' : undefined}>
                  <a href={href} className="text-gray-400 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white md:text-base">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:grid-cols-1 md:text-sm">
              {quickLinks.map(([label, href], index) => (
                <li key={href} className={index > 3 ? 'hidden md:list-item' : undefined}>
                  <a href={href} className="text-gray-400 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white md:mb-4">Contact</h4>
            <ul className="space-y-3 text-sm md:space-y-4">
              <li>
                <a href="tel:+12157108781" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
                  <Phone className="h-4 w-4" />
                  <span>(215) 710-8781</span>
                </a>
              </li>
              <li>
                <a href="sms:+12157108781" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
                  <MessageSquareText className="h-4 w-4" />
                  <span>Text (215) 710-8781</span>
                </a>
              </li>
              <li>
                <a href="mailto:airductpriority@gmail.com" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span>airductpriority@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/c8kKh1yKKoHy9qNu6" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Google Reviews</span>
                </a>
              </li>
              <li className="hidden md:list-item">
                <a href="https://www.facebook.com/airductunitedservice/" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="hidden md:list-item">
                <a href="https://www.instagram.com/airductpriority_pa/" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-400 md:flex-row md:pt-8">
          <p>© {new Date().getFullYear()} Air Duct Priority. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
