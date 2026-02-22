import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://github.com/yossefabdelmoneim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yossef-abdelmoneim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:youssefabdelmoniem11@gmail.com"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-foreground transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Yossef Abdelmoneim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
