type DataLayerValue = string | number | boolean | null | undefined;

type AnalyticsEvent = {
  event: string;
  page_path?: string;
  page_url?: string;
  landing_page?: string;
  cta_label?: string;
  destination_url?: string;
  location?: string;
  service_context?: string;
  service?: string;
  zip?: string;
  source_page?: string;
  [key: string]: DataLayerValue;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[];
  }
}

function getLandingPage() {
  try {
    return window.sessionStorage.getItem('landingPage') || window.location.href;
  } catch {
    return window.location.href;
  }
}

function getPageContext() {
  return {
    page_path: window.location.pathname,
    page_url: window.location.href,
    landing_page: getLandingPage(),
  };
}

function cleanLabel(label: string | null | undefined) {
  return label?.replace(/\s+/g, ' ').trim().slice(0, 120) || undefined;
}

function getServiceContext(pathname = window.location.pathname) {
  if (pathname.includes('dryer-vent')) return 'dryer_vent';
  if (pathname.includes('air-duct') || pathname.includes('free-inspection')) return 'air_duct';
  if (pathname.includes('bird')) return 'bird_or_exterior_vent';
  return undefined;
}

export function pushAnalyticsEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  const dataLayer = initializeDataLayer();
  dataLayer.push({
    ...getPageContext(),
    ...event,
  });
}

export function initializeDataLayer() {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function trackContactLinkClick(link: HTMLAnchorElement) {
  const href = link.href;
  const ctaLabel = cleanLabel(link.textContent || link.getAttribute('aria-label'));
  const location = link.dataset.analyticsLocation;

  if (href.startsWith('tel:')) {
    pushAnalyticsEvent({
      event: 'phone_click',
      cta_label: ctaLabel,
      location,
      service_context: getServiceContext(),
    });
    return;
  }

  if (href.startsWith('sms:')) {
    pushAnalyticsEvent({
      event: 'sms_click',
      cta_label: ctaLabel,
      location,
      service_context: getServiceContext(),
    });
  }
}

export function trackInspectionCtaClick(link: HTMLAnchorElement) {
  pushAnalyticsEvent({
    event: 'inspection_cta_click',
    cta_label: cleanLabel(link.textContent || link.getAttribute('aria-label')),
    destination_url: link.href,
    location: link.dataset.analyticsLocation,
    service_context: getServiceContext(),
  });
}

export function trackReviewsClick(link: HTMLAnchorElement) {
  pushAnalyticsEvent({
    event: 'reviews_click',
    cta_label: cleanLabel(link.textContent || link.getAttribute('aria-label')) || 'Google Reviews',
    destination_url: link.href,
    location: link.dataset.analyticsLocation,
  });
}

export function trackFormSubmitSuccess(params: {
  service?: string;
  zip?: string;
  sourcePage?: string;
}) {
  pushAnalyticsEvent({
    event: 'form_submit_success',
    service: params.service,
    zip: params.zip,
    source_page: params.sourcePage || window.location.href,
    service_context: params.service || getServiceContext(),
  });
}

export function isInspectionLink(link: HTMLAnchorElement) {
  const url = new URL(link.href);
  return url.pathname === '/free-inspection' || url.hash === '#request-inspection';
}

export function isReviewsLink(link: HTMLAnchorElement) {
  return (
    link.href.includes('maps.app.goo.gl') ||
    link.href.includes('google.com/maps') ||
    cleanLabel(link.textContent)?.toLowerCase().includes('google reviews')
  );
}
