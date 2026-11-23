import { useTheme } from '../context/ThemeContext'
import { useReveal, TiltCard } from '../components/shared'

const certs = [
  {
    title: 'MERN Stack Certified Developer',
    issuer: 'Full Stack Development Program',
    icon: '⚛️',
    color: '#61DAFB',
    bg: 'rgba(97,218,251,0.08)',
    border: 'rgba(97,218,251,0.2)',
    year: '2024',
    desc: 'Comprehensive certification covering MongoDB, Express.js, React, and Node.js for full-stack web application development.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
  },
  {
    title: 'C++ Programming Fundamentals',
    issuer: 'Computer Science Department',
    icon: '⚙️',
    color: '#00599C',
    bg: 'rgba(0,89,156,0.07)',
    border: 'rgba(0,89,156,0.18)',
    year: '2023',
    desc: 'In-depth certification covering object-oriented programming, data structures, algorithms, and the C++ Standard Template Library.',
    skills: ['OOP', 'Data Structures', 'Algorithms', 'STL', 'Templates'],
  },
  {
    title: 'Microsoft Office Certified',
    issuer: 'Microsoft Office Specialist',
    icon: '📋',
    color: '#D83B01',
    bg: 'rgba(216,59,1,0.07)',
    border: 'rgba(216,59,1,0.18)',
    year: '2023',
    desc: 'Professional proficiency in Microsoft Office Suite including Word, Excel, and PowerPoint for document creation and data management.',
    skills: ['Word', 'Excel', 'PowerPoint', 'Data Entry', 'Documentation'],
  },
]

export default function Certifications() {
  const { dark } = useTheme()
  const { ref, visible } = useReveal(0.1)

  return (
    <div style={{ background: 'var(--page)' }}>
      {/* Header */}
      <div className="scroll-reveal" style={{ background: 'var(--tint)', padding: '64px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
          Credentials
        </p>
        <h2 id="certifications-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--ink)', fontFamily: 'DM Sans, system-ui, sans-serif', margin: 0, lineHeight: 1.15 }}>
          Certifications
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: 12, fontSize: '0.95rem', fontFamily: 'DM Sans, system-ui, sans-serif' }}>
          Verified credentials in core technologies and tools.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 80px' }} ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
          {certs.map((cert, i) => (
            <TiltCard key={i} className="scroll-reveal">
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1.5px solid var(--line)',
                  boxShadow: '0 6px 28px rgba(125,92,194,0.08)',
                  borderRadius: 24,
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  cursor: 'default',
                  animation: `fadeUp 0.5s ${i * 0.12}s ease both`,
                  height: '100%',
                }}
              >
                {/* Icon + year */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 18,
                    background: cert.bg, border: `1px solid ${cert.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                  }}>
                    {cert.icon}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--accent)',
                    background: 'rgba(125,92,194,0.1)', border: '1px solid rgba(125,92,194,0.2)',
                    borderRadius: 20, padding: '4px 12px', fontFamily: 'DM Sans, system-ui, sans-serif',
                  }}>
                    {cert.year} · Certified
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)', margin: '0 0 8px', lineHeight: 1.35, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', margin: 0, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
                    {cert.issuer}
                  </p>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
                  {cert.desc}
                </p>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cert.skills.map((s, j) => (
                    <span key={j} style={{
                      fontSize: '0.74rem', fontWeight: 600,
                      color: cert.color,
                      background: cert.bg, border: `1px solid ${cert.border}`,
                      borderRadius: 50, padding: '3px 10px',
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Accent bar */}
                <div style={{ marginTop: 'auto', height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Cert summary banner */}
        <div
          className={`reveal scroll-reveal ${visible ? 'visible' : ''}`}
          style={{
            marginTop: 48,
            background: dark ? 'var(--surface)' : 'var(--tint)',
            border: '1px solid var(--line)',
            borderRadius: 24,
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--ink)', margin: '0 0 6px', fontFamily: 'DM Sans, system-ui, sans-serif' }}>
              Committed to Continuous Growth
            </h3>
            <p style={{ fontSize: '0.87rem', color: 'var(--muted)', margin: 0, fontFamily: 'DM Sans, system-ui, sans-serif', lineHeight: 1.6 }}>
              Actively pursuing additional certifications in cloud architecture, advanced React patterns, and DevOps practices.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[{ num: '3', label: 'Certifications' }, { num: '4+', label: 'Years of experience' }, { num: '50+', label: 'Students Taught' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>{s.num}</div>
                <div style={{ fontSize: '0.77rem', color: 'var(--muted)', fontFamily: 'DM Sans, system-ui, sans-serif', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
