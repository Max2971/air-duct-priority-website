import { FormEvent, useState } from 'react';
import { MapPin, Navigation, RotateCcw, Search } from 'lucide-react';
import { completedJobs } from '../data/completedJobs';
import { completedJobsZipCenters } from '../data/completedJobsZipCenters';
import CustomCompletedJobsMap from './CustomCompletedJobsMap';

const customMapEnabled = Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim());

const mapLegend = [
  { label: 'Dryer Vent Cleaning', color: '#FABB05' },
  { label: 'Air Duct Cleaning', color: '#087F3D' },
  { label: 'Air Duct & Dryer Vent Cleaning', color: '#C2185B' },
  { label: 'Dryer Vent Installation', color: '#E65100' },
];

type MapFocus =
  | { latitude: number; longitude: number; label?: string; zoom?: number }
  | { address: string };

function normalizeAddress(value: string) {
  return value
    .toLowerCase()
    .replace(/\broad\b/g, 'rd')
    .replace(/\bdrive\b/g, 'dr')
    .replace(/\bstreet\b/g, 'st')
    .replace(/\bavenue\b/g, 'ave')
    .replace(/\bcircle\b/g, 'cir')
    .replace(/\blane\b/g, 'ln')
    .replace(/\bcourt\b/g, 'ct')
    .replace(/\bpennsylvania\b/g, 'pa')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getStreetName(value: string) {
  const hasComma = value.includes(',');
  const firstPart = value.split(',')[0]?.trim() ?? '';
  const withoutMask = firstPart.replace(/^•+\s*/, '');
  const isOrdinalStreet = /^\d+(?:st|nd|rd|th)\s/i.test(withoutMask);
  const withoutHouseNumber = isOrdinalStreet ? withoutMask : withoutMask.replace(/^\d+(?:-\d+)?[a-z]?\s+/i, '');
  const streetSuffixes = new Set(['st', 'street', 'rd', 'road', 'dr', 'drive', 'ave', 'avenue', 'ln', 'lane', 'ct', 'court', 'cir', 'circle', 'pike', 'pkwy', 'parkway', 'blvd', 'boulevard', 'way', 'trl', 'trail', 'ter', 'terrace', 'pl', 'place', 'hwy', 'highway']);
  const tokens = withoutHouseNumber.split(/\s+/);
  const suffixIndex = tokens.findIndex((token) => streetSuffixes.has(token.toLowerCase().replace(/[^a-z]/g, '')));
  const street = !hasComma && suffixIndex >= 0
    ? tokens.slice(0, suffixIndex + (tokens[suffixIndex + 1]?.toLowerCase() === 'pike' ? 2 : 1)).join(' ')
    : withoutHouseNumber;
  return normalizeAddress(street);
}

export default function CompletedJobsMap() {
  const [zipInput, setZipInput] = useState('');
  const [selectedZip, setSelectedZip] = useState('');
  const [mapFocus, setMapFocus] = useState<MapFocus>();
  const [locationLoading, setLocationLoading] = useState(false);
  const [message, setMessage] = useState(
    'Enter a ZIP code or full address, or use your current location, to focus the map on completed jobs nearby.',
  );

  function findZip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = zipInput.trim();
    const isZipOnly = /^\d{5}$/.test(query);
    const zip = query.match(/\b\d{5}\b/)?.[0] ?? '';
    const center = completedJobsZipCenters[zip];

    if (customMapEnabled && !isZipOnly && query.length >= 6) {
      const queryParts = query.split(',').map((part) => part.trim());
      const streetName = getStreetName(query);
      const city = queryParts[1]
        ? normalizeAddress(queryParts[1]
          .replace(/\b\d{5}(?:-\d{4})?\b/, '')
          .replace(/\b(pa|nj|pennsylvania|new jersey)\b/gi, ''))
        : '';
      const matchingJobs = completedJobs.filter((job) => {
        if (getStreetName(job.address) !== streetName) return false;
        if (zip && !job.address.includes(zip)) return false;
        const jobCity = normalizeAddress(job.address.split(',')[1] ?? '');
        return !city || jobCity === city;
      });

      if (matchingJobs.length > 0) {
        const latitude = matchingJobs.reduce((sum, job) => sum + job.latitude, 0) / matchingJobs.length;
        const longitude = matchingJobs.reduce((sum, job) => sum + job.longitude, 0) / matchingJobs.length;
        setSelectedZip(query);
        setMapFocus({
          latitude,
          longitude,
          label: 'Jobs on this street',
          zoom: 14,
        });
        setMessage(`Found ${matchingJobs.length} completed ${matchingJobs.length === 1 ? 'job' : 'jobs'} on this street. The map centers on those jobs, not your exact address.`);
        return;
      }

      if (center) {
        const [latitude, longitude] = center;
        setSelectedZip(query);
        setMapFocus({ latitude, longitude, zoom: 12 });
        setMessage(`No matching completed jobs were found on that street. Showing the ZIP code ${zip} area instead; this is not the exact address location.`);
        return;
      }

      setSelectedZip(query);
      setMapFocus({ address: query });
      setMessage(`Showing completed jobs near "${query}".`);
      return;
    }

    if (center) {
      const [latitude, longitude, jobs] = center;
      setSelectedZip(zip);
      setMapFocus({ latitude, longitude });
      setMessage(`Showing ${jobs} completed ${jobs === 1 ? 'job' : 'jobs'} mapped in ZIP code ${zip}.`);
      return;
    }

    if (!center) {
      setSelectedZip('');
      setMapFocus(undefined);
      setMessage('Enter a valid ZIP code or full address near the service area.');
      return;
    }
  }

  function resetMap() {
    setZipInput('');
    setSelectedZip('');
    setMapFocus(undefined);
    setLocationLoading(false);
    setMessage('Enter a ZIP code or full address, or use your current location, to focus the map on completed jobs nearby.');
  }

  function useCurrentLocation() {
    if (!customMapEnabled) {
      setMessage('Current location search is available on the interactive map.');
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setMessage('Your browser does not support current location search. Enter an address or ZIP code instead.');
      return;
    }

    setLocationLoading(true);
    setMessage('Finding your current location...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setSelectedZip('current-location');
        setZipInput('');
        setMapFocus({
          latitude,
          longitude,
          label: 'Your location',
          zoom: 14,
        });
        setMessage('Showing completed jobs near your current location.');
        setLocationLoading(false);
      },
      (error) => {
        setLocationLoading(false);
        if (error.code === error.PERMISSION_DENIED) {
          setMessage('Location permission was not allowed. Enter your address or ZIP code instead.');
          return;
        }

        setMessage('We could not get your current location. Enter your address or ZIP code instead.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
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
            <div className="flex min-w-0 flex-1 gap-2">
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
                type="button"
                onClick={useCurrentLocation}
                disabled={locationLoading}
                title="Use my current location"
                aria-label={locationLoading ? 'Finding your current location' : 'Use my current location'}
                className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-blue-600 shadow-sm hover:border-blue-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Navigation className={`h-5 w-5 ${locationLoading ? 'animate-pulse' : ''}`} />
              </button>
            </div>
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
            <div className="flex h-[360px] items-center justify-center rounded-xl border border-slate-200 bg-slate-100 p-8 text-center text-slate-700 shadow-sm md:h-[500px] lg:h-[650px]">
              The interactive map is temporarily unavailable. Please try again later.
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
