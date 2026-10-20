import { Search, Lightbulb, ClipboardList, Settings2, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

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
    <section id="process" className="border-y border-gold/10 bg-ink-soft py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal variant="fade-up">
          <p className="section-kicker">Our Process</p>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl md:text-5xl">
            From concept to completion.
          </h2>
        </ScrollReveal>

        <div className="relative mt-12 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {/* Subtle journey connector line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block" />

          {steps.map((step, i) => (
            <ScrollReveal
              key={step.n}
              variant="fade-up"
              delay={i * 90}
              className={i === steps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <article className="luxury-card group relative h-full rounded-[1.4rem] border border-gold/15 bg-panel p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl sm:text-3xl text-gold/70 transition-colors duration-300 group-hover:text-gold-bright">
                    {step.n}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-ink/50 text-gold transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    <step.icon size={16} />
                  </span>
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-xl text-ivory transition-colors group-hover:text-gold-bright">
                  {step.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 text-muted">{step.copy}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
