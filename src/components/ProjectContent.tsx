
import { useState } from "react";
import cn from "classnames";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

const ProjectContent = ({ project }: { project: Project[] }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toast = useToast();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleShowMoreProject = () => {
    toast.toast({
      title: "Coming Soon",
      description: "More projects will be added soon!",
    });
  };

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {project.map((project, index) => (
          <div
            key={project.id}
            ref={ref}
            className={cn(
              "group relative overflow-hidden rounded-lg border border-border transition-all duration-500 hover:shadow-md",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              {
                "transition-delay-100": index === 0,
                "transition-delay-200": index === 1,
                "transition-delay-300": index === 2,
              }
            )}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="aspect-[4/3] w-full bg-muted overflow-hidden">
              <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg
                    className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <a
          onClick={handleShowMoreProject}
          className="inline-flex items-center justify-center border rounded-md border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectContent;
