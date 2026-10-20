import {
  Building2,
  Presentation,
  Music,
  Megaphone,
  Gem,
  Landmark,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const items = [
  {
    icon: Building2,
    title: "Corporate Events",
    copy: "Brand-led gatherings with precise production and guest flow.",
  },
  {
    icon: Presentation,
    title: "Conferences & Exhibitions",
    copy: "Stages, content, and exhibition environments that support the message.",
  },
  {
    icon: Music,
    title: "Concerts & Festivals",
    copy: "Technical production and live programming at scale.",
  },
  {
    icon: Megaphone,
    title: "Brand Activations & Launches",
    copy: "Memorable launches that put the brand at the center of the room.",
  },
  {
    icon: Gem,
    title: "Weddings & Private Events",
    copy: "Intimate luxury, from décor and entertainment to guest experience.",
  },
  {
    icon: Landmark,
    title: "Government & Institutional Events",
    copy: "Protocol-aware execution for official and institutional occasions.",
  },
];

export default function Expertise() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal variant="fade-up">
          <p className="section-kicker">Our Expertise</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl text-ivory md:text-5xl">
            Events shaped for every stage and audience.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, copy }, i) => (
            <ScrollReveal key={title} variant="fade-up" delay={i * 90}>
              <article className="luxury-card group rounded-[1.4rem] border border-gold/15 bg-panel p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink group-hover:shadow-[0_0_20px_rgba(201,164,91,0.5)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-ivory transition-colors group-hover:text-gold-bright">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
