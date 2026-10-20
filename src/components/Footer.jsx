export default function Footer() {
  return (
    <footer className="border-t border-gold/15 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <img src="/images/lome-logo-cl.png" alt="LOME" className="h-12 w-auto mix-blend-screen" />
        <p className="text-center text-xs tracking-[0.16em] text-muted uppercase">
          © {new Date().getFullYear()} LOME Events & Production. All rights reserved.
        </p>
        <a
          href="https://www.instagram.com/lome.events.and.production"
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.2em] text-gold-bright hover:text-gold"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
