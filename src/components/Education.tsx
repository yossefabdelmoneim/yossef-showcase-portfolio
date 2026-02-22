import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
        <div className="w-12 h-0.5 bg-foreground mb-12" />

        <div className="space-y-10">
          {/* Degree */}
          <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">B.Sc. Computers & Artificial Intelligence</h3>
            <p className="text-muted-foreground text-sm">Software Engineering — Cairo University</p>
            <p className="text-xs text-muted-foreground mb-2">10/2023 – Present | Cairo, Egypt</p>
            <p className="text-sm text-muted-foreground">GPA: <strong className="text-foreground">3.35 / 4.00</strong></p>
          </div>

          {/* Certificate */}
          <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Award className="w-3 h-3 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">Full-stack Web Development</h3>
            <p className="text-muted-foreground text-sm">Udemy Certificate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
