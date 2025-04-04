import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import AboutImg from "@/images/img/IyanSita.jpg";

const skills = [
  "UI/UX Design",
  "React.js",
  "React.ts",
  "JavaScript",
  "Tailwind CSS",
  "Figma",
  "Responsive Design",
  "Vibe Coding"
];

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-10 md:py-18 bg-secondary/50">
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
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary/20 to-white"></div>
                  <div className="h-full w-full object-cover">
                    <img
                      src={AboutImg}
                      alt=""
                    />
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
                  Designing Seamless Digital Experiences
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg">
                  I'm Astha, a passionate UI/UX designer and web developer, dedicated to crafting intuitive and visually engaging digital products.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-foreground">
                  As a self-taught designer and an Informatics Engineering student from Purwokerto, I specialize in creating user-friendly interfaces and turning concepts into functional, aesthetic web experiences. My work focuses on blending design and technology to deliver seamless, meaningful interactions.
                </p>
                <p className="text-foreground">
                  I thrive on continuous learning and innovation, always exploring new tools and techniques to enhance usability and efficiency in digital design.
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
