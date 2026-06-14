import { FormEvent, useState } from 'react';
import { MapPin, RotateCcw, Search } from 'lucide-react';
import { completedJobsZipCenters } from '../data/completedJobsZipCenters';

const mapId = '17e2G6HyXf1vVVdsOuz11zj_Z-efqRBU';
const defaultMapEmbedUrl =
  import.meta.env.VITE_GOOGLE_MY_MAPS_EMBED_URL?.trim() ||
  `https://www.google.com/maps/d/embed?mid=${mapId}&ehbc=2E312F`;

export default function CompletedJobsMap() {
  const [zipInput, setZipInput] = useState('');
  const [selectedZip, setSelectedZip] = useState('');
  const [mapEmbedUrl, setMapEmbedUrl] = useState(defaultMapEmbedUrl);
  const [message, setMessage] = useState('Enter a ZIP code to focus the map on completed jobs nearby.');

  function findZip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const zip = zipInput.match(/\d{5}/)?.[0] ?? '';
    const center = completedJobsZipCenters[zip];

    if (!center) {
      setSelectedZip('');
      setMessage('No completed jobs are currently mapped for that ZIP code. Try a nearby ZIP code.');
      return;
    }

    const [latitude, longitude, jobs] = center;
    setSelectedZip(zip);
    setMapEmbedUrl(`${defaultMapEmbedUrl}&ll=${latitude}%2C${longitude}&z=13`);
    setMessage(`Showing ${jobs} completed ${jobs === 1 ? 'job' : 'jobs'} mapped in ZIP code ${zip}.`);
  }

  function resetMap() {
    setZipInput('');
    setSelectedZip('');
    setMapEmbedUrl(defaultMapEmbedUrl);
    setMessage('Enter a ZIP code to focus the map on completed jobs nearby.');
  }

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

        <form
          onSubmit={findZip}
          className="mx-auto mb-8 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
        >
          <label htmlFor="completed-jobs-zip" className="mb-2 block font-bold text-slate-900">
            Find completed jobs near your ZIP code
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="completed-jobs-zip"
              value={zipInput}
              onChange={(event) => setZipInput(event.target.value.replace(/\D/g, '').slice(0, 5))}
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="Enter ZIP code"
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

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
          <iframe
            key={mapEmbedUrl}
            className="h-[500px] w-full lg:h-[650px]"
            src={mapEmbedUrl}
            title="Air Duct Priority completed jobs map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}
