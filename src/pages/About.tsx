import { useTheme } from '../context/ThemeContext'
import { useReveal, AnimCounter } from '../components/shared'
import '../components/Layout'
import profile1 from "./profile1.jpeg";

export default function About() {
  const { dark } = useTheme()
  const { ref, visible } = useReveal(0.1)

  const stats = [
    { value: 34, suffix: '', label: 'CGPA · 3.4 / 4.0', icon: '🎓', display: '3.4' },
    { value: 1.5, suffix: '+', label: 'Year Web Dev', icon: '💻', display: null },
    { value: 2, suffix: '+', label: 'Year Teaching', icon: '🧑‍🏫', display: null },
    { value: 50, suffix: '+', label: 'Students Taught', icon: '👩‍🎓', display: null },
  ]

  return (
    <div style={{ background: dark ? '#1c1c1c' : '#ffffff', minHeight: '100vh', paddingTop: 80 }}>
      {/* Page header */}
      <div style={{ background: dark ? '#1e1414' : '#FFF2F0', padding: '64px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F61', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'Poppins, sans-serif' }}>
          Get to know me
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif', margin: 0, lineHeight: 1.15 }}>
          About Me
        </h1>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }} ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          
          {/* Photo Section with Black Head Gap */}
          <div className={`reveal-left ${visible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              
              {/* Main Outer Frame */}
              <div style={{
                width: 'clamp(240px, 32vw, 380px)',
                height: 'clamp(300px, 40vw, 480px)',
                borderRadius: '40px 80px 40px 80px',
                overflow: 'hidden',
                border: `3px solid ${dark ? '#4a2a2a' : '#FFD0CC'}`,
                boxShadow: dark ? '8px 8px 32px rgba(0,0,0,0.4)' : '8px 8px 40px rgba(255,182,193,0.3)',
                background: '#000000', // Black background for the gap around head
                padding: '20px 14px 0 14px', // Creates the black space above head and sides
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                <img
                  src={profile1}
                  alt="Hina Tariq — About"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', // Picture ko cutout ki tarah fit karega black gap ke sath
                    objectPosition: 'bottom center',
                  }}
                />
              </div>

              {/* Bottom Left Accent Shape */}
              <div style={{
                position: 'absolute', bottom: -16, left: -16,
                width: 80, height: 80,
                borderRadius: '0 40px 0 40px',
                background: 'rgba(255,111,97,0.15)',
                border: '2px solid rgba(255,111,97,0.25)',
                zIndex: -1,
              }} />

              {/* Top Right Floating Badge */}
              <div style={{
                position: 'absolute', top: -12, right: -12,
                width: 56, height: 56,
                borderRadius: '50%',
                background: '#FF6F61',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
                boxShadow: '0 4px 16px rgba(255,111,97,0.4)',
                zIndex: 2,
              }}>
                👩‍💻
              </div>

            </div>
          </div>

          {/* Bio */}
          <div className={`reveal-right ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F61', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>
                My Story
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif', margin: 0, lineHeight: 1.2 }}>
                Bridging Code &amp; Clarity
              </h2>
            </div>
            
            {/* Paragraph 1 */}
            <p style={{ color: dark ? '#b0b8c1' : '#5A6B7C', lineHeight: 1.85, fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif', margin: 0, textAlign: 'justify' }}>
              I'm a passionate full-stack developer with a strong foundation in computer science and a love for building clean, scalable web applications. My expertise in the MERN stack allows me to craft seamless end-to-end experiences — from responsive React frontends to robust Node.js/Express APIs backed by MongoDB.
            </p>

            {/* Paragraph 2 */}
            <p style={{ color: dark ? '#b0b8c1' : '#5A6B7C', lineHeight: 1.85, fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif', margin: 0, textAlign: 'justify' }}>
              My C++ background sharpened my algorithmic thinking and problem-solving approach. As a course instructor, I've taught both C++ fundamentals and MERN development, turning complex concepts into accessible, practical knowledge for students.
            </p>

            {/* Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '🎯', title: 'Clean Architecture', desc: 'Scalable, maintainable codebases' },
                { icon: '📚', title: 'Continuous Learner', desc: 'Always exploring new technologies' },
                { icon: '🤝', title: 'Collaborative Mindset', desc: 'Thrives in team environments' },
              ].map((v, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '12px 16px',
                  borderRadius: 14,
                  background: dark ? '#272020' : '#FFF2F0',
                  border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{v.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif' }}>{v.title}</div>
                    <div style={{ fontSize: '0.8rem', color: dark ? '#b0b8c1' : '#5A6B7C', fontFamily: 'Poppins, sans-serif' }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginTop: 72 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: dark ? '#272020' : '#FFF2F0',
              border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
              borderRadius: 20,
              padding: '28px 20px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(255,111,97,0.08)',
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FF6F61', lineHeight: 1, fontFamily: 'Poppins, sans-serif' }}>
                {s.display ?? <AnimCounter target={s.value} suffix={s.suffix} />}
              </div>
              <div style={{ fontSize: '0.8rem', color: dark ? '#b0b8c1' : '#5A6B7C', marginTop: 6, fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}