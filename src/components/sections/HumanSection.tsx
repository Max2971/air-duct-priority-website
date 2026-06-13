export default function HumanSection() {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2">

        {/* Left column: Text content */}
        <div className="bg-white px-8 pt-10 pb-16 md:py-16 lg:px-16 lg:py-24 flex items-center order-2 lg:order-1">
          <div className="max-w-xl mx-auto lg:mx-0">
         <h2 className="text-xl font-normal italic text-[#F97316]">
  Max G.A, Founder
         </h2>


            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">

              <p>
               <strong>I’m Max G.A, founder of Air Duct Priority — a local, family-run business proudly serving homeowners in Bucks County, PA for over 10 years.</strong>
              </p>
              <p>
               I started this company after seeing too many people misled by promises of “great service” that delivered poor, unsafe results. Homeowners deserve honest answers, fair recommendations, and work done right the first time.
              </p>
              <p>
               From day one, my approach has been clear: treat every home like my own. That’s why we focus on full system airflow inspections, explain exactly what we find, and always provide real before & after proof. No shortcuts. No pressure. Just transparent, professional work.
              </p>
              <p>Whether it’s <strong> dryer vent safety and cleaning, professional air duct cleaning,</strong> or restoring ventilation systems after construction or flooding, every job is handled carefully, safely, and with pride. That commitment has earned us over <strong>500 five-star reviews</strong> from homeowners who value trust, safety, and accountability.
              </p>
              <p>Air Duct Priority isn’t a big faceless company. It’s a local business built on integrity, family values, and real responsibility — and I personally stand behind every inspection, cleaning, and repair we perform.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Family photo */}
        <div className="relative order-1 lg:order-2 lg:h-auto">
          <img
            src="/owner-family-air-duct-priority.webp"
            alt="Owner and family"
            className="w-full h-auto lg:h-full lg:object-cover"
          />
        </div>

      </div>
    </section>
  );
}
