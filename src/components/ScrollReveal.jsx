import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up", // "fade-up", "fade-in", "scale-up", "slide-left", "slide-right"
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const variantStyles = {
    "fade-up": {
      initial: "opacity-0 translate-y-10",
      visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
      initial: "opacity-0",
      visible: "opacity-100",
    },
    "scale-up": {
      initial: "opacity-0 scale-95 translate-y-6",
      visible: "opacity-100 scale-100 translate-y-0",
    },
    "slide-left": {
      initial: "opacity-0 -translate-x-10",
      visible: "opacity-100 translate-x-0",
    },
    "slide-right": {
      initial: "opacity-0 translate-x-10",
      visible: "opacity-100 translate-x-0",
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles["fade-up"];

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-[transform,opacity] ${
        isVisible ? currentVariant.visible : currentVariant.initial
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
