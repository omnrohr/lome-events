import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Expertise from "./components/Expertise.jsx";
import Process from "./components/Process.jsx";
import WhyLome from "./components/WhyLome.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Partners from "./components/Partners.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Process />
        <WhyLome />
        <Portfolio />
        <Partners />
        <Contact />
      </main>
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold-bright backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-ink hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.6)] ${
          showTopBtn
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}
