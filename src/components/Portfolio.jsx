import { useMemo, useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const works = [
  {
    src: "/images/work-first-dance.png",
    title: "First Dance",
    tag: "Weddings",
    span: "lg:col-span-2 lg:row-span-2",
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
    span: "lg:col-span-2",
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
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const items = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.tag === filter)),
    [filter],
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % items.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, items.length]);

  return (
    <section id="portfolio" className="border-y border-gold/10 bg-ink-soft py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Selected Projects</p>
              <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl md:text-5xl">
                Work that leaves a lasting impression.
              </h2>
            </div>
            {/* Scrollable Filter Pills on Mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                    filter === f
                      ? "border-gold bg-gold text-ink shadow-[0_0_15px_rgba(201,164,91,0.4)]"
                      : "border-gold/30 text-muted hover:border-gold hover:text-gold-bright"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="mt-10 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <ScrollReveal
              key={item.src}
              variant="scale-up"
              delay={index * 60}
              className={`${
                filter === "All" ? item.span : "sm:col-span-1 lg:col-span-2"
              } min-h-[240px] sm:min-h-[260px]`}
            >
              <figure
                onClick={() => setActiveImageIndex(index)}
                className="shine-sweep group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-gold/15 bg-panel transition-all duration-500 hover:border-gold/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100" />

                <figcaption className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100">
                  <div className="flex justify-end">
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-gold-bright backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <Maximize2 size={15} />
                    </span>
                  </div>
                  <div>
                    <span className="inline-block rounded-full border border-gold/40 bg-gold/15 px-2.5 sm:px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-gold-bright backdrop-blur-sm">
                      {item.tag}
                    </span>
                    <p className="mt-1.5 sm:mt-2 font-display text-xl sm:text-2xl text-ivory">{item.title}</p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute right-4 top-4 md:right-6 md:top-6 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold-bright transition-all hover:bg-gold hover:text-ink shadow-lg"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => (prev - 1 + items.length) % items.length);
            }}
            className="absolute left-2 sm:left-4 md:left-6 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gold/30 bg-ink/80 text-gold-bright backdrop-blur-sm transition-all hover:bg-gold hover:text-ink shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-gold/30 bg-ink p-2 sm:p-3 shadow-[0_0_50px_rgba(201,164,91,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[activeImageIndex].src}
              alt={items[activeImageIndex].title}
              className="max-h-[58vh] sm:max-h-[68vh] md:max-h-[72vh] w-auto object-contain rounded-xl mx-auto"
            />
            <div className="mt-3 sm:mt-4 flex items-center justify-between px-2 sm:px-3 pb-1">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold">
                  {items[activeImageIndex].tag}
                </span>
                <h3 className="font-display text-lg sm:text-2xl text-ivory">
                  {items[activeImageIndex].title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs tracking-widest text-muted">
                {activeImageIndex + 1} / {items.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => (prev + 1) % items.length);
            }}
            className="absolute right-2 sm:right-4 md:right-6 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gold/30 bg-ink/80 text-gold-bright backdrop-blur-sm transition-all hover:bg-gold hover:text-ink shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
