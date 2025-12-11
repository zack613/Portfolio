import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Data Science Graduate";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-2/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
            Available for Internships
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-mono tracking-tight"
          data-testid="text-hero-name"
        >
          Tahir Aasim
        </h1>

        <div className="h-12 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-mono">
            {">"} {displayText}
            <span
              className={`inline-block w-3 h-8 bg-primary ml-1 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Building predictive models, performing statistical analysis, and creating analytical dashboards. 
          Passionate about transforming data into actionable insights.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector("#projects");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("/attached_assets/Resume_(Tahir)_1765441672950.pdf", "_blank")}
            data-testid="button-download-resume-hero"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("https://github.com/zack613", "_blank")}
            data-testid="button-github"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("https://linkedin.com/in/tahir-aasim-", "_blank")}
            data-testid="button-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("mailto:asimbin8@gmail.com", "_blank")}
            data-testid="button-email"
          >
            <Mail className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("tel:+919103314582", "_blank")}
            data-testid="button-phone"
          >
            <Phone className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  );
}
