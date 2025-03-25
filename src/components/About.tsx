
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const skills = [
  "UI/UX Design",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Responsive Design",
  "Next.js",
];

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative">
              <div className={cn(
                "transition-all duration-700 delay-100",
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}>
                <div className="border-gradient glass overflow-hidden aspect-[4/5] w-full rounded-lg shadow-xl">
                  <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-primary/20 to-white"></div>
                  <div className="h-full w-full object-cover">
                    <svg
                      className="w-full h-full text-muted opacity-20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className={cn(
              "space-y-6 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <div>
                <div className="bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full inline-block text-sm mb-4">
                  About Me
                </div>
                <h2 className="section-title">
                  Crafting digital experiences with precision
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg">
                  I'm a designer and developer passionate about creating intuitive and engaging digital products that solve real-world problems.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground">
                  With over 5 years of experience in the field, I specialize in creating user-centered designs and bringing them to life with clean, efficient code. My approach blends aesthetic beauty with functional simplicity, resulting in products that are both visually appealing and easy to use.
                </p>
                <p className="text-foreground">
                  I believe in the power of collaboration and continuous learning, always seeking to expand my knowledge and skills to deliver the best possible solutions.
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-background px-4 py-1.5 rounded-full text-sm border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
