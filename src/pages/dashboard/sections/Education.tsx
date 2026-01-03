import { FaLink } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-4 md:px-50 py-20 md:py-30 flex flex-col bg-linear-to-br from-black to-gray-950 justify-center space-y-10 font-mono caret-transparent">
      <h1 className="text-xl md:text-2xl text-white">Education</h1>
      <a
        href="https://drive.google.com/file/d/1dVdhD9y5uFkHWUeJ0XwNNyYh_XVoOz3g/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col w-fit bg-primary/50 p-5 rounded-xl text-white group">
        <div className="mt-1 flex gap-2 items-center group-hover:text-blue-800">
          <p className="text-xl font-medium">2021 - 2025</p>
          <FaLink className="text-sm"/>
        </div>
        <div className="text-sm md:text-base">
          <p className="mt-1">Caraga State University - Main</p>
          <p>Bachelor of Science in Information Technology</p>
          <p>Graduated</p>
        </div>
      </a>
    </section>
  )
}