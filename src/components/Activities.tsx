import { Users, Code, Heart } from "lucide-react";

const activities = [
  { icon: Code, text: "Member, University Programming Club — weekly coding challenges" },
  { icon: Code, text: "Participated in Egyptian Collegiate Programming Contest (ECPC) qualifications" },
  { icon: Heart, text: "Volunteer HR Member — YLY Organization (recruitment, training & development)" },
];

export default function Activities() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Extracurricular</h2>
        <div className="w-12 h-0.5 bg-foreground mb-12" />

        <div className="space-y-4">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-4">
              <a.icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
