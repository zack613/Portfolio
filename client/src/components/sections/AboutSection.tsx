import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: GraduationCap, label: "Education", value: "Master's in Data Science" },
    { icon: MapPin, label: "Location", value: "Pune, India" },
    { icon: Briefcase, label: "Status", value: "Data Science Intern" },
    { icon: Calendar, label: "Graduation", value: "June 2026" },
  ];

  return (
    <section id="about" className="py-24 bg-card/30" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Graduate student in Data Science with strong skills in Python, SQL, Machine Learning, 
              and Data Visualization. I'm experienced in building predictive models, performing 
              statistical analysis, working with datasets, and developing analytical dashboards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My work demonstrates ability through hands-on academic projects and real-world ML 
              applications. Currently seeking a Data Analyst / Data Science internship to apply 
              analytical thinking, modeling skills, and problem-solving capabilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of data to drive meaningful decisions and I'm passionate 
              about uncovering insights that can make a real impact.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-4 hover-elevate active-elevate-2 cursor-default"
                  data-testid={`card-stat-${stat.label.toLowerCase()}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-sm font-semibold">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
