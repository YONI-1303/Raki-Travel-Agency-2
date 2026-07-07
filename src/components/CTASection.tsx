import { ArrowRight, MessageCircle, Zap } from 'lucide-react';
import { waLink } from '../lib/business';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-midnight-950 py-20 sm:py-24">
      {/* Glows */}
      <div className="absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-gold-500/15 to-transparent blur-3xl" />
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="container-lux relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <Zap className="h-3.5 w-3.5" /> Fast response within minutes
          </span>
          <h2 className="heading-display mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
            Start Your Journey <span className="text-gold-gradient">Today</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-midnight-200/80 sm:text-lg">
            Tell us where you want to go — we’ll handle the rest, fast and professionally.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-gold group w-full sm:w-auto">
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hello Raki Travel, I'd like to start planning my trip.")}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Contact WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
