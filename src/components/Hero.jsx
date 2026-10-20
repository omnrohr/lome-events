export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden md:items-center"
    >
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,7,0.55)_70%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-20 pt-36 text-center md:px-8 md:pb-24">
        <img
          src="/images/logo.png"
          alt="LOME Events & Production"
          className="mb-8 h-28 w-auto mix-blend-screen drop-shadow-[0_12px_40px_rgba(201,164,91,0.25)] md:h-40"
        />
        <div className="gold-line mb-8 w-40" />
        <h1 className="font-display text-4xl leading-tight text-gold-bright sm:text-5xl md:text-6xl">
          Creating Experiences
          <span className="mt-2 block italic text-ivory">Producing Moments</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          From concept to completion, LOME transforms ideas into purposeful
          experiences through creative direction, strategic planning, and
          professional production.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-gold-bright"
          >
            Request a Quote
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-gold/70 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-bright transition hover:bg-gold/10"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
