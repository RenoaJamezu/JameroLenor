import { projects } from "../../../constant/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 md:px-50 py-20 md:py-30 flex flex-col bg-black justify-center space-y-10 font-mono caret-transparent">
      <h1 className="text-xl md:text-2xl text-white">Featured Projects</h1>
      <p className="text-sm md:text-base text-gray-500">A collection of my projects showcasing my skills and passion in creating meaningful digital experiences:</p>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map(({ title, description, src, responsive, link }) => (
          <a
            href={link}
            target="_blank"
            key={title}
            className="group rounded-xl overflow-hidden flex flex-col text-white transition-all duration-300 hover:text-blue-800 backdrop-blur-xl bg-primary/50 shadow-sm shadow-white/20">
            <div className="overflow-hidden aspect-video">
              <img
                src={src}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5 space-y-3 flex flex-col grow">
              <p className="text-blue-800 text-xs">{responsive}</p>
              <h1 className="text-lg font-semibold">{title}</h1>
              <p className="text-gray-500 text-xs grow">{description}</p>
              <p className="font-medium mt-4 text-sm">
                View Project →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}