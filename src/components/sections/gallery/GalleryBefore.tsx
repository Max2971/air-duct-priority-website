export default function GalleryBefore() {
  const problemTypes = [
    {
      title: 'Clogged Dryer Vents',
      images: [
        { id: 1, src: '/dryer-vent-clogged-before-doylestown-01.webp', alt: 'Clogged dryer vent filled with heavy compacted lint buildup inside residential vent line in Doylestown PA home' },
        { id: 2, src: '/dryer-vent-clogged-before-newtown-02.webp', alt: 'Severely clogged dryer vent restricting airflow due to thick lint accumulation in Newtown PA residence' },
        { id: 3, src: '/dryer-vent-clogged-before-warminster-02.webp', alt: 'Blocked dryer vent interior with dense lint buildup reducing dryer efficiency in Warminster PA home' },
      ]
    },
    {
      title: 'Bird Nests & Exterior Blockages',
      images: [
        { id: 4, src: '/dryer-vent-bird-nest-before-doylestown-02.webp', alt: 'Bird nest blocking exterior dryer vent exhaust on residential home in Doylestown PA' },
        { id: 5, src: '/dryer-vent-bird-nest-before-newtown-01.webp', alt: 'Dryer vent exterior clogged with bird nesting material in Newtown PA residence' },
        { id: 6, src: '/dryer-vent-bird-nest-before-warminster-02.webp', alt: 'Exterior dryer vent completely obstructed by bird nest and debris in Warminster PA home' },
      ]
    },
    {
      title: 'Dirty Air Ducts',
      images: [
        { id: 7, src: '/air-duct-dirty-doylestown-01.webp', alt: 'Dirty air duct interior with visible dust and debris buildup in Doylestown PA home' },
        { id: 8, src: '/air-duct-dirty-newtown-01.webp', alt: 'Residential air duct system with heavy dust accumulation in Newtown PA' },
        { id: 9, src: '/air-duct-dirty-warminster-02.webp', alt: 'Air duct interior contaminated with dust and debris before professional cleaning in Warminster PA home' },
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-slate-900">
            What We Find
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            During inspections, we often discover conditions that restrict airflow, reduce dryer efficiency, and increase fire risk.
The examples below show typical issues found in residential dryer vent systems.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {problemTypes.map((problemType, idx) => (
            <div key={idx}>
              <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-semibold text-slate-800">
                {problemType.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {problemType.images.map((image) => (
                  <div key={image.id} className="aspect-video md:aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
                    {image.src ? (
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-slate-500 text-sm">Image Placeholder {image.id}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
