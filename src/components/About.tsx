import { Plane, FileCheck, Hotel, Globe2 } from 'lucide-react';

const HELP_ITEMS = [
  { icon: Plane, label: 'Flight bookings' },
  { icon: FileCheck, label: 'Visa assistance' },
  { icon: Hotel, label: 'Hotel reservations' },
  { icon: Globe2, label: 'International & local tour packages' },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl shadow-luxury">
            <img
              src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Traveler looking out airplane window at clouds"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-2 sm:-right-6">
            <div className="glass-card flex items-center gap-4 px-6 py-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15">
                <span className="font-display text-xl font-semibold text-gold-600">5.0</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-midnight-900">Highly Trusted</p>
                <p className="text-xs text-midnight-500">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Decorative gold ring */}
          <div className="absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-full border-2 border-gold-300/40" />
        </div>

        {/* Text */}
        <div>
          <span className="reveal eyebrow">
            <span className="h-px w-8 bg-gold-400" /> About Us
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            Your Trusted Travel Partner in Ethiopia
          </h2>
          <p className="reveal mt-6 text-base leading-relaxed text-midnight-600 sm:text-lg" data-reveal-delay="140">
            Raki Travel Agency is a professional travel service based in Addis Ababa,
            dedicated to making travel simple, fast, and reliable.
          </p>
          <p className="reveal mt-4 text-base leading-relaxed text-midnight-600" data-reveal-delay="200">
            We help individuals, families, and groups with:
          </p>

          <ul className="reveal mt-6 grid gap-3 sm:grid-cols-2" data-reveal-delay="260">
            {HELP_ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-midnight-100 bg-midnight-50/40 px-4 py-3.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-midnight-900 text-gold-300">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-medium text-midnight-800">{item.label}</span>
              </li>
            ))}
          </ul>

          <p className="reveal mt-6 text-base leading-relaxed text-midnight-600" data-reveal-delay="320">
            Our mission is to remove stress from travel planning and give clients a
            smooth, reliable experience from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}
