import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-12">Education & Experience</h2>

        <div className="space-y-12">
          {/* Education */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center mt-1">
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="border-l border-border pl-6">
              <p className="text-sm text-muted-foreground mb-1">Oct 2023 – Present · Cairo, Egypt</p>
              <h3 className="text-xl font-bold mb-1">B.Sc. Computers & AI — Software Engineering</h3>
              <p className="text-muted-foreground text-sm">Cairo University</p>
              <p className="text-muted-foreground text-sm">GPA: 3.35 / 4.00</p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center mt-1">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="border-l border-border pl-6">
              <p className="text-sm text-muted-foreground mb-1">Dec 2025 – Feb 2026 · Cairo, Egypt</p>
              <h3 className="text-xl font-bold mb-1">Backend Developer</h3>
              <p className="text-muted-foreground text-sm mb-3">Ministry of Youth and Sports</p>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Developed backend services using NestJS, PostgreSQL, and Prisma for a Flutter mobile app on App Store & Google Play.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Designed RESTful APIs and authored API documentation; served as the bridge between frontend and backend teams.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  Implemented book/publisher search, hall navigation, and a real-time emergency request system.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
