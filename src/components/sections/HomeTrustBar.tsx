import { BadgeCheck, Camera, MapPin, PhoneOff, SearchCheck, ShieldCheck, Star } from 'lucide-react';

const trustItems = [
  { icon: Star, text: '544 Verified Google Reviews' },
  { icon: ShieldCheck, text: 'Licensed & Insured' },
  { icon: BadgeCheck, text: 'PA154999' },
  { icon: MapPin, text: 'Owner-Operated Local Company' },
  { icon: PhoneOff, text: 'No Call Center' },
  { icon: SearchCheck, text: 'Free In-Person Inspection' },
  { icon: Camera, text: 'Before & After Video Proof' },
];

export default function HomeTrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-6 w-6 text-[#F97316]" />
              <p className="text-xs font-semibold leading-snug text-slate-800 md:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
