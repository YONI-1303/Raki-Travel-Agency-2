import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    text: 'Everything was handled perfectly. My flight booking was fast and stress-free.',
    name: 'Mahlet T.',
    role: 'Flight to Dubai',
  },
  {
    text: 'The team is very professional and responds quickly. Highly recommended.',
    name: 'Dawit A.',
    role: 'Family Trip',
  },
  {
    text: 'I got my visa and flight arranged smoothly without complications.',
    name: 'Sara G.',
    role: 'Visa + Flight',
  },
  {
    text: 'The best travel service I’ve used in Addis Ababa.',
    name: 'Yonas B.',
    role: 'Tour Package',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Testimonials <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            Loved by Travelers Across Ethiopia
          </h2>
          <div className="reveal mt-5 flex items-center justify-center gap-2" data-reveal-delay="140">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-midnight-800">5.0</span>
            <span className="text-sm text-midnight-500">· Highly Trusted</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="reveal lux-card group flex flex-col p-6"
              data-reveal-delay={String((i % 4) * 90)}
            >
              <Quote className="h-8 w-8 text-gold-300" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-midnight-700">
                “{r.text}”
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-midnight-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight-900 font-display text-sm font-semibold text-gold-300">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-midnight-900">{r.name}</p>
                  <p className="text-xs text-midnight-500">{r.role}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
