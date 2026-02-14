import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ toggleTheme, theme }) {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at top right)",
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.from(".mobile-nav-item", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at top right)",
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? `rgba(${theme === 'dark' ? '10, 10, 15' : '255, 255, 255'}, 0.85)`
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between py-5">
          <a
            href="#hero"
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
            data-cursor-hover
          >
            ankita
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-100 opacity-50"
                style={{ color: "var(--foreground)" }}
                data-cursor-hover
                onMouseEnter={(e) => (e.target.style.opacity = "1")}
                onMouseLeave={(e) => (e.target.style.opacity = "0.5")}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium uppercase tracking-widest"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
              data-cursor-hover
              onMouseEnter={(e) => {
                e.target.style.borderColor = "var(--accent)";
                e.target.style.backgroundColor = "var(--accent)";
                e.target.style.color = "var(--accent-foreground)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.backgroundColor = "var(--card)";
                e.target.style.color = "var(--foreground)";
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile menu and theme */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Mobile hamburger */}
            <button
              className="relative z-[60] w-8 h-6 flex flex-col justify-between"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-full h-px transition-all duration-300"
                style={{
                  backgroundColor: "var(--foreground)",
                  transform: isOpen
                    ? "rotate(45deg) translate(4px, 4px)"
                    : "none",
                }}
              />
              <span
                className="block w-full h-px transition-all duration-300"
                style={{
                  backgroundColor: "var(--foreground)",
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-full h-px transition-all duration-300"
                style={{
                  backgroundColor: "var(--foreground)",
                  transform: isOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 md:hidden"
        style={{
          backgroundColor: "var(--background)",
          clipPath: "circle(0% at top right)",
        }}
      >
        {navItems.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-item text-3xl font-bold uppercase tracking-widest transition-colors duration-300"
            style={{ color: "var(--foreground)" }}
            onClick={() => setIsOpen(false)}
          >
            <span className="font-mono text-xs mr-3" style={{ color: "var(--accent)" }}>
              0{i + 1}
            </span>
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}
