import { FormEvent, useState } from 'react';
import { MapPin, RotateCcw, Search } from 'lucide-react';
import { completedJobsZipCenters } from '../data/completedJobsZipCenters';
import CustomCompletedJobsMap from './CustomCompletedJobsMap';

const mapId = '17e2G6HyXf1vVVdsOuz11zj_Z-efqRBU';
const baseMapEmbedUrl =
  import.meta.env.VITE_GOOGLE_MY_MAPS_EMBED_URL?.trim() ||
  `https://www.google.com/maps/d/embed?mid=${mapId}&ehbc=2E312F`;
const defaultMapEmbedUrl = `${baseMapEmbedUrl}&ll=40.304788%2C-75.139213&z=11`;
const customMapEnabled = Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim());

const mapLegend = [
  { label: 'Dryer Vent Cleaning', color: '#FABB05' },
  { label: 'Air Duct Cleaning', color: '#087F3D' },
  { label: 'Air Duct & Dryer Vent Cleaning', color: '#C2185B' },
  { label: 'Dryer Vent Installation', color: '#E65100' },
];

export default function CompletedJobsMap() {
  const [zipInput, setZipInput] = useState('');
  const [selectedZip, setSelectedZip] = useState('');
  const [mapEmbedUrl, setMapEmbedUrl] = useState(defaultMapEmbedUrl);
  const [mapFocus, setMapFocus] = useState<{ latitude: number; longitude: number } | { address: string }>();
  const [message, setMessage] = useState('Enter a ZIP code or full address to focus the map on completed jobs nearby.');

  function findZip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = zipInput.trim();
    const zip = query.match(/\b\d{5}\b/)?.[0] ?? '';
    const center = completedJobsZipCenters[zip];

    if (center) {
      const [latitude, longitude, jobs] = center;
      setSelectedZip(zip);
      setMapEmbedUrl(`${baseMapEmbedUrl}&ll=${latitude}%2C${longitude}&z=13`);
      setMapFocus({ latitude, longitude });
      setMessage(`Showing ${jobs} completed ${jobs === 1 ? 'job' : 'jobs'} mapped in ZIP code ${zip}.`);
      return;
    }

    if (customMapEnabled && query.length >= 6) {
      setSelectedZip(query);
      setMapFocus({ address: query });
      setMessage(`Showing completed jobs near "${query}".`);
      return;
    }

    if (!center) {
      setSelectedZip('');
      setMapEmbedUrl(defaultMapEmbedUrl);
      setMapFocus(undefined);
      setMessage('Enter a valid ZIP code or full address near the service area.');
      return;
    }
  }

  function resetMap() {
    setZipInput('');
    setSelectedZip('');
    setMapEmbedUrl(defaultMapEmbedUrl);
    setMapFocus(undefined);
    setMessage('Enter a ZIP code or full address to focus the map on completed jobs nearby.');
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <MapPin className="mx-auto mb-3 h-8 w-8 text-[#F97316] md:mb-4 md:h-10 md:w-10" />
          <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Jobs Completed Near You
          </h2>
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">
            Explore locations where Air Duct Priority has completed dryer vent, air duct,
            cleaning, repair, and installation services. Select a marker to view the address
            and service performed. The map shows selected completed jobs, not every project.
          </p>
        </div>

        <form
          onSubmit={findZip}
          className="mx-auto mb-6 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm md:mb-8 md:p-5"
        >
          <label htmlFor="completed-jobs-zip" className="mb-2 block font-bold text-slate-900">
            Find completed jobs near your address or ZIP code
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="completed-jobs-zip"
              value={zipInput}
              onChange={(event) => setZipInput(event.target.value)}
              inputMode="text"
              autoComplete="street-address"
              placeholder="Enter ZIP code or full address"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              aria-describedby="completed-jobs-zip-message"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <Search className="h-4 w-4" />
              Find Nearby Jobs
            </button>
            {selectedZip && (
              <button
                type="button"
                onClick={resetMap}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            )}
          </div>
          <p id="completed-jobs-zip-message" className="mt-3 text-sm text-slate-600" aria-live="polite">
            {message}
          </p>
        </form>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          {customMapEnabled ? (
            <CustomCompletedJobsMap focus={mapFocus} />
          ) : (
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
              <iframe
                key={mapEmbedUrl}
                className="h-[360px] w-full md:h-[500px] lg:h-[650px]"
                src={mapEmbedUrl}
                title="Air Duct Priority completed jobs map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          )}

          <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:p-6 lg:sticky lg:top-6">
            <h3 className="mb-2 text-base font-bold text-slate-900 md:text-xl">Map Legend</h3>
            <p className="mb-5 hidden text-sm leading-relaxed text-slate-600 md:block">
              Marker colors show the service completed at each address.
            </p>
            <ul className="grid grid-cols-2 gap-2 md:block md:space-y-4">
              {mapLegend.map(({ label, color }) => (
                <li key={label} className="flex items-start gap-2 md:gap-3">
                  <span
                    className="mt-0.5 h-3 w-3 flex-shrink-0 rounded-full border border-white shadow ring-1 ring-slate-300 md:h-5 md:w-5 md:border-2"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold leading-4 text-slate-700 md:text-sm md:leading-5">{label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

      </div>
    </section>
  );
}
