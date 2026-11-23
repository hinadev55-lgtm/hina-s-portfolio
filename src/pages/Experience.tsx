import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useReveal } from "../components/shared";

import { digitalSoftsInternship } from "../experience-data";

const devCards = [
  digitalSoftsInternship,
  {
    role: "MERN Stack Developer",
    company: "Full Stack Web Development",
    duration: "4+ years of experience",
    color: "#61DAFB",
    points: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Developed scalable REST APIs with JWT authentication and middleware architecture",
      "Implemented responsive UIs with Tailwind CSS and advanced React state management (Redux)",
      "Integrated third-party APIs and payment gateways into production applications",
      "Deployed applications using cloud services and configured CI/CD pipelines",
    ],
  },
];

const teachCards = [
  {
    role: "Course Instructor — C++ & MERN",
    company: "University / Private Institute",
    duration: "4+ years of experience",
    color: "var(--accent-soft)",
    points: [
      "Delivered C++ Programming Fundamentals curriculum to university-level students",
      "Taught MERN Stack development from React basics to full REST API integration",
      "Created structured, project-based coursework and graded assessments",
      "Provided 1-on-1 mentorship and code reviews to 50+ students",
      "Achieved consistently high student satisfaction and completion rates",
    ],
  },
];

export default function Experience() {
  const { dark } = useTheme();
  const barRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, visible } = useReveal(0.1);

  useEffect(() => {
    if (visible && barRef.current) barRef.current.classList.add("visible");
  }, [visible]);

  return (
    <div
      style={{
        background: "var(--page)",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* Header */}
      <div className="scroll-reveal"
        style={{
          background: "var(--tint)",
          padding: "64px 20px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 12,
            fontFamily: "DM Sans, system-ui, sans-serif",
          }}
        >
          Journey
        </p>
        <h2 id="experience-title"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            color: "var(--ink)",
            fontFamily: "DM Sans, system-ui, sans-serif",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Experience &amp; Teaching
        </h2>
        <p
          style={{
            color: "var(--muted)",
            marginTop: 12,
            fontSize: "0.95rem",
            fontFamily: "DM Sans, system-ui, sans-serif",
          }}
        >
          4+ years of experience across web development and technical instruction.
        </p>
      </div>

      {/* Main Container - Vertical Stacking */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "60px 16px",
          boxSizing: "border-box",
        }}
        ref={sectionRef}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* TOP BOX: DEVELOPMENT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 50,
                  background: "rgba(97,218,251,0.1)",
                  border: "1px solid rgba(97,218,251,0.25)",
                  color: "#61DAFB",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  fontFamily: "DM Sans, system-ui, sans-serif",
                }}
              >
                ⚛️ Development
              </span>
            </div>

            {devCards.map((card) => (
              <div
                key={card.company}
                className={`timeline-card scroll-reveal ${visible ? "visible" : ""}`}
                style={{
                  background: dark ? "var(--surface)" : "var(--tint)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: "clamp(18px, 4vw, 28px)",
                  boxShadow: "0 4px 24px rgba(125,92,194,0.07)",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--ink)",
                        margin: 0,
                        fontFamily: "DM Sans, system-ui, sans-serif",
                      }}
                    >
                      {card.role}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--muted)",
                        margin: "4px 0 0",
                        fontFamily: "DM Sans, system-ui, sans-serif",
                      }}
                    >
                      {card.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--accent)",
                      background: "rgba(125,92,194,0.1)",
                      border: "1px solid rgba(125,92,194,0.2)",
                      borderRadius: 20,
                      padding: "3px 12px",
                      flexShrink: 0,
                      fontFamily: "DM Sans, system-ui, sans-serif",
                    }}
                  >
                    {card.duration}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {card.points.map((pt, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        fontSize: "0.86rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ▸
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* HORIZONTAL CENTER LINE WITH ORIGINAL COLOR & ANIMATION */}
          <div style={{ padding: "16px 0", width: "100%" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 2,
                background: "var(--line)",
                borderRadius: 1,
              }}
            >
              {/* Animated Fill Bar */}
              <div
                ref={barRef}
                className="timeline-bar-fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  background: "linear-gradient(to right, var(--accent), var(--accent-soft))",
                  borderRadius: 1,
                }}
              />
              {/* Left Glowing Node */}
              <div
                style={{
                  position: "absolute",
                  left: -6,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--button)",
                  boxShadow: "0 0 0 4px rgba(125,92,194,0.2)",
                }}
              />
              {/* Right Glowing Node */}
              <div
                style={{
                  position: "absolute",
                  right: -6,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--accent-soft)",
                  boxShadow: "0 0 0 3px rgba(166,139,224,0.2)",
                }}
              />
            </div>
          </div>

          {/* BOTTOM BOX: TEACHING */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 50,
                  background: "rgba(166,139,224,0.15)",
                  border: "1px solid rgba(166,139,224,0.3)",
                  color: "var(--accent-soft)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  fontFamily: "DM Sans, system-ui, sans-serif",
                }}
              >
                🧑‍🏫 Teaching
              </span>
            </div>

            {teachCards.map((card, i) => (
              <div
                key={card.company}
                className={`timeline-card scroll-reveal ${visible ? "visible" : ""}`}
                style={{
                  background: dark ? "var(--surface)" : "var(--tint)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: "clamp(18px, 4vw, 28px)",
                  boxShadow: "0 4px 24px rgba(125,92,194,0.07)",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--ink)",
                        margin: 0,
                        fontFamily: "DM Sans, system-ui, sans-serif",
                      }}
                    >
                      {card.role}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--muted)",
                        margin: "4px 0 0",
                        fontFamily: "DM Sans, system-ui, sans-serif",
                      }}
                    >
                      {card.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--accent-soft)",
                      background: "rgba(166,139,224,0.15)",
                      border: "1px solid rgba(166,139,224,0.3)",
                      borderRadius: 20,
                      padding: "3px 12px",
                      flexShrink: 0,
                      fontFamily: "DM Sans, system-ui, sans-serif",
                    }}
                  >
                    {card.duration}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {card.points.map((pt, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        fontSize: "0.86rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                        fontFamily: "DM Sans, system-ui, sans-serif",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent-soft)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ▸
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
