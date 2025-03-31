
import { cn } from "@/lib/utils";
import HeroImg from "@/images/img/Iyan.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <div className="opacity-0 animate-fade-in-delay-1 bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full inline-block text-sm">
                Portfolio
              </div>
              <h1 className="opacity-0 animate-fade-in-delay-2 section-title font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Hello, I'm <span className="text-primary">Astha</span>
              </h1>
              <p className="opacity-0 animate-fade-in-delay-3 text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-xl mt-4">
                Aspiring Frontend Developer & UI/UX Designer, passionate about crafting intuitive and visually engaging digital experiences.
              </p>
            </div>

            <div className="opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
              </a>
            </div>

            <div className="opacity-0 animate-fade-in-delay-4 flex items-center gap-6 pt-4">
              <div className="h-px bg-border flex-grow max-w-[100px]"></div>
              <div className="flex gap-4">
                <a href="https://github.com/Astha4Study" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/rheiyn._/?hl=id" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
                <a href="https://t.me/iyandabes" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 3 3 10.5l6.5 2.5L18 6 9.5 14l-.5 6 3.5-3 4 3 6-16z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <div className="opacity-90 animate-fade-in border-gradient glass overflow-hidden aspect-square w-full rounded-lg shadow-xl">
                <img
                  src={HeroImg}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
