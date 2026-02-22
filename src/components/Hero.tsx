import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/me.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
              Yossef
              <br />
              Abdelmoneim
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto md:mx-0">
              Junior Backend Developer & Software Engineering student building scalable backend systems with Node.js, NestJS & PostgreSQL.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Right photo */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-border overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.06)]">
              <img
                src={profilePhoto}
                alt="Yossef Abdelmoneim"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Social icons centered */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <a
            href="https://github.com/yossefabdelmoneim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border-2 border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yossef-abdelmoneim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border-2 border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:youssefabdelmoniem11@gmail.com"
            className="p-4 rounded-full border-2 border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
