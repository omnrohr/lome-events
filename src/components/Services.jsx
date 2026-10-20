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
    <section id="services" className="border-y border-gold/10 bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">What We Do</p>
          <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
            Capabilities built for complete events.
          </h2>
          <p className="mt-5 text-muted">
            Six core disciplines, delivered as one connected production.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-gold/15 bg-panel/60 px-5 py-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon size={18} />
              </span>
              <p className="text-sm font-medium tracking-wide text-ivory">{title}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="overflow-hidden rounded-[1.6rem] border border-gold/15 bg-panel"
            >
              <div className="relative h-52">
                <img
                  src={pillar.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
              </div>
              <div className="px-6 pb-8 pt-2 md:px-8">
                <div className="mb-3 flex items-center gap-3 text-gold">
                  <pillar.icon size={20} />
                  <h3 className="font-display text-2xl text-ivory">{pillar.title}</h3>
                </div>
                <p className="text-sm leading-7 text-muted">{pillar.copy}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {pillar.items.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2 text-xs uppercase tracking-wider text-ivory/80"
                    >
                      <Icon size={14} className="shrink-0 text-gold" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
