import { MapPin, Phone, Navigation, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS, telLink, waLink, mapsEmbed, mapsDirections } from '../lib/business';

export default function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Find Us <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            Visit Our Office in Addis Ababa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Map */}
          <div className="reveal lg:col-span-3">
            <div className="overflow-hidden rounded-3xl shadow-luxury">
              <iframe
                title="Raki Travel Agency location map"
                src={mapsEmbed}
                className="h-[340px] w-full sm:h-[440px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Info */}
          <div className="reveal flex flex-col justify-between gap-6 lg:col-span-2" data-reveal-delay="120">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight-50 text-midnight-900">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-midnight-900">Address</p>
                  <p className="text-sm text-midnight-600">{BUSINESS.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight-50 text-midnight-900">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-midnight-900">Phone</p>
                  <a href={telLink} className="text-sm text-midnight-600 transition-colors hover:text-gold-600">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-midnight-50 text-midnight-900">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-midnight-900">Hours</p>
                  <p className="text-sm text-midnight-600">{BUSINESS.hours} · 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex-1"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={waLink('Hello Raki Travel, I have a quick question.')}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp flex-1"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
