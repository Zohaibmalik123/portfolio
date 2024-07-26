import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white snap-y snap-mandatory">
      <Header />

      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="about">
        <About />
      </section>

      {/* Experience  */}
      <section id="experience" className="experience">
        <Experience />
      </section>
      {/* Skills  */}
      <section id="skills" className="h-full">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="projects">
        <Projects />
      </section>
      {/* Contact */}
      <section id="contact" className="contact">
        <Contact />
      </section>
      <Footer className="footer-section" />
    </div>
  );
}

export default Home;
