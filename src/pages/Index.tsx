import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Performances from "../components/portfolio/Performances";
import Contact from "../components/portfolio/Contact";
import LanguageSelector from "../components/portfolio/LanguageSelector";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <LanguageSelector />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="performances">
        <Performances />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
