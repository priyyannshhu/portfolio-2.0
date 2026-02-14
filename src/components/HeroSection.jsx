import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 });

      // Animate each letter of the name
      tl.from(".hero-char", {
        y: 200,
        rotateX: -90,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "power4.out",
      });

      tl.from(
        ".hero-subtitle",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      tl.from(
        ".hero-line",
        {
          scaleX: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.4"
      );

      tl.from(
        ".hero-desc",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tl.from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tl.from(
        ".hero-stat",
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tl.from(
        ".hero-scroll-indicator",
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (nameRef.current) {
            gsap.set(nameRef.current, {
              y: self.progress * 150,
              opacity: 1 - self.progress * 1.5,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const firstName = "Ankita";
  const lastName = "Singh";

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 md:pb-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />


      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px]"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div ref={nameRef} className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Role label */}
        <div className="hero-subtitle mb-6 md:mb-8">
          <span
            className="font-mono text-xs md:text-sm uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            Full-Stack Developer & AI Engineer
          </span>
        </div>

        {/* Big name */}
        <div className="overflow-hidden mb-2">
          <h1
            className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter"
            style={{ color: "var(--foreground)" }}
          >
            {firstName.split("").map((char, i) => (
              <span
                key={`f-${i}`}
                className="hero-char inline-block"
                style={{ perspective: "1000px" }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
        <div className="overflow-hidden mb-8 md:mb-12">
          <h1
            className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter"
            style={{ color: "var(--foreground)" }}
          >
            {lastName.split("").map((char, i) => (
              <span
                key={`l-${i}`}
                className="hero-char inline-block"
                style={{
                  WebkitTextStroke: "2px var(--foreground)",
                  color: "transparent",
                }}
              >
                {char}
              </span>
            ))}
            <span
              className="hero-char inline-block"
              style={{ color: "var(--accent)" }}
            >
              .
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div
          className="hero-line w-full h-px origin-left mb-8 md:mb-12"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Description and CTAs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p
            className="hero-desc max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Designing and developing{" "}
            <span style={{ color: "var(--foreground)" }}>
              innovative AI-powered solutions
            </span>{" "}
            that merge cutting-edge technology with real-world impact. From music
            generation platforms to real-time communication systems.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="hero-cta px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
              data-cursor-hover
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 10px 40px rgba(200, 255, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="hero-cta px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              data-cursor-hover
              onMouseEnter={(e) => {
                e.target.style.borderColor = "var(--accent)";
                e.target.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.color = "var(--foreground)";
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex gap-12 mt-16 md:mt-20">
          {[
            { number: "5+", label: "Projects" },
            { number: "32+", label: "Skills" },
            { number: "3+", label: "Awards" },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs font-mono uppercase tracking-widest mt-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 right-8 flex flex-col items-center gap-2">
        <span
          className="font-mono text-[10px] uppercase tracking-widest"
          style={{
            color: "var(--muted-foreground)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-16 overflow-hidden"
          style={{ backgroundColor: "var(--border)" }}
        >
          <div
            className="w-full h-1/2"
            style={{
              backgroundColor: "var(--accent)",
              animation: "scrollDown 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
