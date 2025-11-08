import { useParams, Link } from "react-router-dom";
import { projects, slugify } from "../../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => slugify(p.name) === slug);

  if (!project) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="text-neutral-100">Project not found.</div>
        <Link to="/" className="ml-4 text-blue-400">Back</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-linear-to-b from-slate-900 to-black bg-no-repeat bg-cover bg-fixed">
      <div className="max-w-4xl w-full bg-neutral-900/30 border border-neutral-500/40 rounded-lg p-6">
        <h1 className="text-4xl text-neutral-100 mb-2">{project.name}</h1>
        <p className="text-neutral-300 mb-4">{project.info}</p>
        <div className="text-neutral-400 mb-6">Team: {project.team}</div>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Open live project
          </a>
        ) : null}
      </div>
      <Link to="/" className="mt-6 text-neutral-300">← Back to projects</Link>
    </main>
  );
}