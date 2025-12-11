import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Masters of Data Science",
    institution: "Christ Deemed to be University",
    location: "Lavasa, Pune",
    period: "August 2024 - June 2026",
    gpa: "GPA: 2.4/4.0",
    coursework: [
      "Foundation of Statistics",
      "Practical and Theoretical Languages",
      "Learning Algorithms for Predictive Modeling",
    ],
    current: true,
  },
  {
    degree: "BCA in Computer Science",
    institution: "University of Kashmir",
    location: "Kashmir",
    period: "March 2020 - November 2023",
    gpa: "CGPA: 7.2/10",
    coursework: [
      "Computer Architecture",
      "Comparison of Learning Algorithms",
      "Computational Theory",
      "System Languages",
    ],
    current: false,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24" data-testid="section-education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// EDUCATION</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono">
            Academic Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2"
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-mono mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
                {edu.current && (
                  <Badge variant="default" className="text-xs flex-shrink-0">
                    Current
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{edu.period}</span>
                </div>
                <Badge variant="secondary" className="font-mono text-xs">
                  {edu.gpa}
                </Badge>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Relevant Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIndex) => (
                    <Badge key={cIndex} variant="outline" className="text-xs font-mono">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
