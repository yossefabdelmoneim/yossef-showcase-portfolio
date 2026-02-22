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
        <h2 className="text-4xl font-bold tracking-tight mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Software Engineering student at Cairo University with hands-on experience building production-grade full-stack applications. I've contributed to apps deployed on the App Store and Google Play, working with NestJS, PostgreSQL, Prisma, and React.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on designing clean APIs, optimizing database schemas, and bridging the gap between frontend and backend teams. Currently seeking full-stack internship opportunities.
            </p>
          </div>

          {/* Right - skills */}
          <div className="space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-3 py-1.5 rounded-md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
