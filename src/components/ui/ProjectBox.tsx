import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { ProjectItem } from "../../data/projects";
import { slugify } from "../../data/projects";

const ProjectBox = ({ project }: { project: ProjectItem }) => {
  const slug = slugify(project.name);

  return (
    <div className="bg-neutral-900/30 backdrop-blur-sm backdrop-saturate-150 border border-neutral-500/40 rounded-lg p-4 flex flex-col items-start min-w-[140px] sm:min-w-40 h-56 sm:h-48 shadow-sm hover:scale-105 hover:border-neutral-50 transition-transform">
      <Link to={`/projects/${slug}`} className="flex flex-col items-start gap-2 h-full w-full justify-between">
        <div className="flex w-full justify-between items-start">
          <div className="text-2xl text-neutral-100">{project.name}</div>
          <FaExternalLinkAlt className="text-neutral-50 mt-1" />
        </div>

        <div className="text-neutral-100 text-sm wrap-break-word whitespace-normal line-clamp-4">
          {project.info}
        </div>

        <div className="text-neutral-100 text-sm">© {project.team}</div>
      </Link>
    </div>
  );
}

export default ProjectBox;
