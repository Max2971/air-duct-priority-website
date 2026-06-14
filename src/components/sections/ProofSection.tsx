import { Star } from 'lucide-react';
import { useRef } from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider';

export default function ProofSection() {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (scrollRefs.current[index]) {
      scrollRefs.current[index]!.scrollTop = 0;
    }
  };

  return (
   <section className="bg-slate-50 pt-8 md:pt-12 lg:pt-16 pb-12 lg:pb-16">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Google Reviews - Primary Proof */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-slate-900 lg:text-4xl">
          What Homeowners Say in Verified Google Reviews

            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* Review Card 1 */}
            <div onMouseEnter={() => handleMouseEnter(0)} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md h-44 md:h-auto">
              {/* Google Badge */}
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              {/* Front - Default State */}
              <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="mb-3 h-14 w-14 md:h-20 md:w-20 md:mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/review-lee-r.png"
                    alt="Lee R., verified Google reviewer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-2 text-sm md:text-lg md:mb-3 font-semibold text-slate-900">
                  Lee. R
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              {/* Back - Hover State */}
              <div ref={(el) => (scrollRefs.current[0] = el)} className="absolute inset-0 bg-white p-4 md:p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto">
                <p className="text-xs md:text-base text-slate-700 leading-relaxed">
                  Max provided the most thorough and thoughtful examination and assessment of the ductwork in my old house as well as a clear, detailed and honest assessment of the factors I should consider in engaging his services.  When I had initially contacted him, he responded very quickly and then promptly scheduled a next-business-day appointment to visit and provide an estimate.  On his visit he took the time to show and explain what he saw and what I needed to know in great detail so I could make an informed and economical decision.  In fact, we agreed that I didn't need further services at this time although he assured me if I chose to engage his further services out of preference rather than need how he would go about guaranteeing any contracted cleaning services would be thorough and effective.  Frankly, I was tempted to schedule the cleaning simply because Max conducted himself with such integrity and kindness that he is exactly the type of service provider I want working in my house.  If and when I do need duct cleaning, Max is the only person I will call.  If you need duct cleaning, Max is your guy!  And if you don't need it, he will tell you.  This is the way life and business are supposed to be!
                </p>
              </div>
            </div>

            {/* Review Card 2 */}
            <div onMouseEnter={() => handleMouseEnter(1)} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md h-44 md:h-auto">
              {/* Google Badge */}
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="mb-3 h-14 w-14 md:h-20 md:w-20 md:mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/review-liora-zirkel.png"
                    alt="Liora Zirkel, verified Google reviewer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-2 text-sm md:text-lg md:mb-3 font-semibold text-slate-900">
                  Liora Zirkel
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div ref={(el) => (scrollRefs.current[1] = el)} className="absolute inset-0 bg-white p-4 md:p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto">
                <p className="text-xs md:text-base text-slate-700 leading-relaxed">
                  Max did a great job cleaning our air ducts. We have recently purchased a 2100 sq ft townhome and completed a renovation of the entire home. We created a lot of dust and debris and wanted to make sure it was cleaned properly before moving in. Max took the time to explain the process, showing how his service differs from others. He cleaned and disinfected all of the air ducts and vents and showed me video of it afterwards. Each video also showed that it was actually in my house (some companies just show generic videos). The house already smells better and I feel happy knowing he did a good job, as both my kids have environmental allergies and I wanted to do everything possible to make their environment more comfortable. I would happily recommend this service to my friends and family.
                </p>
              </div>
            </div>

            {/* Review Card 3 */}
            <div onMouseEnter={() => handleMouseEnter(2)} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md h-44 md:h-auto">
              {/* Google Badge */}
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="mb-3 h-14 w-14 md:h-20 md:w-20 md:mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/review-iryna.png"
                    alt="Iryna, verified Google reviewer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-2 text-sm md:text-lg md:mb-3 font-semibold text-slate-900">
                  Iryna
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div ref={(el) => (scrollRefs.current[2] = el)} className="absolute inset-0 bg-white p-4 md:p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto">
                <p className="text-xs md:text-base text-slate-700 leading-relaxed">
                  Very impressed with Max and the work he did ! He did a great job cleaning our air ducts! I'm glad I went with Max when it comes to air duct cleaning ! He was very kind, considerate, detail oriented , thorough,   as well as cautious (making sure there will be no dust pushed back out during cleaning, since I have a highly allergic child at home!)…  I took some time to write this review, to make sure I will see full effect, and I am HAPPY TO REPORT that every  day I see a major difference in my wellbeing (I used to have massive headaches as soon as our heater would turn on! But after Max cleaned our air ducts, my  BURNING HEADACHES are gone! Winters used to be a torture for me to be at home, when heater would turn on, but NOT ANYMORE! Max did a phenomenal job cleaning our air ducts! I can feel as well as smell the difference in the air quality at home! And I also see I have lowered temperature on the thermostat, even though our recent weather has been hitting 0F! What does that tell me? It tells me that our heater doesn't have to work as hard anymore ever since we cleaned the air ducts ! I highly recommend Max at AirDuctPriority for your air duct cleaning needs! You will not be disappointed !
                </p>
              </div>
            </div>

            {/* Review Card 4 */}
            <div onMouseEnter={() => handleMouseEnter(3)} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md h-44 md:h-auto">
              {/* Google Badge */}
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="mb-3 h-14 w-14 md:h-20 md:w-20 md:mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/review-dmitrii-molchanov.png"
                    alt="Dmitrii Molchanov, verified Google reviewer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-2 text-sm md:text-lg md:mb-3 font-semibold text-slate-900">
                  DMITRII MOLCHANOV
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div ref={(el) => (scrollRefs.current[3] = el)} className="absolute inset-0 bg-white p-4 md:p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto">
                <p className="text-xs md:text-base text-slate-700 leading-relaxed">
                  As homeowners in Philadelphia, My experience was better than expected. My dryer runs more efficiently after the cleaning. The job was done right the first time. I felt confident watching the work being done.
                </p>
              </div>
            </div>

            {/* Review Card 5 */}
            <div onMouseEnter={() => handleMouseEnter(4)} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md h-44 md:h-auto">
              {/* Google Badge */}
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="mb-3 h-14 w-14 md:h-20 md:w-20 md:mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/review-amelia-rorer.png"
                    alt="Amelia Rorer, verified Google reviewer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-2 text-sm md:text-lg md:mb-3 font-semibold text-slate-900">
                  Amelia Rorer
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div ref={(el) => (scrollRefs.current[4] = el)} className="absolute inset-0 bg-white p-4 md:p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto">
                <p className="text-xs md:text-base text-slate-700 leading-relaxed">
                  Air Duct Priority and Max are a top notch company with A1 service. This is the company I recommend 100%.
                </p>
              </div>
            </div>

            {/* Review Card 6 */}
            <div onMouseEnter={() => handleMouseEnter(5)} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md h-44 md:h-auto">
              {/* Google Badge */}
              <div className="absolute right-3 top-3 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="mb-3 h-14 w-14 md:h-20 md:w-20 md:mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    src="/review-joe-dubyk.png"
                    alt="Joe Dubyk, verified Google reviewer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-2 text-sm md:text-lg md:mb-3 font-semibold text-slate-900">
                  Joe Dubyk
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div ref={(el) => (scrollRefs.current[5] = el)} className="absolute inset-0 bg-white p-4 md:p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto">
                <p className="text-xs md:text-base text-slate-700 leading-relaxed">
                  Max was great to work with. His price was fair, he was communicative, and on time. He will now be my go to for servicing my dryer vent!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After - Secondary Proof */}
        <div className="w-full">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl text-[#F97316]">
              Before-and-After Proof from Real Service Work
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 auto-rows-max">
            <BeforeAfterSlider
              beforeImage="/ba-01-before.webp"
              afterImage="/ba-01-after.webp"
              alt="Before and after duct or vent service example 1"
            />

            <BeforeAfterSlider
              beforeImage="/ba-02-before.webp"
              afterImage="/ba-02-after.webp"
              alt="Before and after duct or vent service example 2"
            />

            <BeforeAfterSlider
              beforeImage="/ba-03-before.webp"
              afterImage="/ba-03-after.webp"
              alt="Before and after duct or vent service example 3"
            />

            <BeforeAfterSlider
              beforeImage="/ba-04-before.webp"
              afterImage="/ba-04-after.webp"
              alt="Before and after duct or vent service example 4"
            />

            <div className="md:col-span-2 md:mx-auto md:max-w-md">
              <BeforeAfterSlider
                beforeImage="/ba-05-before.webp"
                afterImage="/ba-05-after.webp"
                alt="Before and after duct or vent service example 5"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
