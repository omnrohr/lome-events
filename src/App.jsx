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
    </div>
  );
}
