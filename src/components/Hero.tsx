import { Star, MapPin, Clock, ArrowRight, MessageCircle, Plane } from 'lucide-react';
import { waLink } from '../lib/business';

const BADGES = [
  { icon: Star, label: '5.0 Trusted Agency' },
  { icon: MapPin, label: 'Addis Ababa, Ethiopia' },
  { icon: Clock, label: 'Open 24/7 Support' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden hero-mesh">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-40" />

      {/* Floating clouds */}
      <div className="absolute left-[8%] top-[22%] h-24 w-40 rounded-full bg-white/5 blur-2xl animate-float-slow" />
      <div className="absolute right-[12%] top-[35%] h-32 w-56 rounded-full bg-sky-400/10 blur-3xl animate-float" />
      <div className="absolute bottom-[18%] left-[40%] h-20 w-72 rounded-full bg-gold-300/5 blur-3xl animate-float-slow" />

      {/* Animated plane */}
      <div className="pointer-events-none absolute inset-x-0 top-[28%] h-px overflow-hidden">
        <div className="animate-plane-fly">
          <Plane className="h-8 w-8 text-gold-300/70 drop-shadow-[0_0_12px_rgba(217,167,60,0.5)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="container-lux relative z-10 flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="reveal eyebrow mb-6 text-gold-300" data-reveal-delay="0">
            <span className="h-px w-8 bg-gold-400" /> Premium Travel Concierge
          </span>

          <h1
            className="reveal heading-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            data-reveal-delay="80"
          >
            Travel the World with{' '}
            <span className="text-gold-gradient">Ease &amp; Confidence</span>
          </h1>

          <p
            className="reveal mt-6 max-w-2xl text-base leading-relaxed text-midnight-100/80 sm:text-lg"
            data-reveal-delay="160"
          >
            Flights, visas, hotels, and tours — handled fast, professionally, and
            stress-free by Raki Travel Agency in Addis Ababa.
          </p>

          {/* CTAs */}
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal-delay="240">
            <a href="#contact" className="btn-gold group">
              Book a Trip
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hello Raki Travel, I'd like to inquire about your services.")}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              Contact on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal mt-12 flex flex-wrap gap-x-6 gap-y-3" data-reveal-delay="320">
            {BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-midnight-100/85">
                <b.icon className="h-4 w-4 text-gold-300" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/0" />
    </section>
  );
}
