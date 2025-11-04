import HeroNor from "../../assets/images/hero/HeroNor.jpeg"
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-row items-center gap-12 py-12">
      {/* Left */}
      <div className="w-2/3 flex flex-col justify-center text-left px-5">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100">Hi, I'm <a className="underline decoration-neutral-100">Lenor James Jamero</a></h1>
        <p className="mt-4 text-xl text-neutral-300 max-w-2xl text-justify">
          a <a className="underline decoration-neutral-300">Full Stack Developer</a> who builds dynamic and reliable web applications. I’m passionate about turning ideas into functional digital experiences that prioritize performance, usability, and modern design.
        </p>
        <div className="flex mt-2 gap-3 items-center">
          <p className="text-lg text-neutral-200">
            Available for work
          </p>
          <div className="relative h-3 w-3">
            <div className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex mt-2 gap-4 px-1">
          <button className="text-lg text-neutral-950 bg-neutral-100 px-3 py-2 rounded-lg hover:bg-neutral-300">
            My Resume
          </button>
          <button>
            <a href="https://github.com/RenoaJamezu">
              <FaGithub className="text-neutral-100 text-4xl hover:text-neutral-300" />
            </a>
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-1/3 flex justify-end items-center px-5">
        <img
          src={HeroNor}
          alt="Portrait"
          className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-neutral-500"
        />
      </div>
    </section>
  )
}
