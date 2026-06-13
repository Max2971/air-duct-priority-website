import { Star, Shield, CheckCircle } from 'lucide-react';

interface TrustSectionProps {
  variant?: 'reviews' | 'credentials';
  compact?: boolean;
}

export default function TrustSectionHome({ variant = 'reviews', compact = false }: TrustSectionProps) {
  return (
    <section className={!compact ? 'border-b-2 border-slate-200 pb-1 md:pb-1 lg:pb-1' : ''}>
      {/* Local Presence & Scale */}
      <div className={`relative w-full overflow-hidden ${compact ? 'pt-1 lg:pt-1 bg-slate-50 border-y-2 border-slate-200' : 'h-[600px] lg:h-[700px]'}`}>
        {/* Background Image: Company Vans in Local Setting */}
        {!compact && (
          <div className="absolute inset-0">
            <img
              src="/air-duct-cleaning-block.webp"
              alt="Air Duct Priority vehicles"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        {/* Trust Anchor */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center">
            {compact ? (
              <>
                {variant === 'reviews' ? (
                  <a
                    href="https://maps.app.goo.gl/pN2QxnitFYni554w9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-slate-900 lg:text-2xl hover:text-[#F97316] transition-colors"
                  >
                    <span className="text-[#F97316]">500+</span> Google Reviews • Trusted by Bucks County Homeowners
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <Shield className="h-8 w-8 text-blue-600 lg:h-10 lg:w-10 flex-shrink-0" />
                      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                        Licensed & Insured
                      </h2>
                      <CheckCircle className="h-8 w-8 text-green-600 lg:h-10 lg:w-10 flex-shrink-0" />
                    </div>
                    <p className="text-xl font-semibold text-slate-700 lg:text-2xl text-[#F97316]">
                      Local Safety Expert
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                {variant === 'reviews' ? (
                  <a
                    href="https://maps.app.goo.gl/pN2QxnitFYni554w9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform"
                  >
                    <div className="mb-6 flex justify-center gap-2">
                      <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 lg:h-12 lg:w-12" />
                      <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 lg:h-12 lg:w-12" />
                      <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 lg:h-12 lg:w-12" />
                      <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 lg:h-12 lg:w-12" />
                      <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 lg:h-12 lg:w-12" />
                    </div>
                    <p className="mb-4 text-5xl font-bold text-white lg:text-7xl [text-shadow:_0_2px_12px_rgb(0_0_0_/_0.8)]">
                      <span className="text-[#F97316]">500+</span> Google Reviews
                    </p>
                    <p className="mb-3 text-lg text-white/90 lg:text-xl">
                      Trusted by homeowners across Bucks County & Montgomery County & Philadelphia
                    </p>
                    <p className="text-base text-white/80 lg:text-lg">
                     Free estimate — always free • Family-owned and operated
                    </p>
                  </a>
                ) : (
                  <>
                    <div className="mb-6 flex justify-center">
                      <Shield className="h-16 w-16 text-white lg:h-20 lg:w-20" />
                    </div>
                    <p className="mb-4 text-5xl font-bold text-white lg:text-7xl">
                      Licensed & Insured
                    </p>
                    <p className="text-lg text-white/90 lg:text-xl">
                      Local experts committed to your safety
                    </p>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
