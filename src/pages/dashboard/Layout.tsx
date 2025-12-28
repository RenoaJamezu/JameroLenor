import Navbar from "../../components/Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Projects";
import Skills from "./Skills";

export default function Layout() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Skills />
      <Project />
      <Contact />
    </main>
  )
}