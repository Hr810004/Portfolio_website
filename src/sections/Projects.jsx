import {
  ArrowUpRight,
  Github,
  Brain,
  Globe,
  Sparkles,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiGooglegemini,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPython,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiExpress,
  SiPrisma,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiVite,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Snippy — AI-Powered Code Sharing SaaS",
    period: "Full-Stack SaaS & Generative AI",
    description:
      "Intelligent developer SaaS supporting real-time collaborative code editing using Yjs CRDTs over Socket.IO, inline comments, and 50-version history. Integrated Google Gemini AI for automated code quality scoring, documentation generation, and cross-language translation with QR sharing.",
    image: "/projects/snippy.png",
    imageHeight: "h-64", // Taller preview for staircase effect
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Gemini AI", icon: SiGooglegemini, color: "text-[#4E82EE]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
    ],
    link: "https://snippet-master-one.vercel.app",
    github: "https://github.com/Hr810004/Snippet_Master",
  },
  {
    title: "TeamSync — B2B Collaboration & Project Platform",
    period: "Full-Stack & Real-Time Systems",
    description:
      "Enterprise project management platform with multi-tenant workspaces, granular RBAC (Admin, Manager, Member, Viewer), and live task updates and notifications with Socket.IO. Secured with Google OAuth and JWT, plus interactive analytics dashboards.",
    image: "/projects/teamsync.png",
    imageHeight: "h-48", // Compact height for staircase staggering
    tags: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "OAuth & JWT", icon: SiJsonwebtokens, color: "text-[#FB542B]" },
    ],
    link: "https://team-sync-harsh810.vercel.app",
    github: "https://github.com/Hr810004/TeamSync",
  },
  {
    title: "SensAI — AI-Powered Career Coach",
    period: "Full-Stack & Generative AI",
    description:
      "AI career coach offering skill gap analysis, resume scoring, role-based upskilling, and JD matching. Includes form-to-LaTeX resume builder, adaptive quizzes, AI cover letters, and an interactive interview simulator with face detection and speech-to-text.",
    image: "/projects/Sensai.png",
    imageHeight: "h-72", // Tallest featured card
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Gemini AI", icon: SiGooglegemini, color: "text-[#4E82EE]" },
      { name: "Prisma", icon: SiPrisma, color: "text-[#5A67D8]" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
    link: "https://sens-ai-five.vercel.app",
    github: "https://github.com/Hr810004/SensAI",
  },
  {
    title: "HirePrep — AI Mock Interview Platform",
    period: "TypeScript & Generative AI",
    description:
      "Interactive technical interview preparation platform powered by AI. Conducts real-time role-specific mock interviews, adaptive coding challenges, response evaluation, and comprehensive candidate readiness scoring.",
    image: "/projects/hireprep.jpg",
    imageHeight: "h-52",
    tags: [
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "Gemini AI", icon: SiGooglegemini, color: "text-[#4E82EE]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
    link: null,
    github: "https://github.com/Hr810004/HirePrep",
  },
  {
    title: "Taskfyer — Task Management & Productivity App",
    period: "Full-Stack MERN",
    description:
      "MERN stack task management app built to organize projects, set deadlines, and track milestones with intuitive priority sorting, real-time status updates, and secure user authentication.",
    image: "/projects/taskfyer.png",
    imageHeight: "h-56",
    tags: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "Express", icon: SiExpress, color: "text-white" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    ],
    link: "https://taskfyer-tau.vercel.app",
    github: "https://github.com/Hr810004/Taskfyer",
  },
  {
    title: "Harsh810.io — Portfolio & Showcase",
    period: "React 19 & Tailwind CSS v4",
    description:
      "Personal portfolio highlighting production engineering work at Impresa.ai, data pipelines, academic achievements at PDEU (9.52 CGPA), and full-stack projects with verified Web3Forms email integration.",
    image: "/projects/portfolio.png",
    imageHeight: "h-44",
    tags: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Vite", icon: SiVite, color: "text-[#9333EA]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    ],
    link: "https://harsh810.vercel.app/",
    github: "https://github.com/Hr810004/Portfolio_website",
  },
  {
    title: "DigiLibrary — DBMS Library System",
    period: "Full-Stack PHP & DBMS",
    description:
      "DBMS-based library management platform with separate student and admin portals. Streamlines cataloging, book issuance, return tracking, and penalty calculations using relational MySQL schemas.",
    image: "/projects/digilibrary.png",
    imageHeight: "h-64",
    tags: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    ],
    link: null,
    github: "https://github.com/Hr810004/Digilibrary_DBMS_project",
  },
  {
    title: "CreditCard Fraud Detection — ML System",
    period: "Machine Learning & Python",
    description:
      "Machine learning classification system designed to detect fraudulent credit card transactions in real-time. Features extensive exploratory data analysis, class imbalance handling with SMOTE, and high-precision anomaly detection.",
    image: "/projects/credit_card_fraud.jpg",
    imageHeight: "h-48",
    tags: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
      { name: "Pandas", icon: SiPandas, color: "text-[#3880FF]" },
      { name: "NumPy", icon: SiNumpy, color: "text-[#4DABCF]" },
    ],
    link: null,
    github: "https://github.com/Hr810004/CreditCard-Fraud-Detection",
  },
  {
    title: "GrowthGenius — Digital Agency Platform",
    period: "Full-Stack Web Development",
    description:
      "Digital agency web application featuring dynamic service showcases, client blogs, portfolio archives, and interactive inquiry forms with optimized relational backend queries.",
    image: "/projects/growthgenius.png",
    imageHeight: "h-52",
    tags: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    ],
    link: null,
    github: "https://github.com/Hr810004/Digital_Marketing_Agency",
  },
  {
    title: "MoviEra — Movie Ticket Booking System",
    period: "Full-Stack PHP & MySQL",
    description:
      "Web-based movie ticket booking application allowing users to browse theater showtimes, choose seats, and book tickets online, backed by an admin control panel for scheduling and inventory.",
    image: "/projects/MoviEra.png",
    imageHeight: "h-60",
    tags: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    ],
    link: null,
    github: "https://github.com/Hr810004/MoviEra",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent full-stack, Generative AI, and data
            engineering projects designed to solve practical, real-world problems.
          </p>
        </div>

        {/* Pinterest-style Staircase / Asymmetric Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in border border-border/50 hover:border-primary/50 transition-all duration-300 break-inside-avoid block w-full hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(32,178,166,0.15)]"
              style={{ animationDelay: `${(idx + 1) * 80}ms` }}
            >
              {/* Image with Variable Natural Height for Staircase Effect */}
              <div className={`relative overflow-hidden ${project.imageHeight || "h-56"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/40
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Source on GitHub"
                      className="p-3 rounded-full glass hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] transition-all hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Project"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-primary font-medium">
                  <span>{project.period}</span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span>Visit Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <div className="flex items-start justify-between gap-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title flex items-center gap-1.5"
                    >
                      <h3 className="text-lg font-semibold group-hover/title:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title flex items-center gap-1.5"
                    >
                      <h3 className="text-lg font-semibold group-hover/title:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags with Brand Colors */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                  {project.tags.map((tag, tagIdx) => {
                    const IconComponent = tag.icon;
                    return (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground group-hover:border-primary/30 hover:border-primary/60 hover:text-foreground transition-all duration-300"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-3.5 h-3.5 shrink-0 ${tag.color || "text-primary"}`}
                          />
                        )}
                        <span>{tag.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Hr810004?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View More on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
