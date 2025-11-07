import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectItem = {
  name: string;
  info: string;
  link: string;
  team: string;
};

const ProjectBox = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="bg-neutral-900/30 backdrop-blur-sm backdrop-saturate-150 border border-neutral-500/40 rounded-lg p-4 flex flex-col items-start gap-2 min-w-[140px] sm:min-w-40 shadow-sm hover:scale-105 hover:border-neutral-50 transition-transform">
      <a href={project.link} className="flex flex-col items-start gap-2">
        <div className="flex w-full justify-between items-center">
          <div className="text-2xl text-neutral-100">{project.name}</div>
          <FaExternalLinkAlt className="text-neutral-50" />
        </div>
        <div className="text-neutral-100 text-sm">{project.info}</div>
        <div className="text-neutral-100 text-sm">© {project.team}</div>
      </a>
    </div>
  );
}

export default ProjectBox;
