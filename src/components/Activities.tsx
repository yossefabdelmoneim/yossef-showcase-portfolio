import { Award, Users } from "lucide-react";

export default function Activities() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-12">Certificates & Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-base font-bold">Certificates</h3>
            </div>
            <p className="text-sm text-muted-foreground">Full-stack Web Development — Udemy</p>
          </div>

          {/* Activities */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-base font-bold">Activities</h3>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Member, University Programming Club — weekly coding challenges</p>
              <p>Participated in ECPC (Egyptian Collegiate Programming Contest) qualifications</p>
              <p>Volunteer HR member at YLY organization — recruitment, training & development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
