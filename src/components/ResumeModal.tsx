import { useTheme } from '../context/ThemeContext'

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
          background: dark ? '#1c1c1c' : '#ffffff',
          borderRadius: 28,
          border: `1.5px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
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
            border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
            background: dark ? '#272020' : '#FFF2F0',
            color: dark ? '#f0ede8' : '#2F4F4F',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, paddingRight: 40 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              overflow: 'hidden',
              border: '2px solid rgba(255,111,97,0.3)',
              flexShrink: 0,
            }}
          >
            <img
              src="./profile1.jpeg"
              alt="Hina Tariq"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: dark ? '#f0ede8' : '#2F4F4F', marginBottom: 4 }}>
              Hina Tariq
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#FF6F61', fontWeight: 600 }}>
              MERN Stack Developer · CS Graduate · Course Instructor
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: dark ? '#3d2929' : '#FFE8E5', marginBottom: 24 }} />

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
                color: dark ? '#b0b8c1' : '#5A6B7C',
                background: dark ? '#272020' : '#FFF2F0',
                border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
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
              background: dark ? '#272020' : '#FFF2F0',
              border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
              borderRadius: 14,
              padding: '16px 18px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontWeight: 700, color: dark ? '#f0ede8' : '#2F4F4F', fontSize: '0.95rem' }}>
                  BS Computer Science
                </div>
                <div style={{ fontSize: '0.83rem', color: dark ? '#b0b8c1' : '#5A6B7C', marginTop: 3 }}>
                  University — CGPA 3.4 / 4.0
                </div>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#FF6F61',
                  background: 'rgba(255,111,97,0.1)',
                  border: '1px solid rgba(255,111,97,0.2)',
                  borderRadius: 20,
                  padding: '3px 12px',
                }}
              >
                2020 – 2024
              </span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: 24 }}>
          <SectionLabel label="Experience" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { role: 'MERN Stack Developer', company: 'Full Stack Web Development', duration: '1 Year', points: ['Built scalable REST APIs with Node.js + Express', 'Developed React frontends with Redux state management', 'Integrated MongoDB with Mongoose for data persistence'] },
              { role: 'Course Instructor — C++ & MERN', company: 'University / Private Institute', duration: '1 Year', points: ['Taught C++ Programming Fundamentals to 50+ students', 'Delivered hands-on MERN Stack curriculum', 'Created structured, project-based coursework'] },
            ].map((exp, i) => (
              <div
                key={i}
                style={{
                  background: dark ? '#272020' : '#FFF2F0',
                  border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                  borderRadius: 14,
                  padding: '16px 18px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: dark ? '#f0ede8' : '#2F4F4F', fontSize: '0.93rem' }}>{exp.role}</div>
                    <div style={{ fontSize: '0.8rem', color: dark ? '#b0b8c1' : '#5A6B7C', marginTop: 2 }}>{exp.company}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#FF6F61', background: 'rgba(255,111,97,0.1)', border: '1px solid rgba(255,111,97,0.2)', borderRadius: 20, padding: '2px 10px' }}>
                    {exp.duration}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, fontSize: '0.82rem', color: dark ? '#b0b8c1' : '#5A6B7C', lineHeight: 1.55 }}>
                      <span style={{ color: '#FF6F61', flexShrink: 0 }}>▸</span> {p}
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
                  color: '#FF6F61',
                  background: 'rgba(255,111,97,0.1)',
                  border: '1px solid rgba(255,111,97,0.2)',
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
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.87rem', color: dark ? '#b0b8c1' : '#5A6B7C' }}>
                <span style={{ color: '#FF6F61', fontSize: 14 }}>✓</span>
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
              background: 'linear-gradient(135deg, #FF6F61, #FFB6C1)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
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
              border: '2px solid #FF6F61',
              background: 'transparent',
              color: '#FF6F61',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
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
    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FF6F61', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
      {label}
    </div>
  )
}
