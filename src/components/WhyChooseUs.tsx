import { Clock, Zap, HeartHandshake, Wallet, Award, Workflow, MessagesSquare } from 'lucide-react';

const REASONS = [
  { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock support whenever you need us, day or night.' },
  { icon: Zap, title: 'Fast Booking Process', desc: 'Quick, streamlined reservations that save you time.' },
  { icon: HeartHandshake, title: 'Trusted Customer Service', desc: 'A 5.0-rated team that genuinely cares about your journey.' },
  { icon: Wallet, title: 'Affordable Travel Options', desc: 'Competitive pricing across every budget and destination.' },
  { icon: Award, title: 'Experienced Travel Agents', desc: 'Seasoned professionals who know the routes and the rules.' },
  { icon: Workflow, title: 'Smooth End-to-End Support', desc: 'From planning to return, we handle every detail for you.' },
  { icon: MessagesSquare, title: 'Reliable Communication', desc: 'Fast, clear responses on WhatsApp and phone — every time.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-midnight-950 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-midnight-700/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute inset-0 grid-texture opacity-20" />

      <div className="container-lux relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center text-gold-300">
            <span className="h-px w-8 bg-gold-400" /> Why Choose Us <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            The Raki Travel Difference
          </h2>
          <p className="reveal mt-4 text-base text-midnight-200/80 sm:text-lg" data-reveal-delay="140">
            Seven reasons travelers across Ethiopia trust us with their journeys.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold-300/40 hover:bg-white/[0.07]"
              data-reveal-delay={String((i % 3) * 100)}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300/20 to-gold-500/10 text-gold-300 transition-transform duration-500 group-hover:scale-110">
                <r.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight-200/70">{r.desc}</p>

              {/* Hover gold line */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold-300 to-gold-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}

          {/* 8th cell — CTA tile */}
          <div className="reveal flex flex-col justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 p-6 text-midnight-950" data-reveal-delay="200">
            <h3 className="font-display text-lg font-semibold">Ready to travel?</h3>
            <p className="mt-2 text-sm font-medium text-midnight-900/80">
              Talk to an agent now — we respond within minutes.
            </p>
            <a href="#contact" className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-midnight-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
