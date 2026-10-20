import ScrollReveal from "./ScrollReveal.jsx";

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
        <ScrollReveal variant="fade-up">
          <p className="section-kicker">Partners</p>
          <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
            Trusted collaborators.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 items-center gap-6 md:grid-cols-4">
          {partners.map((p, i) => (
            <ScrollReveal key={p.alt} variant="scale-up" delay={i * 80}>
              <div className="luxury-card group flex h-28 items-center justify-center rounded-2xl border border-gold/15 bg-panel px-6 transition-all duration-300 hover:border-gold/50">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="max-h-16 w-auto object-contain mix-blend-screen opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
