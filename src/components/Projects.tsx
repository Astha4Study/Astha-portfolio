import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { link } from "fs";

const projects = [
  {
    id: 1,
    title: "Airin",
    description: "Airin is a system designed to assist Bumdes in managing the utilization of PAMSIMAS services.",
    tags: ["Laravel", "Bootstrap", "Tailwind CSS", "MySQL", "PHP"],
    image: "src/images/projectImages/ProjectAirin.png",
    link: "https://airin.projekbawor.com/",
  },
  {
    id: 2,
    title: "LMS Intermedia",
    description: "A modern Learning Management System designed to facilitate online courses, student progress tracking, and interactive learning experiences.",
    tags: ["Laravel", "Filament", "MySQL", "PHP"],
    image: "src/images/projectImages/ProjectLms.png",
    link: "https://lms.intermediaamikom.org",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and experiences.",
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    image: "src/images/projectImages/ProjectPortfolio.png",
    link: "",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleShowAlert = () => {
    setShowAlert(true);
    setFadeOut(false);

    setTimeout(() => setFadeOut(true), 2500);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section id="projects" className="py-10 md:py-18">

      {/* Alert at the top */}
      {showAlert && (
        <div
          className={cn(
            "fixed top-0 left-0 w-full flex justify-center z-50",
            fadeOut ? "animate-slide-up" : "animate-slide-down"
          )}
        >
          <Alert className="w-11/12 max-w-md mt-4" variant="default">
            <AlertTitle>Coming Soon!</AlertTitle>
            <AlertDescription>
              More projects will be added soon. Stay tuned!
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div ref={sectionRef} className="section-container">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full inline-block text-sm mb-4">
            My Projects
          </div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A showcase of my latest projects, reflecting my journey in frontend development, backend development, And UI/UX design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
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
            onClick={handleShowAlert}
            className="inline-flex items-center justify-center border rounded-md border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
