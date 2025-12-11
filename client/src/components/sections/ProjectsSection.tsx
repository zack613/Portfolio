import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Web Scraping & Regression Modeling",
    description:
      "Scraped hourly temperature data, cleaned missing values, and prepared datasets. Generated prediction plots, residual diagnostics, and a final performance report.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "MAE", value: "0.72" },
      { label: "RMSE", value: "1.01" },
      { label: "R²", value: "0.65" },
      { label: "Accuracy", value: "94.64%" },
    ],
    github: "https://github.com/zack613/web-Scrapping",
    featured: true,
  },
  {
    title: "IPL Analysis Report (2008-2018)",
    description:
      "In-depth analysis of IPL data covering team performances, player statistics, match outcomes, and key trends. Demonstrates how data-driven insights can improve strategies and decision-making.",
    technologies: ["Excel", "Data Analysis", "Statistical Modeling"],
    metrics: [
      { label: "Years Covered", value: "10" },
      { label: "Data Points", value: "1000+" },
    ],
    github: "https://github.com/zack613/IPL-Analysis",
    featured: false,
  },
  {
    title: "Building Heating Load Prediction",
    description:
      "Predicted Heating Load using UCI dataset. Performed EDA, preprocessing, scaling, outlier detection, and feature selection. Built and trained a Linear Regression model with 80/20 split.",
    technologies: ["Python", "Linear Regression", "EDA", "Feature Selection"],
    metrics: [
      { label: "R²", value: "0.911" },
      { label: "MAE", value: "2.17" },
      { label: "RMSE", value: "3.04" },
    ],
    github: "https://github.com/zack613/Machine-learning",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24" data-testid="section-projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// PROJECTS</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 flex flex-col hover-elevate active-elevate-2 group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-lg font-semibold font-mono leading-tight">
                  {project.title}
                </h3>
                {project.featured && (
                  <Badge variant="default" className="flex-shrink-0 text-xs">
                    Featured
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-md bg-muted/50">
                  {project.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <p className="text-xs text-muted-foreground font-mono uppercase">
                        {metric.label}
                      </p>
                      <p className="text-sm font-semibold font-mono text-primary">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, tIndex) => (
                  <Badge
                    key={tIndex}
                    variant="outline"
                    className="text-xs font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full mt-auto"
                onClick={() => window.open(project.github, "_blank")}
                data-testid={`button-project-github-${index}`}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
