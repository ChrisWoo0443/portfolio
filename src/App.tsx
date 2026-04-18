import "./App.css";
import { useSmoothAnchors } from "./hooks/useSmoothAnchors";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useSmoothAnchors(72);
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
