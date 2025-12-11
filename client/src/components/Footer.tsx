import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">tahir.dev</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>using React & Tailwind</span>
          </div>

          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Tahir Aasim
          </p>
        </div>
      </div>
    </footer>
  );
}
