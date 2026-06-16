import { useEffect, useState } from 'react';
import { MessageSquareText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileContactBar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('footer, [data-hide-mobile-contact-bar]'));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsHidden(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.01 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Quick contact options"
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-1.5 shadow-[0_-6px_24px_rgba(15,23,42,0.18)] backdrop-blur transition-transform duration-300 md:hidden ${isHidden ? 'translate-y-full' : 'translate-y-0'}`}
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href="tel:+12157108781"
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-2 py-1.5 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href="sms:+12157108781"
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-blue-600 bg-white px-2 py-1.5 text-sm font-bold text-blue-700"
        >
          <MessageSquareText className="h-4 w-4" />
          Text
        </a>
        <Link
          to="/free-inspection#request-inspection"
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-slate-900 px-2 py-1.5 text-center text-xs font-bold leading-tight text-white"
        >
          Request Online
        </Link>
      </div>
    </aside>
  );
}
