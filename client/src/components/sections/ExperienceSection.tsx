import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const achievements = [
    "Developed an end-to-end ML pipeline for underwater sound event detection and classification",
    "Processed and labeled large sets of underwater .wav files for model training and evaluation",
    "Built a sound event detection model that identifies categories such as vessel, animal, noise, and others",
    "Improved model performance by applying feature extraction and parameter tuning",
  ];

  return (
    <section id="experience" className="py-24 bg-card/30" data-testid="section-experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// EXPERIENCE</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono">
            Work History
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <Card className="p-6 sm:ml-12 relative" data-testid="card-experience">
            <div className="absolute -left-[3.25rem] top-6 w-6 h-6 rounded-full bg-primary hidden sm:flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-background" />
            </div>

            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold font-mono mb-1">Data Science Intern</h3>
                <p className="text-muted-foreground">UnderWater Sound Detection Project</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">August 2025 - Present</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="font-mono text-xs">
                <Briefcase className="w-3 h-3 mr-1" />
                Current Role
              </Badge>
              <Badge variant="outline" className="font-mono text-xs">ML Pipeline</Badge>
              <Badge variant="outline" className="font-mono text-xs">Audio Processing</Badge>
              <Badge variant="outline" className="font-mono text-xs">Classification</Badge>
            </div>

            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                  data-testid={`text-achievement-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
