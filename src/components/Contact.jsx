import { useState } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

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
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
            Let’s produce your next moment.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Tell us about your event. LOME will follow up with a tailored
            production plan.
          </p>
          <ul className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
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
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[1.6rem] border border-gold/15 bg-panel p-6 md:p-8"
        >
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <p className="font-display text-3xl text-gold-bright">Thank you.</p>
              <p className="mt-3 max-w-sm text-sm text-muted">
                Your request is ready to send. If your email client did not
                open, write to Info@lomeevents.com.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                Name
                <input
                  required
                  name="name"
                  className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none focus:border-gold"
                />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none focus:border-gold"
                />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                Phone
                <input
                  required
                  name="phone"
                  className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none focus:border-gold"
                />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-gold">
                Event Type
                <select
                  required
                  name="type"
                  defaultValue=""
                  className="rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none focus:border-gold"
                >
                  <option value="" disabled>
                    Select an event type
                  </option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>
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
                  rows={5}
                  className="resize-none rounded-xl border border-gold/20 bg-ink px-4 py-3 text-sm tracking-normal text-ivory outline-none focus:border-gold"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-gold py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-gold-bright"
              >
                Request a Quote
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
