import {
  Code2,
  Brain,
  Sparkles,
  Database,
  Globe,
  Cpu,
  Github,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiApachekafka,
  SiSocketdotio,
  SiApachespark,
  SiApacheairflow,
  SiApachesuperset,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiJenkins,
  SiGit,
  SiPostman,
  SiPython,
  SiGooglegemini,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiMongodb,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Building enterprise web apps with React, Next.js & Java. Contributed to Meter Data Hub & Prepaid Engine at Impresa.ai with Next.js and backend microservices.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Optimized 50+ Apache Airflow DAGs, PySpark ETL workflows, and Kafka SOA Queue middleware for Kubernetes-based enterprise data processing at scale.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Integration",
    description:
      "Built AI career coaches, code-sharing SaaS with Gemini AI, and interview simulators with face detection, speech-to-text, and adaptive quiz engines.",
  },
  {
    icon: Brain,
    title: "Cloud & DevOps",
    description:
      "Oracle Cloud Certified (Architecture, Foundations, AI). Experience with GCP, Docker, Kubernetes, Jenkins, and designing enterprise dashboards with Apache Superset & StarRocks.",
  },
];

const technicalAreas = [
  {
    category: "Frontend / Full-Stack",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    ],
  },
  {
    category: "Backend & Middleware",
    skills: [
      { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "text-white" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
      { name: "REST APIs", icon: Globe, color: "text-[#F5A623]" },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark", icon: SiApachespark, color: "text-[#E25A1C]" },
      { name: "Apache Airflow", icon: SiApacheairflow, color: "text-[#017CEE]" },
      { name: "Apache Superset", icon: SiApachesuperset, color: "text-[#20A68A]" },
      { name: "StarRocks", icon: Database, color: "text-[#0066FF]" },
      { name: "Oracle SQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "ETL Testing", icon: Cpu, color: "text-[#10B981]" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
      { name: "GCP", icon: SiGooglecloud, color: "text-[#4285F4]" },
      { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: Github, color: "text-[#c084fc]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Gemini AI", icon: SiGooglegemini, color: "text-[#4E82EE]" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
      { name: "Keras", icon: SiKeras, color: "text-[#D00000]" },
      { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
      { name: "Pandas", icon: SiPandas, color: "text-[#3880FF]" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-[#5A67D8]" },
      { name: "Relational DBs", icon: Database, color: "text-[#10B981]" },
    ],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bridging software engineering with
              <span className="font-serif italic font-normal text-white">
                {" "}
                intelligent AI solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Engineering graduate from Pandit Deendayal Energy
                University (PDEU), Gujarat, with a CGPA of 9.52/10. Currently
                working as an Associate Application Engineer at Impresa.ai, building
                enterprise-grade data engineering and cloud-native solutions for Eskom,
                South Africa's national electricity utility.
              </p>
              <p>
                At Impresa.ai, I've contributed to the Meter Data Hub (MDH) and
                Prepaid Engine — enhancing 50+ Apache Airflow DAGs, PySpark ETL
                workflows, and Kafka SOA Queue Consumer middleware. I also designed
                and delivered 17 Apache Superset dashboards using SQL and StarRocks
                for operational monitoring and business insights.
              </p>
              <p>
                Previously at Episodic Labs, I developed production-ready web
                applications, automated backend workflows with PHP & RESTful APIs,
                and integrated AI-powered features for fintech solutions. I've
                also solved 220+ LeetCode problems and earned Oracle Cloud Infrastructure
                certifications in Architecture, Foundations, and AI.
              </p>
              <p>
                I enjoy designing scalable software, building reliable data pipelines,
                and developing enterprise web applications. Open to opportunities as
                a Software Engineer, Backend Engineer, Data Engineer, or Full-Stack Engineer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to bridge traditional engineering with AI
                innovations — building scalable, intelligent products that solve
                real-world challenges with speed and dependability."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in flex flex-col justify-between"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Areas Breakdown with Colorful Brand Logos */}
        <div className="mt-20 glass p-8 rounded-3xl border border-primary/20 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Technical Areas & Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalAreas.map((area, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-sm font-semibold text-primary">
                  {area.category}
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {area.skills.map((skill, sIdx) => {
                    const IconComponent = skill.icon;
                    return (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground transition-all duration-300 group/skill cursor-default"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-3.5 h-3.5 shrink-0 ${skill.color} transition-transform group-hover/skill:scale-125`}
                          />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
