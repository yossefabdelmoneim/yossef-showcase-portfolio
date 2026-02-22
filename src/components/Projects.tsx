import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Book Fair Go",
    date: "12/2025 – 02/2026",
    description:
      "Backend for a Flutter mobile app serving 500,000+ users at the Cairo International Book Fair. Real-time emergency system, hall navigation, and publisher search.",
    tech: ["NestJS", "PostgreSQL", "Prisma", "REST APIs"],
    github: null,
  },
  {
    title: "Bloggy",
    date: "09/2025",
    description:
      "Full CRUD blog website built with the PERN stack. RESTful API backend with a responsive React frontend.",
    tech: ["PostgreSQL", "Express.js", "React", "Node.js"],
    github: "https://github.com/yossefabdelmoneim/Bloggy",
  },
  {
    title: "Posters",
    date: "10/2025 – 11/2025",
    description:
      "Full-stack e-commerce platform for browsing, searching, and purchasing posters. Delivered to a real client in production.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/yossefabdelmoneim/Posters",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Projects</h2>
        <div className="w-12 h-0.5 bg-foreground mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Wrapper = p.github ? "a" : "div";
            const wrapperProps = p.github
              ? { href: p.github, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper key={p.title} {...(wrapperProps as any)}>
                <Card className="h-full hover:border-foreground/30 transition-colors cursor-pointer group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      {p.github ? (
                        <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                      ) : (
                        <ExternalLink className="w-5 h-5 text-muted-foreground/30 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{p.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px] px-2 py-0.5">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
