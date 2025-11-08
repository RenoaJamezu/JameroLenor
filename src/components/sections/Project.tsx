import ProjectBox from "../ui/ProjectBox";
import { projects } from "../../data/projects";

export default function Project() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-neutral-100 text-3xl font-medium">Projects</h1>
        <p className="text-neutral-300">here are some projects I collaborated with:</p>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {projects.map((s) => (
            <ProjectBox key={s.name} project={s} />
          ))}
      </div>
    </section>
  )
}
