import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useTheme } from '../context/ThemeContext'
import { StaggerText } from '../components/shared'
import ResumeModal from '../components/ResumeModal'
import profile2 from "./profile2.jpeg";



// ─── Tech Ticker ──────────────────────────────────────────────────────────────
function Ticker() {
  const { dark } = useTheme()
  const techs = [
    { name: 'MongoDB', icon: '🍃' }, { name: 'Express.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' },
    { name: 'C++', icon: '⚙️' }, { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'TypeScript', icon: '🔷' }, { name: 'Redux', icon: '🔄' },
    { name: 'Next.js', icon: '▲' }, { name: 'REST APIs', icon: '🔗' },
  ]
  const doubled = [...techs, ...techs]

  return (
    <div style={{
      background: dark ? '#1a1212' : '#FFF2F0',
      borderTop: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
      borderBottom: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
      padding: '18px 0',
      overflow: 'hidden',
    }}>
      <div className="ticker-track">
        {doubled.map((t, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              margin: '0 12px',
              padding: '8px 20px',
              borderRadius: 50,
              background: dark ? '#2e2020' : '#ffffff',
              border: `1px solid ${dark ? '#4a2a2a' : '#FFD0CC'}`,
              color: dark ? '#FFB6C1' : '#5A6B7C',
              fontWeight: 500,
              fontSize: '0.87rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(255,111,97,0.08)',
              flexShrink: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <span>{t.icon}</span>
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const { dark } = useTheme()
  const navigate = useNavigate()
  const [showResume, setShowResume] = useState(false)

  const navCards = [
    { label: 'About Me', to: '/about', icon: '👩‍💻', desc: 'My story & background' },
    { label: 'Experience', to: '/experience', icon: '💼', desc: 'Work & teaching timeline' },
    { label: 'Skills', to: '/skills', icon: '⚡', desc: 'Tech stack & proficiency' },
    { label: 'Certifications', to: '/certifications', icon: '🎖️', desc: 'Verified credentials' },
    { label: 'Contact', to: '/contact', icon: '✉️', desc: 'Let\'s work together' },
  ]

  return (
    <>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      {/* Hero */}
      <section
        style={{
          background: dark ? '#1c1c1c' : '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 96,
          paddingBottom: 64,
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Eyebrow badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 50,
                background: dark ? '#2e2020' : '#FFF2F0',
                border: '1px solid rgba(255,111,97,0.3)',
                color: '#FF6F61',
                fontSize: 12,
                fontWeight: 600,
                width: 'fit-content',
                fontFamily: 'Poppins, sans-serif',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF6F61', display: 'inline-block', animation: 'pulseGlow 2s infinite' }} />
                Available for opportunities
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                color: dark ? '#f0ede8' : '#2F4F4F',
                lineHeight: 1.15,
                fontFamily: 'Poppins, sans-serif',
                margin: 0,
              }}>
                <StaggerText text="Hi, I'm Hina Tariq —" />
                <br />
                <span style={{ color: '#FF6F61' }}>
                  <StaggerText text="MERN Stack Specialist" />
                </span>
                <br />
                <StaggerText text="& CS Graduate" />
              </h1>

              {/* Subtext */}
              <p style={{
                color: dark ? '#b0b8c1' : '#5A6B7C',
                maxWidth: 480,
                lineHeight: 1.75,
                fontSize: '0.96rem',
                animation: 'wordFadeUp 0.7s 0.8s ease both',
                opacity: 0,
                fontFamily: 'Poppins, sans-serif',
                margin: 0,
              }}>
                BS Computer Science (3.4 CGPA) · 1+ Year Web Development &amp; C++ Teaching Experience. Building performant full-stack web apps with the MERN ecosystem.
              </p>

              {/* Contact badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, animation: 'fadeUp 0.6s 1s ease both', opacity: 0 }}>
                {[
                  { icon: '✉️', text: 'developerhina227@gmail.com' },
                  { icon: '📞', text: '03097247896' },
                ].map((b, i) => (
                  <span key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 16px',
                    borderRadius: 50,
                    background: dark ? '#2e2020' : '#FFF2F0',
                    border: `1px solid ${dark ? '#4a2a2a' : '#FFD0CC'}`,
                    color: dark ? '#FFB6C1' : '#5A6B7C',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    fontFamily: 'Poppins, sans-serif',
                  }}>
                    {b.icon} {b.text}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, animation: 'fadeUp 0.6s 1.1s ease both', opacity: 0 }}>
                <button
                  onClick={() => setShowResume(true)}
                  className="pulse-glow"
                  style={{
                    padding: '12px 28px',
                    borderRadius: 50,
                    border: 'none',
                    background: 'linear-gradient(135deg, #FF6F61, #FFB6C1)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'transform 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
                >
                  📄 View Resume
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  style={{
                    padding: '12px 28px',
                    borderRadius: 50,
                    border: '2px solid #FF6F61',
                    background: 'transparent',
                    color: '#FF6F61',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement
                    btn.style.background = '#FF6F61'
                    btn.style.color = '#fff'
                    btn.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement
                    btn.style.background = 'transparent'
                    btn.style.color = '#FF6F61'
                    btn.style.transform = 'scale(1)'
                  }}
                >
                  Contact Me →
                </button>
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, animation: 'fadeUp 0.6s 1.2s ease both', opacity: 0 }}>
                <a
                  href="https://www.linkedin.com/in/hina-tariq-67252b326"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: '#0077B5',
                    textDecoration: 'none',
                    fontSize: '0.87rem',
                    fontWeight: 500,
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077B5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <span style={{ color: dark ? '#3d2929' : '#FFD0CC' }}>·</span>
                <a
                  href="#"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#2557A7', textDecoration: 'none', fontSize: '0.87rem', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}
                >
                  🏢 Indeed Profile
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: -20,
                  borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
                  border: '2px solid rgba(255,111,97,0.2)',
                  animation: 'breathe 4s ease-in-out infinite',
                }} />
                <div style={{
                  position: 'absolute', inset: -8,
                  borderRadius: '45% 55% 40% 60% / 60% 40% 55% 45%',
                  border: '1.5px solid rgba(255,182,193,0.3)',
                  animation: 'breathe 4s 0.8s ease-in-out infinite',
                }} />
                <div
                  className="breathe-glow"
                  style={{
                    width: 'clamp(260px, 36vw, 420px)',
                    height: 'clamp(320px, 44vw, 520px)',
                    borderRadius: '55% 45% 50% 50% / 40% 40% 60% 60%',
                    overflow: 'hidden',
                    border: '4px solid rgba(255,111,97,0.15)',
                  }}
                >
                  <img
                    src={profile2}
                    alt="Hina Tariq — Professional Photo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(255,111,97,0.12))', pointerEvents: 'none' }} />
                </div>

                {/* Floating badges */}
                <div style={{
                  position: 'absolute', bottom: 20, right: -20,
                  background: dark ? '#272020' : '#fff',
                  border: '1px solid #FFD0CC',
                  borderRadius: 16,
                  padding: '10px 16px',
                  boxShadow: '0 8px 24px rgba(255,111,97,0.15)',
                  display: 'flex', alignItems: 'center', gap: 8,
                  animation: 'fadeUp 0.6s 1.4s ease both', opacity: 0,
                }}>
                  <span style={{ fontSize: 20 }}>⚡</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif' }}>MERN Stack</div>
                    <div style={{ fontSize: 10, color: dark ? '#b0b8c1' : '#5A6B7C', fontFamily: 'Poppins, sans-serif' }}>Full Stack Dev</div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute', top: 30, left: -24,
                  background: '#FF6F61',
                  borderRadius: 14,
                  padding: '8px 14px',
                  boxShadow: '0 4px 16px rgba(255,111,97,0.35)',
                  display: 'flex', alignItems: 'center', gap: 6,
                  animation: 'fadeUp 0.6s 1.3s ease both', opacity: 0,
                }}>
                  <span style={{ fontSize: 14 }}>🎓</span>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>3.4 CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Quick nav cards */}
      <section style={{ background: dark ? '#1e1414' : '#FFF2F0', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F61', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Poppins, sans-serif' }}>
              Explore
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif', margin: 0 }}>
              Discover My Portfolio
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {navCards.map((card, i) => (
              <button
                key={i}
                onClick={() => navigate(card.to)}
                style={{
                  background: dark ? '#272020' : '#ffffff',
                  border: `1.5px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                  borderRadius: 20,
                  padding: '24px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                  fontFamily: 'Poppins, sans-serif',
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 32px rgba(255,111,97,0.14)'
                  el.style.borderColor = '#FF6F61'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  el.style.borderColor = dark ? '#3d2929' : '#FFD0CC'
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: dark ? '#f0ede8' : '#2F4F4F', marginBottom: 4 }}>{card.label}</div>
                <div style={{ fontSize: '0.78rem', color: dark ? '#b0b8c1' : '#5A6B7C' }}>{card.desc}</div>
                <div style={{ marginTop: 16, color: '#FF6F61', fontSize: '0.82rem', fontWeight: 600 }}>View →</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
