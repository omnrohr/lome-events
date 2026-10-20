import {
  Puzzle,
  Lightbulb,
  Camera,
  Diamond,
  TrendingUp,
  Users,
} from "lucide-react";

const reasons = [
  {
    n: "01",
    icon: Puzzle,
    title: "End-to-End Solutions",
    copy: "One team owns the event from idea to final execution.",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Creative Thinking",
    copy: "Concepts designed to connect, inspire, and stay with people.",
  },
  {
    n: "03",
    icon: Camera,
    title: "Professional Production",
    copy: "Stage, sound, lighting, LED, and décor at a premium standard.",
  },
  {
    n: "04",
    icon: Diamond,
    title: "Attention to Detail",
    copy: "Every guest touchpoint is considered — not only the main stage.",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Strong Execution",
    copy: "Seamless show-day delivery, managed as a complete project.",
  },
  {
    n: "06",
    icon: Users,
    title: "One Team, One Vision",
    copy: "Creative, production, and operations working as a single unit.",
  },
];

export default function WhyLome() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Why LOME</p>
          <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
            The difference is in how we produce the moment.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ n, icon: Icon, title, copy }) => (
            <article
              key={n}
              className="rounded-[1.4rem] border border-gold/15 bg-gradient-to-b from-panel to-ink p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon size={18} />
                </span>
                <span className="font-display text-lg text-gold/60">{n}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-ivory">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
