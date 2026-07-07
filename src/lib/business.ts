export const BUSINESS = {
  name: 'Raki Travel Agency',
  phone: '0913326307',
  phoneIntl: '+251913326307',
  whatsapp: '251913326307',
  location: 'XRW5+73V, Addis Ababa, Ethiopia',
  locationShort: 'Addis Ababa, Ethiopia',
  hours: 'Open 24 Hours',
  rating: '5.0',
  mapsQuery: 'XRW5+73V+Addis+Ababa+Ethiopia',
} as const;

export const waLink = (message?: string) =>
  `https://wa.me/${BUSINESS.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:+${BUSINESS.whatsapp}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.location
)}&output=embed`;
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.location
)}`;
