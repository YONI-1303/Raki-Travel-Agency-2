import { Plane, FileCheck, Hotel, Globe2, Users, Headset, ArrowUpRight } from 'lucide-react';
import { waLink } from '../lib/business';

const SERVICES = [
  {
    icon: Plane,
    title: 'Flight Booking',
    desc: 'Fast international & domestic flight reservations at the best available prices.',
    image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: FileCheck,
    title: 'Visa Assistance',
    desc: 'Guidance and support for travel visa applications and documentation.',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    desc: 'Affordable to luxury hotel bookings worldwide.',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Globe2,
    title: 'Tour Packages',
    desc: 'Curated travel experiences for groups, families, and solo travelers.',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Users,
    title: 'Group Travel Deals',
    desc: 'Special offers for family trips, pilgrimages, and group tours.',
    image: 'https://images.pexels.com/photos/1535208/pexels-photo-1535208.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Headset,
    title: 'Travel Consultation',
    desc: 'Personal travel planning and expert guidance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-midnight-50/50">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Our Services <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            Everything You Need for a Perfect Trip
          </h2>
          <p className="reveal mt-4 text-base text-midnight-600 sm:text-lg" data-reveal-delay="140">
            From your first flight to your final destination — handled with care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal lux-card group"
              data-reveal-delay={String((i % 3) * 100)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-midnight-950/20 to-transparent" />
                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-midnight-900 shadow-lg backdrop-blur">
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-midnight-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-midnight-600">{s.desc}</p>
                <a
                  href={waLink(`Hello Raki Travel, I'm interested in your ${s.title} service.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight-900 transition-colors hover:text-gold-600"
                >
                  Enquire on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
