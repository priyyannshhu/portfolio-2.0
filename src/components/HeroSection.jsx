import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImage from "../assests/person.png";


gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1">
            {/* Role label */}
            <div className="hero-subtitle mb-8 md:mb-10">
              <span
                className="font-mono text-xs md:text-sm uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                Full-Stack Developer & AI Engineer
              </span>
            </div>

            {/* Big name */}
            <div className="overflow-hidden mb-3 md:mb-4">
              <h1
                className="text-[clamp(2.5rem,11vw,8rem)] font-bold leading-[1] tracking-tighter"
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
            <div className="overflow-hidden mb-10 md:mb-14">
              <h1
                className="text-[clamp(2.5rem,11vw,8rem)] font-bold leading-[1] tracking-tighter"
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
              className="hero-line w-full h-px origin-left mb-10 md:mb-14"
              style={{ backgroundColor: "var(--border)" }}
            />

            {/* Description and CTAs */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-8">
            <p
              className="hero-desc max-w-2xl text-base md:text-lg leading-loose mb-10 md:mb-12"
              style={{ color: "var(--muted-foreground)" }}
            >
              Designing and developing{" "}
              <span style={{ color: "var(--foreground)" }}>
                innovative AI-powered solutions
              </span>{" "}
              that merge cutting-edge technology with real-world impact. From music
              generation platforms to real-time communication systems.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-end">
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
        </div>

          {/* Right side - Image with gooey light effect */}
          <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0">
            <div
              ref={imageRef}
              className="gooey-light relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2"
              style={{ borderColor: "var(--accent)" }}
              onMouseMove={(e) => {
                if (imageRef.current) {
                  const rect = imageRef.current.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  const lightEl = imageRef.current.querySelector('.light-effect');
                  if (lightEl) {
                    lightEl.style.left = x + 'px';
                    lightEl.style.top = y + 'px';
                  }
                }
              }}
            >
              <img
                src={personImage}
                alt="Ankita Singh"
                className="w-full h-full object-cover"
                onMouseEnter={(e) => {
                  const lightEl = imageRef.current?.querySelector('.light-effect');
                  if (lightEl) lightEl.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const lightEl = imageRef.current?.querySelector('.light-effect');
                  if (lightEl) lightEl.style.opacity = "0";
                }}
              />
              <div
                className="light-effect absolute w-32 h-32 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(200, 255, 0, 0.3) 0%, transparent 70%)",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0,
                  transition: "opacity 0.2s ease-out",
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-12 md:gap-16 mt-16 md:mt-24">
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
