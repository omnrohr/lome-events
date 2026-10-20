export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="section-kicker">Who We Are</p>
          <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
            At LOME, every event starts with an idea.
          </h2>
          <div className="gold-line my-7 w-24" />
          <p className="text-base leading-8 text-muted">
            We transform ideas into purposeful experiences through creative
            direction, strategic planning, professional production, and seamless
            execution.
          </p>
          <p className="mt-5 text-base leading-8 text-ivory/90">
            From concept to completion, we create experiences that connect,
            inspire, and leave a lasting impression.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/25" />
          <img
            src="/images/team-plan.jpg"
            alt="LOME team planning an event"
            className="relative h-[420px] w-full rounded-[1.6rem] object-cover md:h-[520px]"
          />
          <img
            src="/images/team-back.jpg"
            alt="LOME production team on site"
            className="absolute -bottom-8 -left-6 hidden h-40 w-56 rounded-2xl border border-gold/30 object-cover shadow-2xl sm:block"
          />
        </div>
      </div>
    </section>
  );
}
