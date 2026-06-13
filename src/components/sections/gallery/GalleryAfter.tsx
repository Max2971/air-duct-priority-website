export default function GalleryAfter() {
  const afterImages = [
    { id: 1, src: '/air-duct-cleaning-doylestown-01.webp', alt: 'Clean air duct interior after professional air duct cleaning service in Doylestown PA home' },
    { id: 2, src: '/air-duct-cleaning-newtown-01.webp', alt: 'Residential air duct system cleaned and restored to proper airflow condition in Newtown PA' },
    { id: 3, src: '/air-duct-cleaning-richboro-01.webp', alt: 'Interior air duct professionally cleaned removing dust and debris in Richboro PA residence' },
    { id: 4, src: '/air-duct-cleaning-warminster-01.webp', alt: 'Air duct system after thorough cleaning service in Warminster PA home' },
    { id: 5, src: '/air-duct-cleaning-warrington-01.webp', alt: 'Clean residential air duct interior following professional cleaning in Warrington PA' },
    { id: 6, src: '/dryer-vent-clean-warminster.webp', alt: 'Clean dryer vent interior after professional dryer vent cleaning in Warminster PA home' },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-slate-900">
            After Professional Cleaning
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
           After proper cleaning, the vent line is clear, airflow is restored, and the system operates as intended.
The images below show the same types of vents after professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {afterImages.map((image) => (
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
    </section>
  );
}
