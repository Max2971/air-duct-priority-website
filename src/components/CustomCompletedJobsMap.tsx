import { useEffect, useRef, useState } from 'react';
import { importLibrary, setOptions } from '@googlemaps/js-api-loader';
import { MarkerClusterer, Renderer, SuperClusterAlgorithm } from '@googlemaps/markerclusterer';
import { completedJobs, CompletedJobService } from '../data/completedJobs';

const mapId = 'ade5203658e70a1246d407bc';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();
const doylestown = { lat: 40.304788, lng: -75.139213 };

const serviceColors: Record<CompletedJobService, string> = {
  'Dryer Vent Cleaning': '#FABB05',
  'Air Duct Cleaning': '#087F3D',
  'Air Duct Cleaning & Dryer Vent Cleaning': '#C2185B',
  'Dryer Vent Installation': '#E65100',
};

let loaderConfigured = false;

interface CustomCompletedJobsMapProps {
  focus?: { latitude: number; longitude: number };
}

const clusterRenderer: Renderer = {
  render({ count, position }) {
    const roundedCount =
      count >= 100
        ? `${Math.floor(count / 100) * 100}+`
        : `${Math.max(10, Math.floor(count / 10) * 10)}+`;
    const size = count >= 100 ? 42 : count >= 50 ? 38 : count >= 20 ? 34 : 30;
    const element = document.createElement('div');
    element.textContent = roundedCount;
    Object.assign(element.style, {
      alignItems: 'center',
      background: '#2563EB',
      border: '2px solid white',
      borderRadius: '9999px',
      boxShadow: '0 1px 5px rgba(15, 23, 42, 0.3)',
      color: 'white',
      display: 'flex',
      fontSize: count >= 100 ? '12px' : '11px',
      fontWeight: '700',
      height: `${size}px`,
      justifyContent: 'center',
      lineHeight: '1',
      textAlign: 'center',
      width: `${size}px`,
    });

    return new google.maps.marker.AdvancedMarkerElement({
      position,
      content: element,
      title: `${roundedCount} completed jobs nearby`,
      zIndex: 1000 + count,
    });
  },
};

export default function CustomCompletedJobsMap({ focus }: CustomCompletedJobsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!apiKey || !containerRef.current) return;
    let active = true;

    async function initializeMap() {
      try {
        if (!loaderConfigured) {
          setOptions({ key: apiKey, v: 'weekly', mapIds: [mapId] });
          loaderConfigured = true;
        }

        const { Map, InfoWindow } = await importLibrary('maps');
        const { AdvancedMarkerElement, PinElement } = await importLibrary('marker');
        if (!active || !containerRef.current) return;

        const map = new Map(containerRef.current, {
          center: doylestown,
          zoom: 11,
          mapId,
          clickableIcons: false,
          disableDefaultUI: true,
          zoomControl: true,
          fullscreenControl: true,
          gestureHandling: 'cooperative',
        });
        mapRef.current = map;
        const infoWindow = new InfoWindow();

        const markers = completedJobs.map((job) => {
          const pin = new PinElement({
            background: serviceColors[job.service],
            borderColor: '#FFFFFF',
            glyphColor: '#FFFFFF',
            scale: 0.9,
          });
          const marker = new AdvancedMarkerElement({
            position: { lat: job.latitude, lng: job.longitude },
            title: job.service,
            content: pin.element,
            gmpClickable: true,
          });

          marker.addListener('click', () => {
            const card = document.createElement('div');
            const service = document.createElement('strong');
            const address = document.createElement('p');
            service.textContent = job.service;
            address.textContent = job.address;
            address.style.margin = '6px 0 0';
            card.append(service, address);
            infoWindow.setContent(card);
            infoWindow.open({ map, anchor: marker });
          });
          return marker;
        });

        new MarkerClusterer({
          map,
          markers,
          algorithm: new SuperClusterAlgorithm({
            radius: 90,
            maxZoom: 15,
          }),
          renderer: clusterRenderer,
          onClusterClick: (_event, cluster, clusterMap) => {
            const bounds = cluster.bounds;
            if (bounds) clusterMap.fitBounds(bounds, 48);
          },
        });
      } catch {
        if (active) setError('The interactive jobs map could not load. Please try again later.');
      }
    }

    void initializeMap();
    return () => {
      active = false;
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    if (focus) {
      mapRef.current.panTo({ lat: focus.latitude, lng: focus.longitude });
      mapRef.current.setZoom(13);
    } else {
      mapRef.current.panTo(doylestown);
      mapRef.current.setZoom(11);
    }
  }, [focus]);

  if (!apiKey) return null;

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
      <div ref={containerRef} className="h-[360px] w-full md:h-[500px] lg:h-[650px]" aria-label="Completed jobs map" />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 p-8 text-center text-slate-700">
          {error}
        </div>
      )}
    </div>
  );
}
