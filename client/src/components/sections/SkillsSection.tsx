import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, BarChart3, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "R (Basics)"],
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Regression", "Classification", "EDA", "Model Evaluation"],
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Data Tools",
    icon: BarChart3,
    skills: ["Excel", "Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Frameworks & Cloud",
    icon: Cloud,
    skills: ["Django", "Azure (Basics)"],
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24" data-testid="section-skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// SKILLS</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono">
            Tech Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 cursor-default group"
              data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-md ${category.bgColor}`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold font-mono">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="font-mono text-xs"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="p-6" data-testid="card-soft-skills">
            <h3 className="text-lg font-semibold font-mono mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Communication", "Problem-Solving", "Teamwork", "Adaptability", "Analytical Thinking"].map(
                (skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="font-mono text-xs"
                    data-testid={`badge-soft-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </Badge>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
