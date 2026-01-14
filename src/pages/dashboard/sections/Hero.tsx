import { FaArrowDown } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="hero" className="relative scroll-mt-20 min-h-screen px-4 md:px-50 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 bg-linear-to-br from-gray-900 to-black items-center font-mono caret-transparent py-20 md:py-0">
      <div className="space-y-6 md:space-y-10 text-center md:text-left">
        <p className="text-blue-800 font-medium text-sm md:text-base">Hello, I'm</p>
        <h1 className="text-white font-bold text-3xl md:text-6xl">Lenor James</h1>
        <div className="space-y-2">
          <p className="text-gray-400 font-medium text-justify text-sm md:text-base">I’m a Full Stack Developer passionate about building web applications. I work primarily with React, Node.js, Express, and MongoDB, and I also have experience using Laravel and PostgreSQL. I enjoy turning ideas into reliable solutions and continuously improving my skills across the full stack.</p>
          <div className="flex gap-3 items-center">
            <p className="text-gray-400 font-medium text-sm md:text-base">Available for work </p>
            <div className="flex items-center">
              <span className="absolute r-0 bg-green-500 w-2.5 h-2.5 rounded-full"></span>
              <span className="absolute r-0 bg-green-500 w-2.5 h-2.5 rounded-full animate-ping duration-300"></span>
            </div>
          </div>
          <div className="flex gap-3 justify-center md:justify-start mt-3 items-center">
            <a href="/pdfs/resume.pdf" target="_blank">
              <Button
                className="hover:bg-blue-800 shadow-sm shadow-white/20"
              >
                View Resume
              </Button>
            </a>
            <Button
              className="hover:bg-blue-800 shadow-sm shadow-white/20"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            {/* <a href="https://github.com/RenoaJamezu" target="_blank"
              className="text-2xl md:text-3xl text-white hover:text-gray-500 duration-300 transition-all"
            >
              <FaGithub />
            </a> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="/images/me-2.png"
          alt="Lenor James"
          className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full"
        />
      </div>

      {!scrolled &&
        <div className="text-gray-500 text-xs md:text-sm absolute left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce bottom-5">
          Scroll to see more
          <FaArrowDown />
        </div>
      }
    </section>
  )
}