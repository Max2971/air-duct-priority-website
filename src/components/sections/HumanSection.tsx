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
               <strong>I'm Max G.A., founder of Air Duct Priority, an owner-operated local company based in Jamison, PA with more than 9 years of field experience.</strong>
              </p>
              <p>
               I started this company after seeing too many homeowners receive unclear recommendations and surface-level work. Customers deserve honest answers, fair recommendations, and a clear explanation of what their system actually needs.
              </p>
              <p>
               From day one, my approach has been clear: treat every home like my own. That's why we focus on full-system airflow inspections, explain exactly what we find, and provide real before-and-after proof when possible. No call center. No pressure. Just transparent, professional work.
              </p>
              <p>Whether it's <strong>dryer vent cleaning, repair and installation, professional air duct cleaning,</strong> or correcting an airflow problem, every job is handled carefully and with pride. That commitment has earned Air Duct Priority <strong>543 verified Google reviews</strong>.
              </p>
              <p>Air Duct Priority isn't a big faceless company. It's a local business built on integrity and direct accountability, and I personally stand behind every inspection, cleaning, repair, and installation we perform.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Family photo */}
        <div className="relative order-1 lg:order-2 lg:h-auto">
          <img
            src="/owner-family-air-duct-priority.webp"
            alt="Max G.A., founder of Air Duct Priority, with his family"
            className="w-full h-auto lg:h-full lg:object-cover"
          />
        </div>

      </div>
    </section>
  );
}
