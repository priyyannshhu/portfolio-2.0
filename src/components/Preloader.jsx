import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    // Counter animation
    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(counter.val)),
    });

    tl.to(
      ".preloader-line",
      {
        scaleX: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".preloader-name .split-letter",
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.6,
        ease: "power3.out",
      },
      0.3
    );

    return () => tl.kill();
  }, [onComplete]);

  const name = "ANKITA SINGH";

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="preloader-name overflow-hidden">
          <div className="flex">
            {name.split("").map((char, i) => (
              <span
                key={i}
                className="split-letter inline-block text-4xl md:text-6xl font-bold tracking-widest opacity-0"
                style={{
                  color: "var(--foreground)",
                  transform: "translateY(100%)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        <div className="w-64 md:w-96 h-px relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--border)" }}
          />
          <div
            className="preloader-line absolute inset-0 origin-left"
            style={{
              backgroundColor: "var(--accent)",
              transform: "scaleX(0)",
            }}
          />
        </div>

        <span
          ref={counterRef}
          className="font-mono text-sm tracking-[0.3em]"
          style={{ color: "var(--muted-foreground)" }}
        >
          {String(count).padStart(3, "0")}%
        </span>
      </div>
    </div>
  );
}
