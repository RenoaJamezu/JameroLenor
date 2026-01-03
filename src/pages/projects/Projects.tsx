import Navbar from "../../components/Navbar";
import { projects } from "../../constant/projects";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-50 gap-8 md:gap-12 bg-linear-to-br from-gray-900 to-black items-center font-mono caret-transparent py-20 md:py-30">
        <h1 className="text-xl md:text-2xl text-white">Projects</h1>
        <p className="text-sm md:text-base text-gray-500">A collection of my projects showcasing my skills and passion in creating meaningful digital experiences:</p>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {projects.map(({ title, description, src, responsive, link }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={title}
              className="group rounded-xl overflow-hidden flex flex-col text-white transition-all duration-300 hover:text-blue-800 backdrop-blur-xl bg-primary/50 shadow-sm shadow-white/20">
              <div className="overflow-hidden aspect-video">
                <img
                  src={src}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-5 space-y-3 flex flex-col grow">
                <p className="text-blue-800 text-sm">{responsive}</p>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-gray-500 text-sm grow">{description}</p>
                <p className="font-medium mt-4">
                  View Project →
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}