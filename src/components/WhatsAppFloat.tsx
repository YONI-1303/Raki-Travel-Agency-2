import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { waLink } from '../lib/business';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      {/* Tooltip bubble */}
      {bubble && (
        <div className="relative max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 shadow-luxury">
          <button
            onClick={() => setBubble(false)}
            aria-label="Dismiss"
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-midnight-900 text-white shadow"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-medium text-midnight-900">Need help booking?</p>
          <p className="mt-0.5 text-xs text-midnight-500">Chat with us — we reply in minutes.</p>
        </div>
      )}

      {/* Button */}
      <a
        href={waLink('Hello Raki Travel, I’d like to book a trip.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
