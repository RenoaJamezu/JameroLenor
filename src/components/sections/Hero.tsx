import HeroNor from "../../assets/images/hero/HeroNor.jpeg"
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
      {/* Left */}
      <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-1xl text-justify sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-100">
          Hi, I'm <span className="underline decoration-neutral-100">Lenor James Jamero</span>
        </h1>

        <p className="mt-4 text-base text-justify sm:text-lg text-neutral-300 max-w-2xl">
          a <span className="underline decoration-neutral-300">Full Stack Developer</span> who builds dynamic and reliable web applications. I’m passionate about turning ideas into functional digital experiences that prioritize performance, usability, and modern design.
        </p>

        <div className="flex mt-4 gap-3 items-center text-justify md:justify-start">
          <p className="text-base sm:text-lg text-neutral-200">Available for work</p>

          <div className="relative flex items-center">
            <span className="absolute inline-flex rounded-full bg-green-500 opacity-75 animate-ping h-3 w-3 sm:h-4 sm:w-4"></span>
            <span className="relative inline-flex rounded-full bg-green-500 h-3 w-3 sm:h-4 sm:w-4"></span>
          </div>
        </div>

        <div className="flex sm:flex-row mt-4 gap-3 px-1 items-center">
          <button className="w-auto text-lg text-neutral-950 bg-neutral-100 px-4 py-2 rounded-lg hover:bg-neutral-300 transition">
            My Resume
          </button>

          <a href="https://github.com/RenoaJamezu" target="_blank" className="text-neutral-100 hover:text-neutral-300">
            <FaGithub className="text-3xl sm:text-4xl" />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="w-auto md:w-1/3 flex justify-center md:justify-end items-center p-3 md:p-0">
        <div className="rounded-full border-4 border-slate-200/10 shadow-lg">
          <img
            src={HeroNor}
            alt="Portrait"
            className="w-full h-full rounded-full object-cover block"
          />
        </div>
      </div>
    </section>
  )
}
