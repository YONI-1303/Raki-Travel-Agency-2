import { useEffect, useState } from 'react';
import { Menu, X, Phone, Plane } from 'lucide-react';
import { BUSINESS, telLink, waLink } from '../lib/business';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight-950/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(7,13,36,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-lux flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5" aria-label="Raki Travel Agency home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 shadow-gold">
            <Plane className="h-5 w-5 text-midnight-950" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-white">Raki</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-300">Travel</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-midnight-100/80 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-gold-300"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <a href={waLink("Hello Raki Travel, I'd like to book a trip.")} className="btn-gold" target="_blank" rel="noreferrer">
            Book a Trip
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-midnight-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-lux flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-midnight-100/90 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3 px-1">
            <a href={telLink} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
            <a
              href={waLink("Hello Raki Travel, I'd like to book a trip.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full"
              onClick={() => setOpen(false)}
            >
              Book a Trip
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
