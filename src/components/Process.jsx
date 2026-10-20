import { Search, Lightbulb, ClipboardList, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Discover",
    copy: "We start with the idea — audience, purpose, and the feeling the event should leave behind.",
    icon: Search,
  },
  {
    n: "02",
    title: "Create",
    copy: "Creative direction turns the brief into a visual and experiential concept.",
    icon: Lightbulb,
  },
  {
    n: "03",
    title: "Plan",
    copy: "Venue, production, suppliers, staff, marketing, logistics, and timeline — one project plan.",
    icon: ClipboardList,
  },
  {
    n: "04",
    title: "Produce",
    copy: "Technical and on-site production bring the design to life, detail by detail.",
    icon: Settings2,
  },
  {
    n: "05",
    title: "Execute",
    copy: "Show day is seamless: guests, talent, and production moving as one.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-gold/10 bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="section-kicker">Our Process</p>
        <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
          From concept to completion.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.n}
              className="relative rounded-[1.4rem] border border-gold/15 bg-panel p-6"
            >
              <span className="font-display text-3xl text-gold/70">{step.n}</span>
              <step.icon className="mt-4 text-gold" size={22} />
              <h3 className="mt-3 font-display text-xl text-ivory">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
