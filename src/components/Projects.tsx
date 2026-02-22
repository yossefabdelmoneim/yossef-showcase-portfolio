import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Book Fair Go",
    date: "Dec 2025 – Feb 2026",
    description:
      "Scalable backend for a Flutter mobile app serving 500,000+ users at the Cairo Book Fair. Features book/publisher search, hall/booth mapping, and a real-time emergency system that helped resolve 100+ missing child cases.",
    tech: ["NestJS", "PostgreSQL", "Prisma", "Flutter"],
    github: null,
  },
  {
    title: "Bloggy",
    date: "Sep 2025",
    description:
      "Full CRUD blog platform built with the PERN stack. RESTful API backend with a responsive React frontend for creating, reading, updating, and deleting posts.",
    tech: ["PostgreSQL", "Express.js", "React", "Node.js"],
    github: "https://github.com/yossefabdelmoneim/Bloggy",
  },
  {
    title: "Posters",
    date: "Oct – Nov 2025",
    description:
      "Full-stack e-commerce platform for browsing, searching, and purchasing posters. Built and deployed for a real client with cart management and delivery handling.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/yossefabdelmoneim/Posters",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Projects</h2>
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
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{p.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[11px] px-2.5 py-1 rounded-md">
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
