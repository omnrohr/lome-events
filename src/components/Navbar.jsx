import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why LOME" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / (windowHeight || 1)) * 100}`;
      setScrollProgress(scroll);
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-gold/20 bg-ink/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      {/* Dynamic Golden Reading Progress Line */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold via-gold-bright to-gold transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src="/images/lome-logo-cl.png"
            alt="LOME Events & Production"
            className="h-12 w-auto mix-blend-screen md:h-14"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/80 transition-colors duration-300 hover:text-gold-bright after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-shimmer hidden rounded-full border border-gold/70 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright hover:bg-gold hover:text-ink lg:inline-flex"
        >
          Request a Quote
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-bright transition-all hover:bg-gold/15 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-ink/95 px-6 py-8 backdrop-blur-xl lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ivory transition-colors hover:text-gold-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-shimmer mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
