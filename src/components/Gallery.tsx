const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Airplane wing above the clouds',
    label: 'Above the Clouds',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Luxury hotel lobby',
    label: 'Luxury Stays',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Passport with visa stamps',
    label: 'Visas & Documents',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Dubai skyline at dusk',
    label: 'Global Destinations',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Tour group exploring',
    label: 'Curated Tours',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1535208/pexels-photo-1535208.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Happy travelers together',
    label: 'Happy Travelers',
    span: 'lg:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-midnight-50/50">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Gallery <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="reveal heading-display mt-5 text-3xl sm:text-4xl lg:text-5xl" data-reveal-delay="80">
            A Glimpse of the Journey
          </h2>
          <p className="reveal mt-4 text-base text-midnight-600 sm:text-lg" data-reveal-delay="140">
            Cinematic moments from flights, lounges, and destinations worldwide.
          </p>
        </div>

        <div className="reveal mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {IMAGES.map((img) => (
            <figure
              key={img.label}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-midnight-950/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 p-4">
                <span className="text-sm font-semibold text-white drop-shadow">{img.label}</span>
              </figcaption>
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-gold-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
