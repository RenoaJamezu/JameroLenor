import { DiPostgresql } from "react-icons/di"
import { FaLaravel, FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si"

export default function Skills() {
  const tech = [
    { tech: "React", icon: <FaReact /> },
    { tech: "Express", icon: <SiExpress /> },
    { tech: "MongoDB", icon: <SiMongodb /> },
    { tech: "Node.js", icon: <FaNodeJs /> },
    { tech: "TailwindCSS", icon: <SiTailwindcss /> },
    { tech: "Laravel", icon: <FaLaravel /> },
    { tech: "MySQL", icon: <SiMysql /> },
    { tech: "PostgreSQL", icon: <DiPostgresql /> },
  ]
  return (
    <section id="skills" className="scroll-mt-20 px-4 md:px-50 py-10 md:py-30 flex flex-col bg-black justify-center space-y-10 font-mono">
      <h1 className="text-4xl text-white">Skills</h1>
      <p className="text-gray-500">Here are some technologies I worked with:</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {tech.map(({ tech, icon }) => (
          <div key={tech} className="border rounded-xl text-gray-500 px-3 py-1 flex space-x-2 items-center justify-center text-xl transition-all duration-300 hover:text-white">
            <h1>{tech}</h1>
            {icon}
          </div>
        ))}
      </div>
    </section>
  )
}