import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".exp-label", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-label",
          start: "top 85%",
        },
      });

      gsap.from(".exp-heading-word", {
        y: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".exp-heading",
          start: "top 85%",
        },
      });

      gsap.from(".exp-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-card",
          start: "top 80%",
        },
      });

      gsap.from(".exp-detail", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-details",
          start: "top 80%",
        },
      });

      gsap.from(".exp-stat", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-stats",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const responsibilities = [
    "Developing and maintaining web applications using modern frameworks",
    "Contributing to system architecture and technical design decisions",
    "Collaborating with cross-functional teams on product features",
    "Participating in code reviews and ensuring code quality standards",
  ];

  const technologies = ["React.js", "Node.js", "REST APIs", "System Design"];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="exp-label flex items-center gap-4 mb-16">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            03 / Experience
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Heading */}
        <div className="exp-heading overflow-hidden mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-[0.35em]">
            {"Work Experience".split(" ").map((word, i) => (
              <span
                key={i}
                className="exp-heading-word inline-block"
                style={{
                  color: i === 0 ? "var(--foreground)" : "var(--accent)",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Experience card */}
        <div className="exp-card grid grid-cols-1 lg:grid-cols-12 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {/* Left: role info */}
          <div
            className="lg:col-span-5 p-8 md:p-12"
            style={{ backgroundColor: "var(--background)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
                Current
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Software Development Intern
            </h3>
            <p
              className="text-lg font-medium mb-6"
              style={{ color: "var(--accent)" }}
            >
              String AI India
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Duration
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  Jan 2026 - Present
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Location
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  Remote
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Type
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  Paid Internship
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: responsibilities */}
          <div
            className="exp-details lg:col-span-7 p-8 md:p-12"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h4
              className="font-mono text-xs uppercase tracking-[0.2em] mb-8"
              style={{ color: "var(--accent)" }}
            >
              Key Responsibilities
            </h4>
            <div className="flex flex-col gap-6">
              {responsibilities.map((resp, i) => (
                <div key={i} className="exp-detail flex items-start gap-4">
                  <span
                    className="font-mono text-xs mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {resp}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-10 text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Selected for a paid internship position focusing on full-stack
              development and system architecture. Contributing to production
              applications and collaborating with experienced engineers.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="exp-stats grid grid-cols-2 md:grid-cols-4 gap-px mt-px" style={{ backgroundColor: "var(--border)" }}>
          {[
            { value: "2026", label: "Started" },
            { value: "Remote", label: "Work Mode" },
            { value: "Full-Stack", label: "Focus" },
            { value: "PPO", label: "Opportunity" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="exp-stat p-6 text-center"
              style={{ backgroundColor: "var(--background)" }}
            >
              <div
                className="text-lg md:text-xl font-bold mb-1"
                style={{ color: "var(--foreground)" }}
              >
                {stat.value}
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
