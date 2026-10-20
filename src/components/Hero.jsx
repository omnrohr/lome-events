import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden md:items-center"
    >
      {/* Background Image with subtle zoom on load */}
      <img
        src="/images/hero.jpg"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out ${
          mounted ? "scale-100" : "scale-105"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,7,0.7)_70%)]" />

      {/* Atmospheric Gold Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gold/15 blur-3xl animate-ambient" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-24 pt-32 text-center md:px-8 md:pb-28 md:pt-36">
        {/* Animated Logo */}
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <img
            src="/images/lome-logo-cl.png"
            alt="LOME Events & Production"
            className="mb-6 sm:mb-8 h-24 sm:h-32 md:h-40 w-auto mix-blend-screen drop-shadow-[0_12px_45px_rgba(201,164,91,0.35)] animate-float"
          />
        </div>

        {/* Dynamic Expanding Line */}
        <div
          className={`gold-line mb-6 sm:mb-8 transition-all duration-1000 delay-300 ease-out ${
            mounted ? "w-36 sm:w-48 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Headings */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-display text-3xl leading-tight text-gold-bright sm:text-5xl md:text-6xl">
            Creating Experiences
            <span className="mt-2 block italic text-ivory">Producing Moments</span>
          </h1>
          <p className="mx-auto mt-5 sm:mt-6 max-w-xl text-xs sm:text-sm leading-relaxed text-muted md:text-base">
            From concept to completion, LOME transforms ideas into purposeful
            experiences through creative direction, strategic planning, and
            professional production.
          </p>
        </div>

        {/* Interactive Buttons */}
        <div
          className={`mt-8 sm:mt-10 flex w-full max-w-xs sm:max-w-none flex-col gap-3 sm:flex-row justify-center transition-all duration-1000 delay-700 ease-out ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="btn-shimmer rounded-full bg-gold px-7 sm:px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-ink hover:bg-gold-bright text-center"
          >
            Request a Quote
          </a>
          <a
            href="#portfolio"
            className="btn-shimmer rounded-full border border-gold/70 px-7 sm:px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-bright hover:bg-gold/10 text-center"
          >
            Explore Our Work
          </a>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-gold/60 transition hover:text-gold-bright"
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
