import { ExternalLink, MapPin } from 'lucide-react';

const mapId = '17e2G6HyXf1vVVdsOuz11zj_Z-efqRBU';
const mapEmbedUrl =
  import.meta.env.VITE_GOOGLE_MY_MAPS_EMBED_URL?.trim() ||
  `https://www.google.com/maps/d/u/1/embed?mid=${mapId}&ehbc=2E312F`;
const mapViewUrl =
  import.meta.env.VITE_GOOGLE_MY_MAPS_VIEW_URL?.trim() ||
  `https://www.google.com/maps/d/u/1/viewer?mid=${mapId}`;

export default function CompletedJobsMap() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <MapPin className="mx-auto mb-4 h-10 w-10 text-[#F97316]" />
          <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Jobs Completed Near You
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Explore locations where Air Duct Priority has completed dryer vent, air duct,
            cleaning, repair, and installation services. Select a marker to view the address
            and service performed.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
          <iframe
            className="h-[500px] w-full lg:h-[650px]"
            src={mapEmbedUrl}
            title="Air Duct Priority completed jobs map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-lg bg-slate-50 p-6 text-center md:flex-row md:text-left">
          <p className="max-w-3xl text-slate-700">
            Do not see a marker directly in your neighborhood? We serve homes throughout Bucks
            County, Montgomery County, and nearby communities. Call to confirm availability.
          </p>
          {mapViewUrl && (
            <a
              href={mapViewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Open Full Map
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
