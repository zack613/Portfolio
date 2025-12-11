import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "MongoDB Professional Certification",
    issuer: "MongoDB",
    course: "Introduction to MongoDB",
    code: "7823264",
    link: "https://github.com/zack613/Certifications",
  },
  {
    title: "Microsoft Power BI Certification",
    issuer: "Microsoft",
    course: "Power BI for Beginners",
    code: "8440773",
    link: "https://github.com/zack613/Certifications",
  },
  {
    title: "AI and Machine Learning",
    issuer: "Online Course",
    course: "Introduction to Artificial Intelligence",
    code: "8444242",
    link: "https://github.com/zack613/Certifications",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    course: "Virtual Experience Program",
    code: null,
    link: "https://github.com/zack613/Certifications",
  },
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways",
    course: "Virtual Experience Program",
    code: null,
    link: "https://github.com/zack613/Certifications",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-card/30" data-testid="section-certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// CERTIFICATIONS</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono">
            Credentials
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col hover-elevate active-elevate-2"
              data-testid={`card-certification-${index}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold font-mono text-sm leading-tight mb-1 truncate">
                    {cert.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs font-mono">
                    {cert.issuer}
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3 flex-grow">
                {cert.course}
              </p>

              {cert.code && (
                <div className="text-xs text-muted-foreground font-mono mb-4 p-2 rounded bg-muted/50">
                  Code: {cert.code}
                </div>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="w-full mt-auto"
                onClick={() => window.open(cert.link, "_blank")}
                data-testid={`button-cert-link-${index}`}
              >
                View Certificate
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
