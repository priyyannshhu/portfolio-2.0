import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAP(callback, deps = []) {
  const scope = useRef(null);

  useEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      callback(scope.current);
    }, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}

export function useSplitText(selector, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const elements = ref.current.querySelectorAll(selector);
    
    elements.forEach((el) => {
      const text = el.textContent;
      el.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.classList.add("split-char");
        el.appendChild(span);
      });
    });

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const chars = el.querySelectorAll(".split-char");
        gsap.from(chars, {
          y: 120,
          opacity: 0,
          rotateX: -80,
          stagger: 0.03,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: options.scrollTrigger ? {
            trigger: el,
            start: "top 85%",
            ...options.scrollTrigger,
          } : undefined,
          ...options,
        });
      });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export function useParallax(selector, speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const elements = ref.current.querySelectorAll(selector);

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.to(el, {
          y: () => speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export { gsap, ScrollTrigger };
