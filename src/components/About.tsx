import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { title: "Languages", skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", skills: ["React", "HTML", "CSS", "Flutter"] },
  { title: "Backend", skills: ["Node.js", "NestJS", "Express.js", "REST APIs"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "Prisma ORM"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "Swagger"] },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
        <div className="w-12 h-0.5 bg-foreground mb-8" />

        <p className="text-muted-foreground max-w-2xl mb-14 leading-relaxed">
          Junior Backend Developer and Software Engineering student with strong foundations in backend development, databases, and RESTful API design. Hands-on experience working with Node.js/NestJS, PostgreSQL, and Prisma, including contributing to a production mobile application deployed on the App Store and Google Play.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
