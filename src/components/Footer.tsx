import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactItems = [
  { icon: Mail, text: "youssefabdelmoniem11@gmail.com", href: "mailto:youssefabdelmoniem11@gmail.com" },
  { icon: Phone, text: "+20 101 655 5379", href: "tel:+201016555379" },
  { icon: Github, text: "github.com/yossefabdelmoneim", href: "https://github.com/yossefabdelmoneim" },
  { icon: Linkedin, text: "linkedin.com/in/yossef-abdelmoneim", href: "https://linkedin.com/in/yossef-abdelmoneim" },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-10 max-w-lg">
          I'm actively looking for backend or full-stack internship opportunities. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {contactItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border hover:border-foreground/30 transition-colors"
            >
              <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Yossef Abdelmoneim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
