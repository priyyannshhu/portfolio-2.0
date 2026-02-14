import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "B.Tech - CSE (Data Science)",
    institution: "Buddha Institute of Technology",
    location: "Gorakhpur, Uttar Pradesh",
    period: "Dec 2023 - Jun 2027",
    score: "CGPA: 7.5 / 10",
  },
  {
    degree: "Intermediate (12th) - PCM",
    institution: "H.R. College, Mairwa, Siwan",
    location: "Siwan, Bihar",
    period: "Apr 2020 - Apr 2022",
    score: "Bihar Board: 72.8%",
  },
];

export function EducationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".edu-label", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".edu-label",
          start: "top 85%",
        },
      });

      gsap.from(".edu-heading-word", {
        y: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".edu-heading",
          start: "top 85%",
        },
      });

      gsap.from(".edu-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".edu-list",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="edu-label flex items-center gap-4 mb-16">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            06 / Education
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Heading */}
        <div className="edu-heading overflow-hidden mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-[0.35em]">
            {"Academic Journey".split(" ").map((word, i) => (
              <span
                key={i}
                className="edu-heading-word inline-block"
                style={{
                  color: i === 1 ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Education list */}
        <div className="edu-list">
          {education.map((item, index) => (
            <div
              key={index}
              className="edu-item grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10"
              style={{
                borderTop: "1px solid var(--border)",
              }}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Degree */}
              <div className="md:col-span-4">
                <h3
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.degree}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  {item.institution}
                </p>
              </div>

              {/* Details */}
              <div className="md:col-span-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Period
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <div className="flex gap-3">
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
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="md:col-span-3 md:text-right">
                <span
                  className="inline-block px-3 py-1 text-xs font-mono"
                  style={{
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                  }}
                >
                  {item.score}
                </span>
              </div>
            </div>
          ))}
          <div
            className="h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>
      </div>
    </section>
  );
}
