import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { BUSINESS, telLink, waLink } from '../lib/business';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', destination: '', travel_date: '', budget: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('travel_quote_requests').insert({
        name: form.name.trim(),
        destination: form.destination.trim(),
        travel_date: form.travel_date,
        budget: form.budget.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', destination: '', travel_date: '', budget: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try WhatsApp instead.');
    }
  };

  return (
    <section id="contact" className="section-pad bg-midnight-50/50">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Contact <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            Request a Travel Quote
          </h2>
          <p className="reveal mt-4 text-base text-midnight-600 sm:text-lg" data-reveal-delay="140">
            We will respond quickly with the best available options.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="reveal flex flex-col gap-4 lg:col-span-2">
            <a
              href={telLink}
              className="group flex items-center gap-4 rounded-2xl border border-midnight-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-luxury"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-900 text-gold-300 transition-transform group-hover:scale-110">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-midnight-500">Call us</p>
                <p className="text-base font-semibold text-midnight-900">{BUSINESS.phone}</p>
              </div>
            </a>

            <a
              href={waLink('Hello Raki Travel, I have a question about my trip.')}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-midnight-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-luxury"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white transition-transform group-hover:scale-110">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-midnight-500">Chat on WhatsApp</p>
                <p className="text-base font-semibold text-midnight-900">Quick replies, 24/7</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-midnight-100 bg-white p-5 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-900 text-gold-300">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-midnight-500">Location</p>
                <p className="text-base font-semibold text-midnight-900">{BUSINESS.locationShort}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3" data-reveal-delay="120">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-midnight-100 bg-white p-6 shadow-luxury sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-midnight-800">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-midnight-200 bg-midnight-50/40 px-4 py-3 text-sm text-midnight-900 outline-none transition-all placeholder:text-midnight-400 focus:border-midnight-900 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-midnight-800">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    required
                    value={form.destination}
                    onChange={update('destination')}
                    placeholder="e.g. Dubai"
                    className="w-full rounded-xl border border-midnight-200 bg-midnight-50/40 px-4 py-3 text-sm text-midnight-900 outline-none transition-all placeholder:text-midnight-400 focus:border-midnight-900 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>

                <div>
                  <label htmlFor="travel_date" className="mb-1.5 block text-sm font-medium text-midnight-800">
                    Travel Date
                  </label>
                  <input
                    id="travel_date"
                    type="date"
                    required
                    value={form.travel_date}
                    onChange={update('travel_date')}
                    className="w-full rounded-xl border border-midnight-200 bg-midnight-50/40 px-4 py-3 text-sm text-midnight-900 outline-none transition-all placeholder:text-midnight-400 focus:border-midnight-900 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-midnight-800">
                    Budget
                  </label>
                  <input
                    id="budget"
                    type="text"
                    required
                    value={form.budget}
                    onChange={update('budget')}
                    placeholder="e.g. $1,500 – $2,500"
                    className="w-full rounded-xl border border-midnight-200 bg-midnight-50/40 px-4 py-3 text-sm text-midnight-900 outline-none transition-all placeholder:text-midnight-400 focus:border-midnight-900 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Request Quote
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>
                    Thank you! Your quote request has been sent. We will respond quickly with the best available options.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span>
                    {errorMsg} You can also reach us directly on{' '}
                    <a href={waLink('Hello Raki Travel, I’d like a travel quote.')} target="_blank" rel="noreferrer" className="font-semibold underline">
                      WhatsApp
                    </a>.
                  </span>
                </div>
              )}

              <p className="mt-4 text-center text-xs text-midnight-500">
                Prefer to chat? Message us on WhatsApp for an instant reply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
