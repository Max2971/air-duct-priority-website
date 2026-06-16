import { useEffect } from 'react';
import {
  isInspectionLink,
  isReviewsLink,
  trackContactLinkClick,
  trackInspectionCtaClick,
  trackReviewsClick,
} from '../lib/analytics';

export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a');
      if (!(link instanceof HTMLAnchorElement)) return;

      if (link.href.startsWith('tel:') || link.href.startsWith('sms:')) {
        trackContactLinkClick(link);
      }

      if (isInspectionLink(link)) {
        trackInspectionCtaClick(link);
      }

      if (isReviewsLink(link)) {
        trackReviewsClick(link);
      }
    };

    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);

  return null;
}
