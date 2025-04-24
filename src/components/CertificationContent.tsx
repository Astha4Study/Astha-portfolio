import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink } from "lucide-react";

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
};

const CertificationContent = ({
  certification,
}: {
  certification: Certification[];
}) => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toast = useToast();

  const handleShowMoreCertification = () => {
    toast.toast({
      title: "Coming Soon",
      description: "More certifications will be added soon!",
    });
  };

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certification.map((cert, index) => (
          <div
            key={cert.id}
            ref={index === 0 ? sectionRef : null}
            className={cn(
              "group flex flex-col h-full overflow-hidden rounded-lg border border-border transition-all duration-500 hover:shadow-md",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              {
                "transition-delay-100": index === 0,
                "transition-delay-200": index === 1,
                "transition-delay-300": index === 2,
              }
            )}
          >
            <div className="relative aspect-video w-full bg-muted overflow-hidden">
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Keep the placeholder visible if image fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">
                {cert.title}
              </h3>
              <div className="text-sm text-muted-foreground mb-2">
                {cert.issuer} • {cert.date}
              </div>
              {cert.link && (
                <div className="mt-auto pt-4">
                  <a
                    href={cert.link}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <ExternalLink className="ml-1 w-3.5 h-3.5" />
                  </a>
                </div>
              )}
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
        <button
          onClick={handleShowMoreCertification}
          className="inline-flex items-center justify-center border rounded-md border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
        >
          More Certifications
        </button>
      </div>
    </div>
  );
};

export default CertificationContent;
