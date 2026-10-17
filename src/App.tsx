import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import WhyMe from "./components/WhyMe";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Cta from "./components/Cta";
import Marquee from "./components/Marquee";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WhyMe />
        <Projects />
        <Achievements />
        <Cta />
        <Marquee />
        <Certifications />
      </main>
      <Footer />
    </MotionConfig>
  );
}
