import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0"> {/* Rata kiri di mobile, tengah di desktop */}
            <Link
              to="/"
              className="font-display text-xl font-semibold tracking-tight"
            >
              Astha<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-xs">
              Exploring UI/UX and frontend development to create simple, elegant, and user-focused digital experiences.
            </p>
          </div>

          <div className="flex flex-row gap-8 sm:gap-14 md:gap-16">
            <div className="text-left">
              <h3 className="font-medium mb-3">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-medium mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/Astha4Study" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/rheiyn._/?hl=id" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://web.facebook.com/heiyand.id?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-center items-start md:items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Astha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
