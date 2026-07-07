import { Plane, Phone, MapPin, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS, telLink, waLink } from '../lib/business';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  { label: 'Flight Booking', href: '#services' },
  { label: 'Visa Assistance', href: '#services' },
  { label: 'Hotel Reservations', href: '#services' },
  { label: 'Tour Packages', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight-950 pt-16 pb-8 text-midnight-200">
      <div className="absolute inset-0 grid-texture opacity-15" />
      <div className="absolute -top-20 left-1/2 h-40 w-[80%] -translate-x-1/2 bg-gold-500/10 blur-3xl" />

      <div className="container-lux relative">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 shadow-gold">
                <Plane className="h-5 w-5 text-midnight-950" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-white">Raki</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-300">Travel</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-midnight-300">
              Your trusted travel partner in Addis Ababa. Flights, visas, hotels, and tours —
              handled fast, professionally, and stress-free.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={waLink('Hello Raki Travel!')}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-midnight-200 transition-all hover:border-gold-300/40 hover:bg-gold-300/10 hover:text-gold-300"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-midnight-200 transition-all hover:border-gold-300/40 hover:bg-gold-300/10 hover:text-gold-300"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-midnight-200 transition-all hover:border-gold-300/40 hover:bg-gold-300/10 hover:text-gold-300"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-midnight-300 transition-colors hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-midnight-300 transition-colors hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-sm text-midnight-300 transition-colors hover:text-gold-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={telLink} className="flex items-center gap-2.5 text-sm text-midnight-300 transition-colors hover:text-gold-300">
                  <Phone className="h-4 w-4 text-gold-300" /> {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-midnight-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" /> {BUSINESS.location}
              </li>
            </ul>
            <a
              href={waLink('Hello Raki Travel, I’d like to book a trip.')}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-5 w-full"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-midnight-400">© 2026 Raki Travel Agency. All Rights Reserved.</p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs font-medium text-midnight-300 transition-colors hover:text-gold-300"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
