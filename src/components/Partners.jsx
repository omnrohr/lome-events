const partners = [
  { src: "/images/partner-ek.png", alt: "EK for Catering Services" },
  { src: "/images/partner-ra.png", alt: "Raed Abu Aishe" },
  { src: "/images/partner-jd.png", alt: "Jordan Drones" },
  { src: "/images/partner-booka.png", alt: "BOOKA" },
];

export default function Partners() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <p className="section-kicker">Partners</p>
        <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
          Trusted collaborators.
        </h2>
        <div className="mt-12 grid grid-cols-2 items-center gap-8 md:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="flex h-28 items-center justify-center rounded-2xl border border-gold/10 bg-panel px-6"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-16 w-auto object-contain mix-blend-screen"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
