import Navbar from "../../components/Navbar";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Project from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Layout() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </main>
  )
}