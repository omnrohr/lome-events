import {
  Building2,
  Presentation,
  Music,
  Megaphone,
  Gem,
  Landmark,
} from "lucide-react";

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
        <p className="section-kicker">Our Expertise</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl text-ivory md:text-5xl">
          Events shaped for every stage and audience.
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="group rounded-[1.4rem] border border-gold/15 bg-panel p-7 transition duration-300 hover:border-gold/50 hover:bg-panel/80"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-ink">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-2xl text-ivory">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
