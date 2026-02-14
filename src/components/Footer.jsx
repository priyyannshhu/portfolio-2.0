import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-line", {
        scaleX: 0,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.from(".footer-content", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="px-6 md:px-12 pb-12 pt-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="footer-line w-full h-px origin-left mb-8"
          style={{ backgroundColor: "var(--border)" }}
        />

        <div className="footer-content flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              Designed & Developed by
            </span>
            <a
              href="https://www.linkedin.com/in/ankitaa-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold transition-colors duration-300"
              style={{ color: "var(--foreground)" }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color = "var(--foreground)")
              }
              data-cursor-hover
            >
              Ankita Singh
            </a>
          </div>

          <span
            className="font-mono text-xs"
            style={{ color: "var(--muted-foreground)" }}
          >
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
