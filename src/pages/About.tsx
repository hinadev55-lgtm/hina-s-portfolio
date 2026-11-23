import { useTheme } from '../context/ThemeContext'
import { useReveal, AnimCounter } from '../components/shared'
import portrait from "./hina-portrait.webp";

export default function About() {
  const { dark } = useTheme()
  const { ref, visible } = useReveal(0.1)

  const stats = [
    { value: 34, suffix: '', label: 'CGPA · 3.4 / 4.0', icon: '🎓', display: '3.4' },
    { value: 4, suffix: '+', label: 'Years of experience', icon: '💻', display: null },
    { value: 50, suffix: '+', label: 'Students Taught', icon: '👩‍🎓', display: null },
  ]

  return (
    <div style={{ background: 'var(--page)' }}>
      {/* Page header */}
      <div className="scroll-reveal" style={{ background: 'var(--tint)', padding: '64px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
          Get to know me
        </p>
        <h2 id="about-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--ink)', fontFamily: 'DM Sans, system-ui, sans-serif', margin: 0, lineHeight: 1.15 }}>
          About Me
        </h2>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }} ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 64, alignItems: 'center' }}>
          
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <figure className="portrait-frame about-portrait">
              <div className="portrait-backdrop">
                <img src={portrait} alt="Hina Tariq" loading="lazy" />
              </div>
            </figure>
          </div>

          {/* Bio */}
          <div className={`reveal-right ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
                My Story
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', color: 'var(--ink)', fontFamily: 'DM Sans, system-ui, sans-serif', margin: 0, lineHeight: 1.2 }}>
                Bridging Code &amp; Clarity
              </h2>
            </div>
            
            {/* Paragraph 1 */}
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem', fontFamily: 'DM Sans, system-ui, sans-serif', margin: 0, textAlign: 'justify' }}>
              I'm a passionate full-stack developer with a strong foundation in computer science and a love for building clean, scalable web applications. My expertise in the MERN stack allows me to craft seamless end-to-end experiences — from responsive React frontends to robust Node.js/Express APIs backed by MongoDB.
            </p>

            {/* Paragraph 2 */}
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem', fontFamily: 'DM Sans, system-ui, sans-serif', margin: 0, textAlign: 'justify' }}>
              My C++ background sharpened my algorithmic thinking and problem-solving approach. As a course instructor, I've taught both C++ fundamentals and MERN development, turning complex concepts into accessible, practical knowledge for students.
            </p>

            {/* Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '🎯', title: 'Clean Architecture', desc: 'Scalable, maintainable codebases' },
                { icon: '📚', title: 'Continuous Learner', desc: 'Always exploring new technologies' },
                { icon: '🤝', title: 'Collaborative Mindset', desc: 'Thrives in team environments' },
              ].map((v, i) => (
                <div key={i} className="scroll-reveal" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '12px 16px',
                  borderRadius: 14,
                  background: dark ? 'var(--surface)' : 'var(--tint)',
                  border: '1px solid var(--line)',
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{v.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--ink)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>{v.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginTop: 72 }}>
          {stats.map((s, i) => (
            <div key={i} className="scroll-reveal" style={{
              background: dark ? 'var(--surface)' : 'var(--tint)',
              border: '1px solid var(--line)',
              borderRadius: 20,
              padding: '28px 20px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(125,92,194,0.08)',
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
                {s.display ?? <AnimCounter target={s.value} suffix={s.suffix} />}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 6, fontFamily: 'DM Sans, system-ui, sans-serif', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}