
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";

import ProjectContent from "@/components/ProjectContent";
import CertificationContent from "@/components/CertificationContent";

const Showroom = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "certifications">(
    "projects"
  );

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChangeTab = (tab: "projects" | "certifications") => {
    setActiveTab(tab);
  };

  const projects = [
    {
      id: 1,
      title: "Airin",
      description:
        "Airin is a system designed to assist Bumdes in managing the utilization of PAMSIMAS services.",
      tags: ["Laravel", "Bootstrap", "Tailwind CSS", "MySQL", "PHP"],
      image: "/src/images/projectImages/ProjectAirin.png",
      link: "https://airin.projekbawor.com/",
    },
    {
      id: 2,
      title: "LMS Intermedia",
      description:
        "A modern Learning Management System designed to facilitate online courses, student progress tracking, and interactive learning experiences.",
      tags: ["Laravel", "Filament", "MySQL", "PHP"],
      image: "/src/images/projectImages/ProjectLms.png",
      link: "https://lms.intermediaamikom.org",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experiences.",
      tags: ["Vite", "React", "TypeScript", "Tailwind CSS"],
      image: "/src/images/projectImages/ProjectPortfolio.png",
      link: "",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Frontend Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "December 2023",
      image: "/src/images/certifications/frontend-expert.jpg",
      link: "https://www.dicoding.com/certificates/1OP8L6GGQPQK",
    },
    {
      id: 2,
      title: "Fundamental Web Development",
      issuer: "Dicoding Indonesia", 
      date: "September 2023",
      image: "/src/images/certifications/web-fundamental.jpg",
      link: "https://www.dicoding.com/certificates/KEXL4O3J4PG2",
    },
    {
      id: 3,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "July 2023",
      image: "/src/images/certifications/javascript-basic.jpg",
      link: "https://www.dicoding.com/certificates/JMZV9GORKZN9",
    },
  ];

  return (
    <section id="showroom" className="py-10 md:py-18">
      <div ref={sectionRef} className="section-container">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full inline-block text-sm mb-4">
            My Showroom
          </div>
          <h2 className="section-title">Featured Work & Achievements</h2>
          <p className="section-subtitle">
            A showcase of my latest projects and certifications, reflecting my
            journey in software development and continuous learning.
          </p>
        </div>

        {activeTab === "projects" && <ProjectContent project={projects} />}
        {activeTab === "certifications" && (
          <CertificationContent certification={certifications} />
        )}

        <div className="flex items-center justify-center pt-8">
          <div className="inline-flex overflow-hidden rounded-full bg-primary/5">
            <button
              onClick={() => handleChangeTab("projects")}
              className={`px-4 py-2 text-primary hover:bg-primary/20 transition duration-200 ${
                activeTab === "projects" ? "bg-primary/10 font-semibold" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleChangeTab("certifications")}
              className={`px-4 py-2 text-primary hover:bg-primary/20 transition duration-200 ${
                activeTab === "certifications"
                  ? "bg-primary/10 font-semibold"
                  : ""
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;
