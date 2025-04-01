
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl md:text-2xl font-semibold tracking-tight"
        >
          Astha<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "translate-y-2 rotate-45"
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "-translate-y-2 -rotate-45"
          )} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full flex flex-col pt-20 px-6">
          <nav className="flex flex-col items-start space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for closing the menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;