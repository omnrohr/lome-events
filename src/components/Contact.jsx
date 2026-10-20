import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const eventTypes = [
  "Corporate Events",
  "Conferences & Exhibitions",
  "Concerts & Festivals",
  "Brand Activations & Launches",
  "Weddings & Private Events",
  "Government & Institutional Events",
];

const details = [
  {
    icon: MapPin,
    label: "Location",
    value: "Amman, Jordan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0777122331 — 0798580807",
    href: "tel:+962777122331",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Info@lomeevents.com",
    href: "mailto:Info@lomeevents.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "lome.events.and.production",
    href: "https://www.instagram.com/lome.events.and.production",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-gold/10 bg-ink-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-8">
        {/* Left Column: Details */}
        <ScrollReveal variant="slide-left">
          <p className="section-kicker">Contact</p>
          <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
            Let’s produce your next moment.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Tell us about your event. LOME will follow up with a tailored
            production plan.
          </p>
          <ul className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value, href }, i) => (
              <li
                key={label}
                className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1.5"
              >
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-ivory transition hover:text-gold-bright"
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-ivory">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Right Column: Interactive Form */}
        <ScrollReveal variant="slide-right" delay={150}>
          <form
            onSubmit={onSubmit}
            className="luxury-card rounded-[1.6rem] border border-gold/15 bg-panel p-6 md:p-8"
          >
            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold-bright shadow-[0_0_30px_rgba(201,164,91,0.3)]">
                  <CheckCircle size={32} />
                </span>
                <p className="font-display text-3xl text-gold-bright">Thank you.</p>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  Your request has been received. Our team will contact you shortly with a personalized proposal.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                  Name
                  <input
                    required
                    name="name"
                    placeholder="Your name or company"
                    className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                  />
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                  />
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                  Phone
                  <input
                    required
                    name="phone"
                    placeholder="Contact number"
                    className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                  />
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                  Event Type
                  <select
                    required
                    name="type"
                    defaultValue=""
                    className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-panel text-ivory">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about date, location, guest size, and vision..."
                    className="resize-none rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none transition focus:border-gold focus:ring-1 focus:ring-gold/30"
                  />
                </label>
                <button
                  type="submit"
                  className="btn-shimmer mt-2 rounded-full bg-gold py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-ink hover:bg-gold-bright"
                >
                  Request a Quote
                </button>
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
