import { useState } from "react";
import { Button } from "./ui/button";
import ImageModal from "./ImageModal";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    src: string | string[];
    responsive: string;
    link: string;
    tech: string | string[];
    feat: string | string[];
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const images = Array.isArray(project.src) ? project.src : [project.src];
  const technologies = Array.isArray(project.tech) ? project.tech : [project.tech];
  const features = Array.isArray(project.feat) ? project.feat : [project.feat];
  const [selectedImage, setSelectedImage] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 font-mono p-4">
        <div className="w-full h-auto max-w-6xl bg-primary rounded-xl flex flex-col md:flex-row fade-zoom-in max-h-[90vh] overflow-y-auto md:overflow-y-visible">
          
          <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-4 md:p-6 space-y-3">
            <div className="w-full aspect-video md:aspect-auto md:h-80 rounded-lg overflow-hidden bg-gray-900">
              <img
                src={images[selectedImage]}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                {images.map((src, index) => (
                  <button
                    key={index}
                    onClick={() => setEnlargedImage(src)}
                    className={`h-14 w-16 md:h-16 md:w-20 rounded-md shrink-0 overflow-hidden transition-all cursor-pointer ${
                      selectedImage === index ? "ring-2 ring-blue-500" : "opacity-60 hover:opacity-100"
                    }`}
                    onMouseEnter={() => setSelectedImage(index)}
                  >
                    <img
                      src={src}
                      alt={`${project.title} ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-4 md:px-8 py-6 md:my-auto space-y-4 md:space-y-5">
            <div className="flex">
              <p className="text-blue-800 text-xs px-3 py-1 bg-blue-800/10 rounded-full">
                {project.responsive}
              </p>
            </div>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-white">{project.title}</h1>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{project.description}</p>

            <div className="space-y-2 md:space-y-3">
              <h2 className="font-semibold text-white text-sm md:text-base">Technologies:</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="text-blue-800 text-xs px-3 py-1 bg-blue-800/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <h2 className="font-semibold text-white text-sm md:text-base">Features:</h2>
              <div className="flex flex-wrap gap-2">
                {features.map((tech) => (
                  <span key={tech} className="text-blue-800 text-xs px-3 py-1 bg-blue-800/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 md:pt-2">
              <Button
                variant={"secondary"}
                className="w-full text-sm md:text-base"
                onClick={() => window.open(project.link, "_blank")}
              >
                Visit live site
              </Button>
              <Button
                variant={"secondary"}
                className="w-full text-sm md:text-base"
                onClick={onClose}
              >
                Close project
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {enlargedImage && (
        <ImageModal
          src={enlargedImage}
          alt={project.title}
          onClose={() => setEnlargedImage(null)}
        />
      )}
    </>
  );
}