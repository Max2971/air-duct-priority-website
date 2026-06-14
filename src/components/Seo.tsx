import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://airductpriority.com';
const DEFAULT_IMAGE = `${SITE_URL}/hero-dryer-vent-cleaning.webp`;

type PageSeo = {
  title: string;
  description: string;
  service?: string;
  faqs?: Array<{ question: string; answer: string }>;
  article?: { published: string; modified: string };
};

const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Air Duct Priority | Dryer Vent & Air Duct Services',
    description: 'Owner-operated dryer vent and air duct services in Bucks County and Montgomery County, PA. Licensed and insured with free in-person inspections.',
    faqs: [
      {
        question: 'How do I know if my dryer vent may be clogged?',
        answer: 'Common signs include clothes taking two cycles to dry, a hot dryer, weak airflow outside, lint around the exterior vent, an airflow error, or a burning smell.',
      },
      {
        question: 'Do you repair and install dryer vents or only clean them?',
        answer: 'Air Duct Priority provides dryer vent cleaning, repair, installation, rerouting, exterior vent cover replacement, bird nest removal, and bird guard installation.',
      },
      {
        question: 'Will you tell me if air duct cleaning is not needed?',
        answer: 'Yes. Air duct cleaning is recommended when an inspection shows a real reason, such as heavy debris, construction dust, pest activity, odors, or a specific airflow concern.',
      },
      {
        question: 'Do you provide before-and-after proof?',
        answer: 'Yes. Before-and-after video proof is provided when possible so customers can understand the condition of their own dryer vent or air duct system.',
      },
      {
        question: 'What areas do you serve?',
        answer: 'Air Duct Priority is based in Jamison, Pennsylvania and serves Bucks County, Montgomery County, and nearby communities.',
      },
    ],
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
  '/free-inspection': {
    title: 'Free Dryer Vent & Air Duct Inspection | Air Duct Priority',
    description: 'Request a free in-person dryer vent or air duct inspection in Bucks County and Montgomery County. No pressure and clear pricing before work.',
    service: 'Free Dryer Vent and Air Duct Inspection',
  },
  '/reviews': {
    title: 'Air Duct Priority Reviews | 544 Verified Google Reviews',
    description: 'Read review themes and verified Google reviews for Air Duct Priority, an owner-operated dryer vent and air duct company serving Bucks and Montgomery Counties.',
  },
  '/resources': {
    title: 'Dryer Vent & Air Duct Resources | Air Duct Priority',
    description: 'Practical homeowner guides about dryer vent airflow, cleaning, repair, replacement, bird nests, and exterior vent concerns.',
  },
  '/resources/signs-dryer-vent-clogged': {
    title: 'Signs Your Dryer Vent May Be Clogged | Air Duct Priority',
    description: 'Learn the common signs of a clogged dryer vent, what homeowners can check safely, and when cleaning may not solve the problem.',
    article: { published: '2026-06-13', modified: '2026-06-13' },
    faqs: [
      { question: 'How often should a dryer vent be cleaned?', answer: 'The right interval depends on vent length, route, dryer use, household size, and prior buildup. Inspection is more reliable than assuming one interval fits every home.' },
      { question: 'Can a dryer vent be clogged even if the lint screen is clean?', answer: 'Yes. The lint screen does not capture every fiber, and restrictions can also come from nesting material, damaged duct, a stuck cover, or a poor route.' },
      { question: 'Why is the dryer still slow after vent cleaning?', answer: 'The vent may have physical damage, an inefficient route, a blocked termination, or the dryer itself may need appliance service.' },
      { question: 'Can I check airflow outside myself?', answer: 'You can observe an accessible exterior vent from a safe location while the dryer runs. Avoid roofs, moving parts, and reaching inside an operating vent.' },
    ],
  },
  '/resources/dryer-vent-cleaning-repair-or-replacement': {
    title: 'Dryer Vent Cleaning, Repair, or Replacement? | Air Duct Priority',
    description: 'Understand when a dryer vent needs cleaning, repair, replacement, or rerouting and which problems each service actually solves.',
    article: { published: '2026-06-13', modified: '2026-06-13' },
    faqs: [
      { question: 'Can a dryer vent be repaired instead of replaced?', answer: 'Often, yes. A localized damaged or disconnected section may be repairable when the remaining route is suitable and accessible.' },
      { question: 'Does a long dryer vent always need rerouting?', answer: 'Not always. The route, turns, airflow, condition, and available alternatives should be evaluated before recommending rerouting.' },
      { question: 'What material is appropriate for a dryer vent?', answer: 'The permanent exhaust route should use suitable smooth metal duct. A listed flexible metal transition may be used only for the accessible connection between the dryer and the main line.' },
      { question: 'What if the dryer still shows an error after vent work?', answer: 'The appliance itself may need service, or another route or termination problem may remain. The cause should be diagnosed rather than assuming more cleaning is needed.' },
    ],
  },
  '/resources/bird-nest-in-exterior-vent': {
    title: 'Bird Nest in an Exterior Vent: What to Know | Air Duct Priority',
    description: 'Learn how bird nests affect dryer, bathroom, and kitchen exhaust vents, what to avoid, and when removal or cover replacement is needed.',
    article: { published: '2026-06-13', modified: '2026-06-13' },
    faqs: [
      { question: 'Can a bird nest block a dryer vent?', answer: 'Yes. Nesting material can restrict dryer exhaust airflow and may be combined with lint buildup or damage at the exterior termination.' },
      { question: 'Should a bird guard be installed immediately?', answer: 'A guard should not be installed over an active nest or before the vent is cleared and inspected. The guard must also be appropriate for the affected vent.' },
      { question: 'Can birds enter bathroom exhaust vents?', answer: 'Yes. Bathroom exhaust terminations can be affected by birds, nesting material, damaged covers, or stuck flaps.' },
      { question: 'Does removing the visible nest solve the problem?', answer: 'Not always. Material may remain deeper in the line, and the cover or vent route may be damaged. Airflow should be checked after removal.' },
    ],
  },
  '/resources/air-duct-cleaning-price-inspection': {
    title: 'Why Air Duct and Dryer Vent Prices Require Inspection',
    description: 'Learn why Air Duct Priority inspects before pricing air duct cleaning and dryer vent installation to prevent unnecessary or incorrectly scoped work.',
    article: { published: '2026-06-13', modified: '2026-06-13' },
    faqs: [
      { question: 'Can you give a rough air duct cleaning price by phone?', answer: 'Air Duct Priority does not quote air duct cleaning by phone because the system must be inspected to determine whether cleaning is needed and what the actual scope includes.' },
      { question: 'Can you quote dryer vent installation by phone?', answer: 'No. The route, access, existing line, and whether the job is actually installation or a smaller repair must be inspected first.' },
      { question: 'Is the inspection free?', answer: 'Air Duct Priority offers a free in-person inspection when appropriate and explains the recommendation before work begins.' },
      { question: 'What if my air ducts are already clean?', answer: 'If the inspection shows that cleaning is not needed, Air Duct Priority says so rather than recommending unnecessary work.' },
      { question: 'Will I know the price before work starts?', answer: 'Yes. After the inspection and scope explanation, the price is provided before work begins.' },
    ],
  },
  '/resources/how-often-clean-dryer-vent': {
    title: 'How Often Should a Dryer Vent Be Cleaned?',
    description: 'Learn the annual dryer vent cleaning baseline and why household size, pets, laundry frequency, and vent design can change the right interval.',
    article: { published: '2026-06-13', modified: '2026-06-13' },
    faqs: [
      { question: 'Do fire safety organizations recommend annual dryer vent cleaning?', answer: 'Yes. USFA advises cleaning dryer vent ductwork every year, and NFPA recommends once a year or more often when clothes take longer than normal to dry.' },
      { question: 'Can a dryer vent need cleaning more than once a year?', answer: 'Yes. Heavy dryer use, a large household, pets, route design, and recurring buildup can make more frequent service appropriate.' },
      { question: 'Can I wait two years between cleanings?', answer: 'Some lightly used systems may remain clear longer, but the decision should be based on airflow, drying performance, route condition, and inspection rather than the calendar alone.' },
      { question: 'Does annual cleaning solve every airflow problem?', answer: 'No. Damaged duct, poor routing, a blocked exterior termination, or an appliance problem may require a different solution.' },
    ],
  },
  '/resources/rigid-vs-flexible-dryer-vent': {
    title: 'Rigid Metal vs. Flexible Dryer Vent: Where Each Belongs',
    description: 'Understand why smooth rigid metal belongs in the permanent dryer vent route and flexible transition duct belongs only at the accessible appliance connection.',
    article: { published: '2026-06-13', modified: '2026-06-13' },
    faqs: [
      { question: 'Can flexible duct be used for the entire dryer vent line?', answer: 'No. Flexible transition duct is intended for the visible appliance connection, while the permanent exhaust route should use suitable smooth metal duct.' },
      { question: 'Why does Air Duct Priority use about a three-foot transition?', answer: 'Keeping the flexible connection short reduces unnecessary bends and keeps it accessible. It is a practical company standard when the layout allows.' },
      { question: 'Does code allow more than three feet?', answer: 'The applicable IRC provision permits a listed and labeled transition duct up to eight feet, but it must not be concealed. Local requirements and manufacturer instructions may also apply.' },
      { question: 'Does a damaged flexible connection mean I need a full installation?', answer: 'Not necessarily. If the main line is suitable, replacing a short damaged connection may only require repair.' },
    ],
  },
  '/doylestown-pa': { title: 'Dryer Vent & Air Duct Services in Doylestown, PA', description: 'Owner-operated dryer vent cleaning, repair, installation, and air duct cleaning in Doylestown, PA.' },
  '/newtown-pa': { title: 'Dryer Vent & Air Duct Services in Newtown, PA', description: 'Owner-operated dryer vent cleaning, repair, installation, and air duct cleaning in Newtown, PA.' },
  '/richboro-pa': { title: 'Dryer Vent & Air Duct Services in Richboro, PA', description: 'Owner-operated dryer vent cleaning, repair, installation, and air duct cleaning in Richboro, PA.' },
  '/warrington-pa': { title: 'Dryer Vent & Air Duct Services in Warrington, PA', description: 'Owner-operated dryer vent cleaning, repair, installation, and air duct cleaning in Warrington, PA.' },
  '/services/dryer-vent-cleaning': {
    title: 'Dryer Vent Cleaning in Bucks County, PA | Air Duct Priority',
    description: 'Licensed and insured dryer vent cleaning in Bucks County and Montgomery County, PA with free inspection, airflow checks, and clear recommendations.',
    service: 'Dryer Vent Cleaning',
    faqs: [
      { question: 'How do I know if my dryer vent is clogged?', answer: 'Common signs include longer drying times, two drying cycles, a hot dryer, weak exterior airflow, lint around the exterior vent, an airflow error, or a burning smell.' },
      { question: 'How often should a dryer vent be cleaned?', answer: 'The right interval depends on the vent length, route, dryer usage, household size, and prior buildup. An inspection can determine whether cleaning is currently needed.' },
      { question: 'Do you clean roof-exit dryer vents?', answer: 'Yes, roof-exit dryer vents can be inspected and cleaned when access and conditions allow.' },
      { question: 'Are you licensed and insured?', answer: 'Yes. Air Duct Priority is licensed and insured. Pennsylvania license PA154999.' },
      { question: 'Do you repair dryer vents or only clean them?', answer: 'Air Duct Priority provides dryer vent cleaning, repair, installation, rerouting, bird nest removal, bird guard installation, and exterior vent cover replacement.' },
      { question: 'Can you remove a bird nest from a dryer vent?', answer: 'Yes. Bird nesting material can be removed when present and accessible, and an appropriate exterior solution may be recommended to help prevent recurrence.' },
      { question: 'What if the dryer still shows an airflow error after cleaning?', answer: 'The vent route, exterior termination, damaged vent sections, and dryer itself may need further evaluation. If the issue appears to be inside the appliance, we tell the customer.' },
      { question: 'Do you provide before-and-after proof?', answer: 'Yes. Before-and-after proof is provided when possible so customers can understand the condition and result of their own dryer vent service.' },
      { question: 'What areas do you serve?', answer: 'Air Duct Priority serves Bucks County and Montgomery County, including Jamison, Doylestown, Newtown, Richboro, Warrington, Yardley, New Hope, Lansdale, and Blue Bell.' },
      { question: 'How much does dryer vent cleaning cost?', answer: 'Pricing depends on vent length, exit location, access, blockage level, bird nests, and whether repair is needed. Air Duct Priority provides clear pricing before work begins.' },
    ],
  },
  '/services/dryer-vent-repair': {
    title: 'Dryer Vent Repair in Bucks County, PA | Air Duct Priority',
    description: 'Dryer vent repair for disconnected, crushed, damaged, or poorly routed vents in Bucks County and Montgomery County, PA.',
    service: 'Dryer Vent Repair',
    faqs: [
      { question: 'How do I know whether my dryer vent needs repair?', answer: 'Visible damage, a crushed connection, lint or moisture escaping indoors, poor airflow after cleaning, or a disconnected line can indicate repair is needed.' },
      { question: 'Can you repair a dryer vent disconnected in an attic?', answer: 'Accessible disconnected dryer vent sections can be evaluated and repaired when conditions allow.' },
      { question: 'Do you replace crushed flexible duct behind the dryer?', answer: 'Yes. A crushed or unsuitable connection can be replaced with an appropriate connection when needed.' },
      { question: 'Can you repair a roof-exit dryer vent?', answer: 'Roof-exit vent concerns can be inspected and addressed depending on access, condition, and the exterior termination.' },
      { question: 'Do you provide a free inspection?', answer: 'Yes. Air Duct Priority provides a free in-person inspection and clear recommendation before repair work begins.' },
    ],
  },
  '/services/dryer-vent-installation': {
    title: 'Dryer Vent Installation in Bucks County, PA | Air Duct Priority',
    description: 'Airflow-focused dryer vent installation and replacement in Bucks County and Montgomery County, PA.',
    service: 'Dryer Vent Installation',
    faqs: [
      { question: 'When is a new dryer vent line needed?', answer: 'A new line may be needed when the existing vent is missing, damaged, unsafe, poorly routed, or cannot be repaired effectively.' },
      { question: 'Can you reroute an existing dryer vent?', answer: 'Yes. Air Duct Priority provides dryer vent rerouting when a clearer or more practical route is available.' },
      { question: 'What materials do you use?', answer: 'The recommended materials depend on the route and conditions. Smooth metal is used where appropriate, with secure connections and a proper exterior termination.' },
      { question: 'Can you install a new exterior vent cover?', answer: 'Yes. Exterior termination and vent cover replacement can be included when appropriate.' },
      { question: 'Do you provide a free inspection before installation?', answer: 'Yes. Air Duct Priority provides a free in-person inspection and explains the proposed route and scope before work begins.' },
    ],
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
    faqs: [
      { question: 'Does every home need air duct cleaning?', answer: 'No. Air duct cleaning is recommended when an inspection shows a real reason. If the ducts look clean, Air Duct Priority says so.' },
      { question: 'Do you clean only the vent covers?', answer: 'No. When cleaning is needed, the goal is full-system cleaning of the accessible air-distribution system, not only visible registers.' },
      { question: 'Do you provide before-and-after proof?', answer: 'Yes. Before-and-after video proof is provided when possible so the customer can understand the condition and result.' },
      { question: 'How often should air ducts be cleaned?', answer: 'After a proper full-system cleaning, most homes under normal conditions may not need another cleaning for approximately 10 to 15 years, unless specific conditions change.' },
      { question: 'What can make cleaning necessary sooner?', answer: 'Renovation dust, pest activity, smoke, water damage, unusual debris, odors, or specific contamination concerns may make cleaning appropriate sooner.' },
    ],
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
  '/services/flexible-duct-replacement': {
    title: 'Flexible Duct Replacement in Bucks County, PA | Air Duct Priority',
    description: 'Replacement of crushed, torn, disconnected, or damaged flexible ductwork in Bucks County and Montgomery County, PA.',
    service: 'Flexible Duct Replacement',
  },
  '/services/bird-nest-removal': {
    title: 'Bird Nest Removal from Vents | Air Duct Priority',
    description: 'Bird nest removal from dryer, bathroom, and kitchen exhaust vents in Bucks County and Montgomery County, PA.',
    service: 'Bird Nest Removal from Exterior Vents',
  },
  '/services/bathroom-exhaust-vent-cleaning': {
    title: 'Bathroom Exhaust Vent Cleaning | Air Duct Priority',
    description: 'Bathroom exhaust vent cleaning and blockage removal in Bucks County and Montgomery County, PA.',
    service: 'Bathroom Exhaust Vent Cleaning',
  },
  '/services/kitchen-exhaust-vent-cleaning': {
    title: 'Kitchen Exhaust Vent Cleaning | Air Duct Priority',
    description: 'Residential kitchen exhaust vent cleaning and blockage removal in Bucks County and Montgomery County, PA.',
    service: 'Kitchen Exhaust Vent Cleaning',
  },
  '/services/exterior-vent-cover-replacement': {
    title: 'Exterior Vent Cover Replacement | Air Duct Priority',
    description: 'Exterior dryer, bathroom, and kitchen exhaust vent cover replacement in Bucks County and Montgomery County, PA.',
    service: 'Exterior Vent Cover Replacement',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  hasMap: 'https://maps.app.goo.gl/c8kKh1yKKoHy9qNu6',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bucks County, PA' },
    { '@type': 'AdministrativeArea', name: 'Montgomery County, PA' },
  ],
  sameAs: [
    'https://maps.app.goo.gl/c8kKh1yKKoHy9qNu6',
    'https://www.facebook.com/airductunitedservice/',
    'https://www.instagram.com/airductpriority_pa/',
  ],
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
    const isKnownPage = Boolean(pageSeo[pathname]);
    const seo = pageSeo[pathname] ?? {
      title: 'Page Not Found | Air Duct Priority',
      description: 'The requested page could not be found.',
    };
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[name="robots"]', 'name', 'robots', isKnownPage ? 'index, follow, max-image-preview:large' : 'noindex, follow');
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

    if (pathname === '/about') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Max G.A.',
        jobTitle: 'Founder and Owner-Operator',
        worksFor: { '@id': `${SITE_URL}/#business` },
        url: `${SITE_URL}/about`,
      });
    }

    if (seo.article) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: seo.title,
        description: seo.description,
        datePublished: seo.article.published,
        dateModified: seo.article.modified,
        mainEntityOfPage: canonicalUrl,
        author: { '@type': 'Person', name: 'Max G.A.', url: `${SITE_URL}/about` },
        publisher: { '@id': `${SITE_URL}/#business` },
        image: DEFAULT_IMAGE,
      });
    }

    if (seo.faqs) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seo.faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
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
