import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useReveal } from '../components/shared'

const devCards = [
  {
    role: 'MERN Stack Developer',
    company: 'Full Stack Web Development',
    duration: '1 Year',
    color: '#61DAFB',
    points: [
      'Built full-stack web applications using MongoDB, Express.js, React, and Node.js',
      'Developed scalable REST APIs with JWT authentication and middleware architecture',
      'Implemented responsive UIs with Tailwind CSS and advanced React state management (Redux)',
      'Integrated third-party APIs and payment gateways into production applications',
      'Deployed applications using cloud services and configured CI/CD pipelines',
    ],
  },
]

const teachCards = [
  {
    role: 'Course Instructor — C++ & MERN',
    company: 'University / Private Institute',
    duration: '1 Year',
    color: '#FFB6C1',
    points: [
      'Delivered C++ Programming Fundamentals curriculum to university-level students',
      'Taught MERN Stack development from React basics to full REST API integration',
      'Created structured, project-based coursework and graded assessments',
      'Provided 1-on-1 mentorship and code reviews to 50+ students',
      'Achieved consistently high student satisfaction and completion rates',
    ],
  },
]

export default function Experience() {
  const { dark } = useTheme()
  const barRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, visible } = useReveal(0.1)

  useEffect(() => {
    if (visible && barRef.current) barRef.current.classList.add('visible')
  }, [visible])

  return (
    <div style={{ background: dark ? '#1c1c1c' : '#ffffff', minHeight: '100vh', paddingTop: 80 }}>
      {/* Header */}
      <div style={{ background: dark ? '#1e1414' : '#FFF2F0', padding: '64px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F61', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'Poppins, sans-serif' }}>
          Journey
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif', margin: 0, lineHeight: 1.15 }}>
          Experience &amp; Teaching
        </h1>
        <p style={{ color: dark ? '#b0b8c1' : '#5A6B7C', marginTop: 12, fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif' }}>
          A dual track of building and teaching — simultaneously.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }} ref={sectionRef}>
        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', marginBottom: 32, gap: 0 }}>
          <div style={{ textAlign: 'right', paddingRight: 24 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 50,
              background: 'rgba(97,218,251,0.1)', border: '1px solid rgba(97,218,251,0.25)',
              color: '#61DAFB', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'Poppins, sans-serif',
            }}>
              ⚛️ Development
            </span>
          </div>
          <div />
          <div style={{ paddingLeft: 24 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 50,
              background: 'rgba(255,182,193,0.15)', border: '1px solid rgba(255,182,193,0.3)',
              color: '#FFB6C1', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'Poppins, sans-serif',
            }}>
              🧑‍🏫 Teaching
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', gap: 0, alignItems: 'start' }}>
          {/* Dev */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingRight: 24 }}>
            {devCards.map((card, i) => (
              <div
                key={i}
                className={`timeline-card left-card ${visible ? 'visible' : ''}`}
                style={{
                  background: dark ? '#272020' : '#FFF2F0',
                  border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                  borderRadius: 20,
                  padding: '24px',
                  boxShadow: '0 4px 24px rgba(255,111,97,0.07)',
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: dark ? '#f0ede8' : '#2F4F4F', margin: 0, fontFamily: 'Poppins, sans-serif' }}>{card.role}</h3>
                    <p style={{ fontSize: '0.8rem', color: dark ? '#b0b8c1' : '#5A6B7C', margin: '4px 0 0', fontFamily: 'Poppins, sans-serif' }}>{card.company}</p>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: '#FF6F61',
                    background: 'rgba(255,111,97,0.1)', border: '1px solid rgba(255,111,97,0.2)',
                    borderRadius: 20, padding: '2px 10px', flexShrink: 0, fontFamily: 'Poppins, sans-serif',
                  }}>{card.duration}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.84rem', color: dark ? '#b0b8c1' : '#5A6B7C', lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }}>
                      <span style={{ color: '#FF6F61', flexShrink: 0, marginTop: 2 }}>▸</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Center bar */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
            <div style={{ position: 'relative', width: 2, background: dark ? '#3d2929' : '#FFD0CC', borderRadius: 1, height: 280 }}>
              <div
                ref={barRef}
                className="timeline-bar-fill"
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  background: 'linear-gradient(to bottom, #FF6F61, #FFB6C1)',
                  borderRadius: 1,
                }}
              />
              <div style={{
                position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                width: 14, height: 14, borderRadius: '50%',
                background: '#FF6F61', boxShadow: '0 0 0 4px rgba(255,111,97,0.2)',
              }} />
              <div style={{
                position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)',
                width: 10, height: 10, borderRadius: '50%',
                background: '#FFB6C1', boxShadow: '0 0 0 3px rgba(255,182,193,0.2)',
              }} />
            </div>
          </div>

          {/* Teaching */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingLeft: 24 }}>
            {teachCards.map((card, i) => (
              <div
                key={i}
                className={`timeline-card right-card ${visible ? 'visible' : ''}`}
                style={{
                  background: dark ? '#272020' : '#FFF2F0',
                  border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                  borderRadius: 20,
                  padding: '24px',
                  boxShadow: '0 4px 24px rgba(255,111,97,0.07)',
                  transitionDelay: `${i * 0.15 + 0.1}s`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: dark ? '#f0ede8' : '#2F4F4F', margin: 0, fontFamily: 'Poppins, sans-serif' }}>{card.role}</h3>
                    <p style={{ fontSize: '0.8rem', color: dark ? '#b0b8c1' : '#5A6B7C', margin: '4px 0 0', fontFamily: 'Poppins, sans-serif' }}>{card.company}</p>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: '#FFB6C1',
                    background: 'rgba(255,182,193,0.15)', border: '1px solid rgba(255,182,193,0.3)',
                    borderRadius: 20, padding: '2px 10px', flexShrink: 0, fontFamily: 'Poppins, sans-serif',
                  }}>{card.duration}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {card.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.84rem', color: dark ? '#b0b8c1' : '#5A6B7C', lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }}>
                      <span style={{ color: '#FFB6C1', flexShrink: 0, marginTop: 2 }}>▸</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
