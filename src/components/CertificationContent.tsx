import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useToast } from "@/hooks/use-toast";

type Certification = {
  id: number;
  title: string;
};

const Certification = ({
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
    <div id="certification" className="py-10 md:py-18">
      <div ref={sectionRef} className="section-container"></div>
      <div
        className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <a
          onClick={handleShowMoreCertification}
          className="inline-flex items-center justify-center border rounded-md border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
        >
          More Certifications
        </a>
      </div>
    </div>
  );
};

export default Certification;
