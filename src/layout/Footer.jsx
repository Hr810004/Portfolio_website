import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Hr810004",
    label: "GitHub",
    hoverClasses:
      "hover:text-[#c084fc] hover:border-[#a855f7] hover:bg-[#a855f7]/15 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harsh810004/",
    label: "LinkedIn",
    hoverClasses:
      "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]",
  },
  {
    icon: Mail,
    href: "mailto:hr810004@gmail.com",
    label: "Email",
    hoverClasses:
      "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/15 hover:shadow-[0_0_15px_rgba(234,67,53,0.4)]",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              HARSH<span className="text-primary">810.io</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Harshkumar Rana. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links with Authentic Hover Colors */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className={`p-2.5 rounded-full glass border border-border/50 text-muted-foreground transition-all duration-300 hover:scale-110 ${social.hoverClasses}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
