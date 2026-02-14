import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: 1,
    title: "SPARKATHON",
    detail: "AI-Driven Personalized Medicine & Smart Agriculture",
    position: "1st Place Winners",
    year: "2025",
    institution: "Buddha Innovation Council",
    description:
      "Won first place with an integrated platform combining DNA sequencing, AI/ML predictive models, and IoT for personalized healthcare and precision farming.",
  },
  {
    id: 2,
    title: "techYuva 10.0",
    detail: "Innovative Model Presentation Competition",
    position: "1st Place Winner",
    year: "2025",
    institution: "Buddha Institute of Technology",
    description:
      "Won first place in innovative model presentation showcasing cutting-edge technology solutions.",
  },
  {
    id: 3,
    title: "techYuva 9.0",
    detail: "Innovative Model Presentation Competition",
    position: "2nd Place Runner Up",
    year: "2024",
    institution: "Buddha Institute of Technology",
    description:
      "Secured second place for innovative technology demonstration and presentation skills.",
  },
];

export function AchievementsSection() {
  const sectionRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
useEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context((self) => {

    gsap.from(self.selector(".achievements-label"), {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: self.selector(".achievements-label"),
        start: "top 85%",
      },
    });

    gsap.from(self.selector(".achievements-heading-word"), {
      y: 100,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: self.selector(".achievements-heading"),
        start: "top 85%",
      },
    });

    gsap.fromTo(
      self.selector(".achievement-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: self.selector(".achievements-grid"),
          start: "top 80%",
        },
      }
    );

    ScrollTrigger.refresh();

  }, sectionRef);

  return () => ctx.revert();
}, []);

  // useEffect(() => {
  //   if (!sectionRef.current) return;

  //   const ctx = gsap.context(() => {
  //     gsap.from(".achievements-label", {
  //       x: -50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".achievements-label",
  //         start: "top 85%",
  //       },
  //     });

  //     gsap.from(".achievements-heading-word", {
  //       y: 100,
  //       opacity: 0,
  //       stagger: 0.08,
  //       duration: 1,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: ".achievements-heading",
  //         start: "top 85%",
  //       },
  //     });

  //     gsap.from(".achievement-card", {
  //       y: 50,
  //       opacity: 0,
  //       stagger: 0.15,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".achievements-grid",
  //         start: "top 80%",
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="achievements-label flex items-center gap-4 mb-16">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            05 / Achievements
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Heading */}
        <div className="achievements-heading overflow-hidden mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-[0.35em]">
            {"Awards & Recognition".split(" ").map((word, i) => (
              <span
                key={i}
                className="achievements-heading-word inline-block"
                style={{
                  color: i === 2 ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Achievement cards */}
        <div className="achievements-grid grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {achievements.map((achievement) => {
            const isHovered = hoveredId === achievement.id;

            return (
              <div
                key={achievement.id}
                className="achievement-card p-8 md:p-10 transition-all duration-500"
                style={{
                  backgroundColor: isHovered
                    ? "var(--muted)"
                    : "var(--background)",
                }}
                onMouseEnter={() => setHoveredId(achievement.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor-hover
              >
                {/* Year */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--accent)" }}
                  >
                    {achievement.year}
                  </span>
                  <span
                    className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-300"
                    style={{
                      backgroundColor: isHovered
                        ? "var(--accent)"
                        : "transparent",
                      color: isHovered
                        ? "var(--accent-foreground)"
                        : "var(--muted-foreground)",
                      border: isHovered
                        ? "1px solid var(--accent)"
                        : "1px solid var(--border)",
                    }}
                  >
                    {achievement.position}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-2 transition-colors duration-300"
                  style={{
                    color: isHovered
                      ? "var(--accent)"
                      : "var(--foreground)",
                  }}
                >
                  {achievement.title}
                </h3>

                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {achievement.detail}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {achievement.description}
                </p>

                {/* Institution */}
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {achievement.institution}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
