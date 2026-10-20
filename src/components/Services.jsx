import {
  CalendarDays,
  Clapperboard,
  Palette,
  Music2,
  Megaphone,
  Truck,
  ClipboardList,
  Wallet,
  Handshake,
  MapPin,
  Users,
  UserCheck,
  CheckCircle2,
  Theater,
  Volume2,
  MonitorPlay,
  Settings2,
  Flower2,
  Lightbulb,
  Mic2,
  Headphones,
  Drum,
  UserRound,
  VenetianMask,
  Pointer,
  Share2,
  Ticket,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const pillars = [
  {
    icon: CalendarDays,
    title: "Event Management",
    copy: "Complete control and professional execution throughout every stage of the event — managed as a complete project.",
    image: "/images/event-mgmt.jpg",
    items: [
      { icon: ClipboardList, label: "Planning" },
      { icon: Wallet, label: "Budgeting" },
      { icon: Handshake, label: "Suppliers Coordination" },
      { icon: MapPin, label: "Venue Preparation" },
      { icon: Settings2, label: "Production" },
      { icon: Users, label: "Staffing" },
      { icon: UserCheck, label: "Guest Management" },
      { icon: CheckCircle2, label: "Final Execution" },
    ],
  },
  {
    icon: Clapperboard,
    title: "Production & Creative",
    copy: "Stage, technical, and visual worlds built to match the concept — from first sketch to show time.",
    image: "/images/production.jpg",
    items: [
      { icon: Theater, label: "Stage & Set Design" },
      { icon: Volume2, label: "Sound & Lighting" },
      { icon: MonitorPlay, label: "LED & Visuals" },
      { icon: Settings2, label: "Technical Production" },
      { icon: Flower2, label: "Event Décor" },
      { icon: Lightbulb, label: "Creative Concepts" },
    ],
  },
  {
    icon: Music2,
    title: "Entertainment & Experiences",
    copy: "Live talent and interactive moments that give every event its pulse.",
    image: "/images/entertainment.jpg",
    items: [
      { icon: Mic2, label: "Artists" },
      { icon: Headphones, label: "DJs" },
      { icon: Drum, label: "Bands" },
      { icon: UserRound, label: "MCs" },
      { icon: VenetianMask, label: "Performers" },
      { icon: Pointer, label: "Interactive Experiences" },
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Sponsorship",
    copy: "Visibility, partnerships, and guest access designed as part of the experience.",
    image: "/images/marketing.jpg",
    items: [
      { icon: Megaphone, label: "Event Marketing" },
      { icon: Share2, label: "Social Media & Content" },
      { icon: UserRound, label: "Influencer & PR" },
      { icon: Handshake, label: "Sponsorships & Partnerships" },
      { icon: Ticket, label: "Ticketing & Access Management" },
    ],
  },
];

const extras = [
  { icon: Palette, title: "Creative & Design" },
  { icon: Truck, title: "Logistics & Guest Experience" },
  { icon: Clapperboard, title: "Event Production" },
  { icon: Music2, title: "Entertainment & Live Events" },
  { icon: Megaphone, title: "Brand Activations" },
  { icon: CalendarDays, title: "Event Management" },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-gold/10 bg-ink-soft py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="max-w-2xl">
            <p className="section-kicker">What We Do</p>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl md:text-5xl">
              Capabilities built for complete events.
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted">
              Six core disciplines, delivered as one connected production.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Capabilities Pills */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map(({ icon: Icon, title }, i) => (
            <ScrollReveal key={title} variant="scale-up" delay={i * 60}>
              <div className="group flex items-center gap-4 rounded-2xl border border-gold/15 bg-panel/60 px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-300 hover:border-gold/50 hover:bg-panel hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                  <Icon size={18} />
                </span>
                <p className="text-xs sm:text-sm font-medium tracking-wide text-ivory transition-colors group-hover:text-gold-bright">
                  {title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 4 Pillars with Staggered Entrance & Interactive Hover */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} variant="fade-up" delay={i * 120}>
              <article className="luxury-card group overflow-hidden rounded-[1.4rem] sm:rounded-[1.6rem] border border-gold/15 bg-panel">
                <div className="shine-sweep relative h-48 sm:h-56">
                  <img
                    src={pillar.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
                </div>
                <div className="px-5 sm:px-6 pb-6 sm:pb-8 pt-3 md:px-8">
                  <div className="mb-3 flex items-center gap-3 text-gold">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                      <pillar.icon size={18} />
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-ivory transition-colors group-hover:text-gold-bright">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-muted">{pillar.copy}</p>
                  <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 border-t border-gold/10 pt-4 sm:pt-5">
                    {pillar.items.map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider text-ivory/80 transition-colors group-hover:text-ivory"
                      >
                        <Icon size={14} className="shrink-0 text-gold" />
                        <span className="truncate">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
