import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://airductpriority.com';
const DEFAULT_IMAGE = `${SITE_URL}/hero-dryer-vent-cleaning.webp`;

type PageSeo = {
  title: string;
  description: string;
  service?: string;
};

const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Air Duct Priority | Dryer Vent & Air Duct Services',
    description: 'Owner-operated dryer vent and air duct services in Bucks County and Montgomery County, PA. Licensed and insured with free in-person inspections.',
  },
  '/about': {
    title: 'About Air Duct Priority | Owner-Operated Local Service',
    description: 'Learn about Air Duct Priority, an owner-operated dryer vent and air duct service company serving Bucks County and Montgomery County, PA.',
  },
  '/contact': {
    title: 'Contact Air Duct Priority | Request a Free Inspection',
    description: 'Contact Air Duct Priority to request a free in-person dryer vent or air duct inspection in Bucks County and Montgomery County, PA.',
  },
  '/gallery': {
    title: 'Dryer Vent & Air Duct Work Gallery | Air Duct Priority',
    description: 'See real dryer vent and air duct cleaning work completed by Air Duct Priority, including before-and-after examples from local homes.',
  },
  '/service-area': {
    title: 'Dryer Vent & Air Duct Service Areas | Air Duct Priority',
    description: 'Air Duct Priority serves Jamison, Bucks County, Montgomery County, and nearby communities with dryer vent and air duct services.',
  },
  '/services/dryer-vent-cleaning': {
    title: 'Dryer Vent Cleaning in Bucks County, PA | Air Duct Priority',
    description: 'Licensed and insured dryer vent cleaning in Bucks County and Montgomery County, PA with free inspection, airflow checks, and clear recommendations.',
    service: 'Dryer Vent Cleaning',
  },
  '/services/dryer-vent-repair': {
    title: 'Dryer Vent Repair in Bucks County, PA | Air Duct Priority',
    description: 'Dryer vent repair for disconnected, crushed, damaged, or poorly routed vents in Bucks County and Montgomery County, PA.',
    service: 'Dryer Vent Repair',
  },
  '/services/dryer-vent-installation': {
    title: 'Dryer Vent Installation in Bucks County, PA | Air Duct Priority',
    description: 'Airflow-focused dryer vent installation and replacement in Bucks County and Montgomery County, PA.',
    service: 'Dryer Vent Installation',
  },
  '/services/dryer-vent-rerouting': {
    title: 'Dryer Vent Rerouting in Bucks County, PA | Air Duct Priority',
    description: 'Dryer vent rerouting to improve airflow and correct inefficient vent paths in Bucks County and Montgomery County, PA.',
    service: 'Dryer Vent Rerouting',
  },
  '/services/bird-guard': {
    title: 'Bird Guard Installation in Bucks County, PA | Air Duct Priority',
    description: 'Bird nest removal and exterior vent bird guard installation in Bucks County and Montgomery County, PA.',
    service: 'Bird Guard Installation',
  },
  '/services/hoa-inspection': {
    title: 'HOA Dryer Vent Inspection in Bucks County, PA | Air Duct Priority',
    description: 'Dryer vent airflow and safety inspections with documentation for HOAs and property managers in Bucks County and Montgomery County, PA.',
    service: 'HOA Dryer Vent Inspection',
  },
  '/services/air-duct-cleaning': {
    title: 'Air Duct Cleaning in Bucks County, PA | Air Duct Priority',
    description: 'Full-system air duct cleaning with inspection and before-and-after proof in Bucks County and Montgomery County, PA.',
    service: 'Air Duct Cleaning',
  },
  '/services/air-duct-installation': {
    title: 'Air Duct Installation in Bucks County, PA | Air Duct Priority',
    description: 'Professional air duct installation and replacement services in Bucks County and Montgomery County, PA.',
    service: 'Air Duct Installation',
  },
  '/services/air-duct-repair': {
    title: 'Air Duct Repair in Bucks County, PA | Air Duct Priority',
    description: 'Air duct repair for damaged, leaking, crushed, or disconnected ductwork in Bucks County and Montgomery County, PA.',
    service: 'Air Duct Repair',
  },
  '/services/air-duct-sanitizing': {
    title: 'Air Duct Sanitizing in Bucks County, PA | Air Duct Priority',
    description: 'Inspection-based air duct sanitizing services in Bucks County and Montgomery County, PA.',
    service: 'Air Duct Sanitizing',
  },
  '/services/air-duct-construction-cleaning': {
    title: 'Post-Construction Air Duct Cleaning | Air Duct Priority',
    description: 'Air duct cleaning for renovation and construction dust in Bucks County and Montgomery County, PA.',
    service: 'Post-Construction Air Duct Cleaning',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Air Duct Priority',
  url: SITE_URL,
  telephone: '+1-215-710-8781',
  email: 'airductpriority@gmail.com',
  image: DEFAULT_IMAGE,
  priceRange: '$$',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Pennsylvania Home Improvement Contractor License',
    value: 'PA154999',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jamison',
    addressRegion: 'PA',
    postalCode: '18929',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bucks County, PA' },
    { '@type': 'AdministrativeArea', name: 'Montgomery County, PA' },
  ],
  sameAs: ['https://maps.app.goo.gl/c8kKh1yKKoHy9qNu6'],
};

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = pageSeo[pathname] ?? {
      title: 'Air Duct Priority',
      description: 'Owner-operated dryer vent and air duct services in Bucks County and Montgomery County, PA.',
    };
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.querySelectorAll('script[data-seo-schema]').forEach((script) => script.remove());

    const schemas: object[] = [
      localBusinessSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
        isPartOf: { '@type': 'WebSite', name: 'Air Duct Priority', url: SITE_URL },
        about: { '@id': `${SITE_URL}/#business` },
      },
    ];

    if (seo.service) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.service,
        description: seo.description,
        url: canonicalUrl,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: ['Bucks County, PA', 'Montgomery County, PA'],
      });
    }

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
}
