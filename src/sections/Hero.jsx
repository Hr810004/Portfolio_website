import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiApachespark,
  SiApacheairflow,
  SiApachekafka,
  SiApachesuperset,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiSocketdotio,
  SiGit,
  SiPostman,
  SiPhp,
  SiGooglegemini,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import harshProfileImage from "@/assets/harsh_image.jpeg";

const skills = [
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "PySpark", icon: SiApachespark, color: "text-[#E25A1C]" },
  { name: "Apache Airflow", icon: SiApacheairflow, color: "text-[#017CEE]" },
  { name: "Apache Kafka", icon: SiApachekafka, color: "text-white" },
  { name: "Apache Superset", icon: SiApachesuperset, color: "text-[#20A68A]" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "GCP", icon: SiGooglecloud, color: "text-[#4285F4]" },
  { name: "SQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
  { name: "Gemini AI", icon: SiGooglegemini, color: "text-[#4E82EE]" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Hr810004",
    label: "GitHub",
    hoverClasses:
      "hover:text-[#c084fc] hover:border-[#a855f7] hover:bg-[#a855f7]/15 hover:shadow-[0_0_18px_rgba(168,85,247,0.45)]",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harsh810004/",
    label: "LinkedIn",
    hoverClasses:
      "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]",
  },
  {
    icon: Mail,
    href: "mailto:hr810004@gmail.com",
    label: "Email",
    hoverClasses:
      "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/15 hover:shadow-[0_0_18px_rgba(234,67,53,0.45)]",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Associate Application Engineer @ Impresa.ai | Data Engineer | Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">intelligent</span>
                <br />
                solutions with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Harsh Rana — Associate Application Engineer at Impresa.ai,
                building enterprise data engineering solutions for utility companies.
                Final-year B.Tech CSE student at PDEU with CGPA 9.52, passionate about
                full-stack development, data engineering, and scalable cloud-native systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href="/Harsh resume 2026-27.pdf"
                download="Harsh resume 2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <Download className="w-5 h-5" /> Download CV
                </Button>
              </a>
              <a href="#projects">
                <AnimatedBorderButton>
                  Explore Projects
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links with Authentic Brand Hover Colors */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className={`p-2.5 rounded-full glass text-muted-foreground border border-border/50 transition-all duration-300 hover:scale-110 ${social.hoverClasses}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={harshProfileImage}
                  alt="Harshkumar Rana"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to Opportunities
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">9.52</div>
                  <div className="text-xs font-medium text-white tracking-wide">
                    CGPA · PDEU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section with Authentic Colorful Logos */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <div key={idx} className="flex-shrink-0 px-6 py-3">
                    <span className="inline-flex items-center gap-2 text-lg font-semibold text-muted-foreground/80 hover:text-foreground transition-colors group cursor-default">
                      {IconComponent && (
                        <IconComponent
                          className={`w-5 h-5 shrink-0 ${skill.color} transition-transform group-hover:scale-125`}
                        />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
