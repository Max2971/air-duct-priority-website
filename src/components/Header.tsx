import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-100">
              Air Duct Priority
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100 font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-[500px]">
                  <div className="rounded-lg border border-slate-700 bg-slate-800 shadow-lg">
                    <div className="grid grid-cols-2 gap-8 p-8">

                    {/* PRIMARY: Dryer Vent Cleaning */}
                    <div>
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-100">
                        Dryer Vent Cleaning
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/services/dryer-vent-cleaning" className="text-gray-300 hover:text-gray-100">
                            Dryer Vent Cleaning
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/dryer-vent-repair" className="text-gray-300 hover:text-gray-100">
                            Dryer Vent Repair
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/dryer-vent-installation" className="text-gray-300 hover:text-gray-100">
                            Dryer Vent Installation
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/dryer-vent-rerouting" className="text-gray-300 hover:text-gray-100">
                            Dryer Vent Rerouting
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/bird-guard" className="text-gray-300 hover:text-gray-100">
                            Bird Guard
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/hoa-inspection" className="text-gray-300 hover:text-gray-100">
                            HOA Inspection / Certification
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* SECONDARY: Air Duct Cleaning */}
                    <div>
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-100">
                        Air Duct Cleaning
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/services/air-duct-cleaning" className="text-gray-300 hover:text-gray-100">
                            Air Duct Cleaning
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/air-duct-installation" className="text-gray-300 hover:text-gray-100">
                            Air Duct Installation
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/air-duct-repair" className="text-gray-300 hover:text-gray-100">
                            Air Duct Repair
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/air-duct-sanitizing" className="text-gray-300 hover:text-gray-100">
                            Air Duct Sanitizing
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/air-duct-construction-cleaning" className="text-gray-300 hover:text-gray-100">
                            Air Duct Construction Cleaning
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </div>

            <a href="/service-area" className="text-gray-300 hover:text-gray-100 font-medium">
              Service Areas
            </a>
            <Link to="/free-inspection" className="text-gray-300 hover:text-gray-100 font-medium">Free Inspection</Link>

            <Link to="/gallery" className="text-gray-300 hover:text-gray-100 font-medium">
              Gallery
            </Link>

            <Link to="/about" className="text-gray-300 hover:text-gray-100 font-medium">
              About
            </Link>

            <Link to="/contact" className="text-gray-300 hover:text-gray-100 font-medium">
              Contact
            </Link>
          </nav>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+12157108781"
              className="hidden md:inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-gray-100 transition-colors hover:bg-blue-700"
            >
              Free Inspection – Call (215) 710-8781
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-100 hover:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden absolute right-6 top-full mt-2 w-80 max-w-[calc(100vw-3rem)] bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-4 z-50">
              <nav className="flex flex-col space-y-4 max-h-[80vh] overflow-y-auto px-2">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-gray-100 font-medium px-2 py-2"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-gray-100 px-2 py-2">
                        Dryer Vent Cleaning
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/services/dryer-vent-cleaning"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Dryer Vent Cleaning
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/dryer-vent-repair"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Dryer Vent Repair
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/dryer-vent-installation"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Dryer Vent Installation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/dryer-vent-rerouting"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Dryer Vent Rerouting
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/bird-guard"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Bird Guard
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/hoa-inspection"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            HOA Inspection / Certification
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-gray-100 px-2 py-2">
                        Air Duct Cleaning
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/services/air-duct-cleaning"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Air Duct Cleaning
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/air-duct-installation"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Air Duct Installation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/air-duct-repair"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Air Duct Repair
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/air-duct-sanitizing"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Air Duct Sanitizing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/air-duct-construction-cleaning"
                            className="block text-gray-300 hover:text-gray-100 px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Air Duct Construction Cleaning
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/service-area"
                className="text-gray-300 hover:text-gray-100 font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas
              </a>
              <Link to="/free-inspection" className="text-gray-300 hover:text-gray-100 font-medium px-2 py-2" onClick={() => setMobileMenuOpen(false)}>Free Inspection</Link>

              <Link
                to="/gallery"
                className="text-gray-300 hover:text-gray-100 font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              <Link
                to="/about"
                className="text-gray-300 hover:text-gray-100 font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-gray-100 font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
