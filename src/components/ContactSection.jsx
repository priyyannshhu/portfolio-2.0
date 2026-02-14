import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-label",
          start: "top 85%",
        },
      });

      gsap.from(".contact-heading-char", {
        y: 200,
        rotateX: -90,
        opacity: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 85%",
        },
      });

      gsap.from(".contact-form-el", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });

      gsap.from(".contact-info-item", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const title = "Let's Talk";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="contact-label flex items-center gap-4 mb-16 md:mb-20">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            07 / Contact
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Big heading */}
        <div className="contact-heading overflow-hidden mb-20 md:mb-28">
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.95]">
            {title.split("").map((char, i) => (
              <span
                key={i}
                className="contact-heading-char inline-block"
                style={{
                  color: char === "'" ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <span
              className="contact-heading-char inline-block"
              style={{ color: "var(--accent)" }}
            >
              .
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Info */}
          <div className="contact-info lg:col-span-4">
            <div className="flex flex-col gap-8">
              <div className="contact-info-item">
                <span
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Email
                </span>
                <a
                  href="mailto:ankita11singh20@gmail.com"
                  className="text-base transition-colors duration-300"
                  style={{ color: "var(--foreground)" }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--foreground)")
                  }
                  data-cursor-hover
                >
                  ankita11singh20@gmail.com
                </a>
              </div>

              <div className="contact-info-item">
                <span
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Phone
                </span>
                <a
                  href="tel:+916202456608"
                  className="text-base transition-colors duration-300"
                  style={{ color: "var(--foreground)" }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--foreground)")
                  }
                  data-cursor-hover
                >
                  +91-6202456608
                </a>
              </div>

              <div className="contact-info-item">
                <span
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Location
                </span>
                <span
                  className="text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Gorakhpur, Uttar Pradesh
                </span>
              </div>

              <div className="contact-info-item pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <span
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  Socials
                </span>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      name: "GitHub",
                      url: "https://github.com/ankita-singhhh",
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/ankitaa-singh",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors duration-300 group"
                      style={{ color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--muted-foreground)")
                      }
                      data-cursor-hover
                    >
                      {social.name}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form lg:col-span-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="contact-form-el">
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent pb-4 text-lg outline-none transition-colors duration-300 placeholder:opacity-30 font-sans"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "var(--border)")
                  }
                />
              </div>

              <div className="contact-form-el">
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent pb-4 text-lg outline-none transition-colors duration-300 placeholder:opacity-30 font-sans"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "var(--border)")
                  }
                />
              </div>

              <div className="contact-form-el">
                <label
                  className="font-mono text-xs uppercase tracking-[0.2em] block mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent pb-4 text-lg outline-none transition-colors duration-300 placeholder:opacity-30 resize-none font-sans"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "var(--border)")
                  }
                />
              </div>

              <div className="contact-form-el">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-50"
                  style={{
                    backgroundColor: submitted
                      ? "transparent"
                      : "var(--accent)",
                    color: submitted
                      ? "var(--accent)"
                      : "var(--accent-foreground)",
                    border: submitted
                      ? "1px solid var(--accent)"
                      : "1px solid var(--accent)",
                  }}
                  data-cursor-hover
                  onMouseEnter={(e) => {
                    if (!submitted) {
                      e.currentTarget.style.boxShadow =
                        "0 10px 40px rgba(200, 255, 0, 0.25)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {isSubmitting
                    ? "Sending..."
                    : submitted
                    ? "Message Sent"
                    : "Send Message"}
                  {!isSubmitting && !submitted && (
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
