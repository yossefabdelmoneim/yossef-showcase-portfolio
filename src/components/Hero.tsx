import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/me.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Full-Stack Developer
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
              Yossef
              <br />
              Abdelmoneim
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Junior Full-Stack Developer & Software Engineering student with strong foundations in full-stack development, databases, and RESTful API design.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium border border-border hover:bg-accent transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right photo */}
          <div className="flex-shrink-0">
            <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-border overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.06)]">
              <img
                src={profilePhoto}
                alt="Yossef Abdelmoneim"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center md:justify-start gap-6 mt-14">
          <a
            href="https://github.com/yossefabdelmoneim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yossef-abdelmoneim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:youssefabdelmoniem11@gmail.com"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
