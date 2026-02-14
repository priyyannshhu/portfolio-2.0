import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "PHP"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firebase", "SQL"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "Java", "C"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Vercel", "Google Cloud", "Git", "GitHub"],
  },
  {
    title: "AI & APIs",
    skills: ["Gemini API", "OpenAI API", "Speech Recognition"],
  },
  {
    title: "Data",
    skills: ["Excel", "Pandas", "NumPy"],
  },
  {
    title: "Tools",
    skills: ["gTTS", "Eel", "PPT Automation"],
  },
];

export function SkillsSection() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const label = sectionRef.current.querySelector(".skills-label");
      if (label) {
        gsap.set(label, { opacity: 1, x: 0 });
        gsap.from(label, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: label,
            start: "top 85%",
          },
        });
      }

      const headingWords = sectionRef.current.querySelectorAll(".skills-heading-word");
      if (headingWords.length > 0) {
        gsap.set(headingWords, { opacity: 1, y: 0 });
        gsap.from(headingWords, {
          y: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".skills-heading",
            start: "top 85%",
          },
        });
      }

      const categories = sectionRef.current.querySelectorAll(".skill-category");
      if (categories.length > 0) {
        gsap.set(categories, { opacity: 1, y: 0 });
        gsap.from(categories, {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
          },
        });
      }

      const counts = sectionRef.current.querySelectorAll(".skills-count");
      if (counts.length > 0) {
        gsap.set(counts, { opacity: 1, y: 0 });
        gsap.from(counts, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-stats",
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 relative"
    >


      <div className="max-w-7xl mx-auto relative z-[2]">
        {/* Label */}
        <div className="skills-label flex items-center gap-4 mb-16">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            02 / Skills
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Heading */}
        <div className="skills-heading overflow-hidden mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-[0.35em]">
            {"Technical Expertise".split(" ").map((word, i) => (
              <span
                key={i}
                className="skills-heading-word inline-block"
                style={{
                  color: i === 1 ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Skills grid */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-category p-6 md:p-8 transition-all duration-500 group cursor-default"
              style={{
                backgroundColor:
                  activeCategory === index
                    ? "var(--muted)"
                    : "var(--background)",
              }}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
              data-cursor-hover
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {category.skills.length}
                </span>
              </div>

              <h3
                className="text-lg font-semibold mb-6 transition-colors duration-300 group-hover:text-[var(--accent)]"
                style={{ color: "var(--foreground)" }}
              >
                {category.title}
              </h3>

              <div className="flex flex-col gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 transition-all duration-300"
                    style={{
                      transform:
                        activeCategory === index
                          ? `translateX(${skillIndex * 2}px)`
                          : "translateX(0)",
                    }}
                  >
                    <div
                      className="w-1 h-1 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor:
                          activeCategory === index
                            ? "var(--accent)"
                            : "var(--muted-foreground)",
                      }}
                    />
                    <span
                      className="text-sm transition-colors duration-300"
                      style={{
                        color:
                          activeCategory === index
                            ? "var(--foreground)"
                            : "var(--muted-foreground)",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="skills-stats grid grid-cols-2 md:grid-cols-4 gap-px mt-px" style={{ backgroundColor: "var(--border)" }}>
          {[
            { number: "32+", label: "Total Skills" },
            { number: "8", label: "Specializations" },
            { number: "3+", label: "Years Coding" },
            { number: "15+", label: "Projects Built" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="skills-count p-6 md:p-8 text-center"
              style={{ backgroundColor: "var(--background)" }}
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {stat.number}
              </div>
              <div
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
