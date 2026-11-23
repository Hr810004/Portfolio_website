const experiences = [
  {
    period: "Jun 2016 — Jul 2022",
    role: "CBSE Class 10 & 12 — 92.67% (PCM) · 91% Overall",
    company: "Jay Ambe International School, Bharuch",
    description:
      "Completed schooling (5th–12th grade) under CBSE Science stream. Achieved 91% overall in Class 12 PCB+CS (batch topper). Built a strong foundation in Mathematics, Physics, Computer Science, and Problem Solving.",
    technologies: ["CBSE Board", "Mathematics", "Physics", "Computer Science", "Batch Topper"],
    current: false,
  },
  {
    period: "Oct 2022 — May 2026",
    role: "B.Tech in Computer Engineering",
    company: "Pandit Deendayal Energy University (PDEU) · Gandhinagar, Gujarat",
    description:
      "Graduated with a stellar CGPA of 9.52/10 — including SGPA 10.0 in 8th, 6th, and 2nd semesters. Specializing in full-stack engineering, data engineering, cloud technologies, and AI/ML. Solved 220+ LeetCode problems. Earned Oracle Cloud Infrastructure certifications in Architecture, Foundations, and AI.",
    technologies: [
      "CGPA: 9.52",
      "SGPA 10.0 (Sem 8, 6, 2)",
      "Data Structures & Algorithms",
      "DBMS",
      "Machine Learning",
      "Full-Stack Dev",
      "220+ LeetCode",
    ],
    current: false,
  },
  {
    period: "Mar 2025 — Jul 2025 · 5 months",
    role: "Software Developer Intern",
    company: "Episodic Labs · Ahmedabad, Gujarat (Hybrid)",
    description:
      "Developed and maintained robust server-side applications using PHP, ensuring backend systems were efficient, secure, and highly scalable. Designed and managed relational databases, authored complex SQL queries, and built RESTful APIs for seamless frontend-backend integration. Collaborated with frontend teams, delivered clean, maintainable code, and consistently optimized application performance through caching strategies and backend refactoring.",
    technologies: [
      "PHP",
      "WordPress",
      "RESTful APIs",
      "SQL",
      "Relational Databases",
      "Backend Development",
    ],
    current: false,
  },
  {
    period: "Jan 2026 — Jul 2026 · 7 months",
    role: "Application Engineer Intern",
    company: "Impresa.ai (Abjayon Inc.) · Ahmedabad, Gujarat (On-site)",
    description:
      "Created cloud-native features for the Meter Data Hub (MDH) and integrated the Prepaid Engine with MDH, collaborating in a team of 7–8 engineers. Enhanced 50+ Apache Airflow DAGs, PySpark ETL workflows, and Kafka SOA Queue Consumer middleware using Python and Java for Kubernetes-based enterprise data processing. Designed and delivered 17 Apache Superset dashboards using SQL and StarRocks for Eskom Electricity Company Demo, providing operational monitoring and business insights. Implemented production features for the MDH Main UI, Authentication UI, and backend services using Next.js.",
    technologies: [
      "PySpark",
      "Apache Airflow",
      "Apache Kafka",
      "Python",
      "Java",
      "Next.js",
      "Apache Superset",
      "StarRocks",
      "Kubernetes",
      "Docker",
    ],
    current: false,
  },
  {
    period: "Jul 2026 — Present · 5 months",
    role: "Associate Application Engineer",
    company: "Impresa.ai (Abjayon Inc.) · Ahmedabad, Gujarat (Hybrid)",
    description:
      "Converted to full-time Associate Application Engineer. Continuing work on enterprise data engineering products for Eskom, South Africa's national electricity utility. Building scalable cloud-native solutions with Java, PySpark, Apache Airflow, Kafka, GCP, Jenkins, and Kubernetes. Working on ETL testing, microservices, and data pipeline architecture for production-grade enterprise systems.",
    technologies: [
      "Java",
      "PySpark",
      "Apache Airflow",
      "Apache Kafka",
      "GCP",
      "Jenkins",
      "Kubernetes",
      "ETL Testing",
      "Microservices",
      "Data Engineering",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Milestones that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              define the path.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my academic grounding and technical growth, from
            foundation schooling to enterprise data engineering and cloud-native
            software development at Impresa.ai.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
