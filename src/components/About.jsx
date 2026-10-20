import ScrollReveal from "./ScrollReveal.jsx";
import AnimatedCounter from "./AnimatedCounter.jsx";

const stats = [
  { value: 150, suffix: "+", label: "Events Produced" },
  { value: 100, suffix: "%", label: "Turnkey Execution" },
  { value: 25, suffix: "+", label: "Collaborative Partners" },
  { value: 6, suffix: "+", label: "Core Disciplines" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <ScrollReveal variant="slide-left" duration={800}>
            <p className="section-kicker">Who We Are</p>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl md:text-5xl">
              At LOME, every event starts with an idea.
            </h2>
            <div className="gold-line my-6 sm:my-7 w-24" />
            <p className="text-sm sm:text-base leading-7 sm:leading-8 text-muted">
              We transform ideas into purposeful experiences through creative
              direction, strategic planning, professional production, and seamless
              execution.
            </p>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-ivory/90">
              From concept to completion, we create experiences that connect,
              inspire, and leave a lasting impression.
            </p>
          </ScrollReveal>

          {/* Image Showcase */}
          <ScrollReveal variant="slide-right" duration={800} delay={150}>
            <div className="relative group">
              <div className="absolute -inset-3 rounded-[2rem] border border-gold/25 transition duration-500 group-hover:border-gold/50 group-hover:scale-[1.01]" />
              <div className="shine-sweep overflow-hidden rounded-[1.6rem]">
                <img
                  src="/images/team-plan.jpg"
                  alt="LOME team planning an event"
                  className="relative h-[340px] sm:h-[420px] w-full rounded-[1.6rem] object-cover transition duration-700 group-hover:scale-105 md:h-[500px]"
                />
              </div>
              <div className="absolute -bottom-6 left-3 md:-left-6 hidden h-36 w-48 sm:h-40 sm:w-56 overflow-hidden rounded-2xl border border-gold/40 shadow-2xl transition duration-500 hover:scale-105 sm:block shine-sweep">
                <img
                  src="/images/team-back.jpg"
                  alt="LOME production team on site"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Animated Key Metrics Banner - Responsive Grid & Clean Mobile Dividers */}
        <ScrollReveal variant="fade-up" delay={250} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 gap-y-6 gap-x-2 rounded-2xl sm:rounded-3xl border border-gold/20 bg-panel/60 p-5 sm:p-6 backdrop-blur-sm sm:grid-cols-4 md:p-8">
            {stats.map(({ value, suffix, label }, index) => (
              <div
                key={label}
                className={`flex flex-col items-center justify-center p-2 sm:p-3 text-center ${
                  index % 2 === 0 ? "border-r border-gold/15" : ""
                } sm:border-r sm:last:border-r-0`}
              >
                <div className="font-display text-2xl sm:text-3xl font-semibold text-gold-bright md:text-4xl">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
