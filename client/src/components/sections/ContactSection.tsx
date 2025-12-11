import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "asimbin8@gmail.com",
    href: "mailto:asimbin8@gmail.com",
    action: "Send Email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9103314582",
    href: "tel:+919103314582",
    action: "Call Now",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/zack613",
    href: "https://github.com/zack613",
    action: "View Profile",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tahir-aasim-",
    href: "https://linkedin.com/in/tahir-aasim-",
    action: "Connect",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card/30" data-testid="section-contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <span className="text-sm font-mono text-primary mb-2 block">// CONTACT</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently looking for Data Analyst / Data Science internship opportunities.
            Feel free to reach out if you'd like to discuss potential collaborations or opportunities.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-mono">Tapper Pattan Baramulla, Jammu & Kashmir, India</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="p-4 hover-elevate active-elevate-2 cursor-pointer"
              onClick={() => window.open(method.href, "_blank")}
              data-testid={`card-contact-${method.label.toLowerCase()}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-grow">
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {method.label}
                  </p>
                  <p className="text-sm font-medium truncate">{method.value}</p>
                </div>
                <Button variant="ghost" size="sm" className="flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Button
          size="lg"
          onClick={() => window.open("mailto:asimbin8@gmail.com", "_blank")}
          data-testid="button-send-email"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send me an Email
        </Button>
      </div>
    </section>
  );
}
