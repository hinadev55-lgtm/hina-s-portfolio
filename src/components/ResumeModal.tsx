import { digitalSoftsInternship } from '../experience-data'
import { useTheme } from '../context/ThemeContext'
import portrait from "../pages/hina-portrait.webp";

interface Props {
  onClose: () => void
}

export default function ResumeModal({ onClose }: Props) {
  const { dark } = useTheme()

  const skills = ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'C++', 'Tailwind CSS', 'REST APIs']

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        animation: 'fadeUp 0.25s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 680,
          maxHeight: '88vh',
          overflowY: 'auto',
          background: 'var(--page)',
          borderRadius: 28,
          border: '1.5px solid var(--line)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
          padding: 'clamp(24px, 5vw, 48px)',
          position: 'relative',
          animation: 'fadeUp 0.3s ease',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1px solid var(--line)',
            background: dark ? 'var(--surface)' : 'var(--tint)',
            color: 'var(--ink)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            fontFamily: 'DM Sans, system-ui, sans-serif',
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, paddingRight: 40 }}>
          <div
            style={{
              background: 'var(--portrait-far)',
              width: 64,
              height: 64,
              borderRadius: 18,
              overflow: 'hidden',
              border: '2px solid rgba(125,92,194,0.3)',
              flexShrink: 0,
            }}
          >
            <img
              src={portrait}
              alt="Hina Tariq"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--ink)', marginBottom: 4 }}>
              Hina Tariq
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 600 }}>
              Full-stack Developer · AI Systems &amp; Automation Engineer · 4+ years of experience
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--line)', marginBottom: 24 }} />

        {/* Contact row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
          {[
            { icon: '✉️', text: 'developerhina227@gmail.com' },
            { icon: '📞', text: '03097247896' },
            { icon: '💼', text: 'linkedin.com/in/hina-tariq-67252b326' },
          ].map((c, i) => (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8rem',
                color: 'var(--muted)',
                background: dark ? 'var(--surface)' : 'var(--tint)',
                border: '1px solid var(--line)',
                borderRadius: 50,
                padding: '6px 12px',
              }}
            >
              {c.icon} {c.text}
            </span>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: 24 }}>
          <SectionLabel label="Education" />
          <div
            style={{
              background: dark ? 'var(--surface)' : 'var(--tint)',
              border: '1px solid var(--line)',
              borderRadius: 14,
              padding: '16px 18px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '0.95rem' }}>
                  BS Computer Science
                </div>
                <div style={{ fontSize: '0.83rem', color: 'var(--muted)', marginTop: 3 }}>
                  University — CGPA 3.4 / 4.0
                </div>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  background: 'rgba(125,92,194,0.1)',
                  border: '1px solid rgba(125,92,194,0.2)',
                  borderRadius: 20,
                  padding: '3px 12px',
                }}
              >
                2022 – 2026
              </span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: 24 }}>
          <SectionLabel label="Experience" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              digitalSoftsInternship,
              { role: 'MERN Stack Developer', company: 'Full Stack Web Development', duration: '4+ years of experience', points: ['Built scalable REST APIs with Node.js + Express', 'Developed React frontends with Redux state management', 'Integrated MongoDB with Mongoose for data persistence'] },
              { role: 'Course Instructor — C++ & MERN', company: 'University / Private Institute', duration: '4+ years of experience', points: ['Taught C++ Programming Fundamentals to 50+ students', 'Delivered hands-on MERN Stack curriculum', 'Created structured, project-based coursework'] },
            ].map((exp, i) => (
              <div
                key={i}
                style={{
                  background: dark ? 'var(--surface)' : 'var(--tint)',
                  border: '1px solid var(--line)',
                  borderRadius: 14,
                  padding: '16px 18px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '0.93rem' }}>{exp.role}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 2 }}>{exp.company}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', background: 'rgba(125,92,194,0.1)', border: '1px solid rgba(125,92,194,0.2)', borderRadius: 20, padding: '2px 10px' }}>
                    {exp.duration}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: 24 }}>
          <SectionLabel label="Core Skills" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map((s, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  background: 'rgba(125,92,194,0.1)',
                  border: '1px solid rgba(125,92,194,0.2)',
                  borderRadius: 50,
                  padding: '5px 14px',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: 32 }}>
          <SectionLabel label="Certifications" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['MERN Stack Certified Developer', 'C++ Programming Fundamentals Certified', 'Microsoft Office Certified'].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.87rem', color: 'var(--muted)' }}>
                <span style={{ color: 'var(--accent)', fontSize: 14 }}>✓</span>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => window.print()}
            style={{
              flex: 1,
              minWidth: 140,
              padding: '13px 24px',
              borderRadius: 50,
              border: 'none',
              background: 'var(--button)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontFamily: 'DM Sans, system-ui, sans-serif',
            }}
          >
            🖨️ Print / Save PDF
          </button>
          <a
            href="mailto:developerhina227@gmail.com?subject=Opportunity for Hina Tariq"
            style={{
              flex: 1,
              minWidth: 140,
              padding: '13px 24px',
              borderRadius: 50,
              border: '2px solid var(--accent)',
              background: 'transparent',
              color: 'var(--accent)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            ✉️ Send Opportunity
          </a>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
      {label}
    </div>
  )
}
