import { useMemo, useState } from "react";

const works = [
  {
    src: "/images/work-first-dance.png",
    title: "First Dance",
    tag: "Weddings",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/work-couple.png",
    title: "Ballroom Reception",
    tag: "Weddings",
    span: "",
  },
  {
    src: "/images/work-sunset.png",
    title: "Sunset Portrait",
    tag: "Weddings",
    span: "",
  },
  {
    src: "/images/work-banquet.jpg",
    title: "Crystal Banquet",
    tag: "Private Events",
    span: "md:col-span-2",
  },
  {
    src: "/images/work-live.png",
    title: "Live Entertainment",
    tag: "Entertainment",
    span: "",
  },
  {
    src: "/images/work-dinner.png",
    title: "Evening Dinner",
    tag: "Private Events",
    span: "",
  },
  {
    src: "/images/work-aisle.png",
    title: "Terrace Ceremony",
    tag: "Weddings",
    span: "",
  },
  {
    src: "/images/work-stationery.png",
    title: "Guest Stationery",
    tag: "Design",
    span: "",
  },
];

const filters = ["All", "Weddings", "Private Events", "Entertainment", "Design"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.tag === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="border-y border-gold/10 bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Selected Projects</p>
            <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
              Work that leaves a lasting impression.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition ${
                  filter === f
                    ? "border-gold bg-gold text-ink"
                    : "border-gold/30 text-muted hover:border-gold hover:text-gold-bright"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {items.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl ${filter === "All" ? item.span : "md:col-span-2"} min-h-[240px]`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                    {item.tag}
                  </p>
                  <p className="font-display text-xl text-ivory">{item.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
