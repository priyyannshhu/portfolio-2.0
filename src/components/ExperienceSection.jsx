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
      className="py-24 md:py-40 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="exp-label flex items-center gap-4 mb-16 md:mb-20">
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
        <div className="exp-heading overflow-hidden mb-20 md:mb-28">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-[0.4em] gap-y-[0.2em]">
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
        <div className="exp-card grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left: role info */}
          <div
            className="lg:col-span-5 p-8 md:p-10 lg:p-12 rounded-lg"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
                Current
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Software Development Intern
            </h3>
            <p
              className="text-lg md:text-xl font-medium mb-8 md:mb-10"
              style={{ color: "var(--accent)" }}
            >
              String AI India
            </p>

            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Duration
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Jan 2026 - Present
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Location
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Remote
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Type
                </span>
                <span
                  className="text-sm md:text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Paid Internship
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded"
                  style={{
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    backgroundColor: "rgba(200, 255, 0, 0.05)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: responsibilities */}
          <div
            className="exp-details lg:col-span-7 p-8 md:p-10 lg:p-12 rounded-lg"
            style={{ backgroundColor: "var(--muted)", border: "1px solid var(--border)" }}
          >
            <h4
              className="font-mono text-xs uppercase tracking-[0.2em] mb-10 md:mb-12"
              style={{ color: "var(--accent)" }}
            >
              Key Responsibilities
            </h4>
            <div className="flex flex-col gap-6 md:gap-8">
              {responsibilities.map((resp, i) => (
                <div key={i} className="exp-detail flex items-start gap-4">
                  <span
                    className="font-mono text-xs mt-1 font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-base md:text-lg leading-relaxed md:leading-loose"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {resp}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-10 md:mt-12 text-sm md:text-base leading-relaxed md:leading-loose"
              style={{ color: "var(--muted-foreground)" }}
            >
              Selected for a paid internship position focusing on full-stack
              development and system architecture. Contributing to production
              applications and collaborating with experienced engineers.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="exp-stats grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
          {[
            { value: "2026", label: "Started" },
            { value: "Remote", label: "Work Mode" },
            { value: "Full-Stack", label: "Focus" },
            { value: "PPO", label: "Opportunity" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="exp-stat p-6 md:p-8 text-center rounded-lg"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: "var(--accent)" }}
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
