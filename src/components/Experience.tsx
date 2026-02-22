import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
        <div className="w-12 h-0.5 bg-foreground mb-12" />

        <div className="relative pl-8 border-l-2 border-border">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Briefcase className="w-3 h-3 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Backend Developer</h3>
            <p className="text-muted-foreground text-sm mb-1">
              Ministry of Youth and Sports — Cairo, Egypt
            </p>
            <p className="text-xs text-muted-foreground mb-4">12/2025 – 02/2026</p>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>• Developed and maintained backend services using <strong className="text-foreground">NestJS</strong>, <strong className="text-foreground">PostgreSQL</strong>, and <strong className="text-foreground">Prisma</strong> for a Flutter mobile application deployed on App Store and Google Play.</li>
              <li>• Designed and implemented RESTful APIs and authored API documentation; served as the main bridge between frontend and backend teams.</li>
              <li>• Implemented core features including book and publisher search, hall navigation support, and a real-time emergency request system (medical, security, missing child) visible to admins and volunteers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
