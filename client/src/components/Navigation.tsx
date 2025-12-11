import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navigation-header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 font-mono text-lg font-semibold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-logo"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span>tahir.dev</span>
          </button>

          <div className="hidden md:flex items-center gap-1 flex-wrap">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="ml-2"
              onClick={() => window.open("/attached_assets/Resume_(Tahir)_1765441672950.pdf", "_blank")}
              data-testid="button-download-resume"
            >
              Resume
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground text-left hover-elevate active-elevate-2 rounded-md"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                className="mx-4 mt-2"
                onClick={() => window.open("/attached_assets/Resume_(Tahir)_1765441672950.pdf", "_blank")}
                data-testid="button-mobile-resume"
              >
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
