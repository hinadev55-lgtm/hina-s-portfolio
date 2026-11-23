import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useReveal } from '../components/shared'

const skillTabs: Record<string, { name: string; level?: number; icon: string; focus: string }[]> = {
  'MERN Stack': [
    { name: 'React', level: 98, icon: '⚛️', focus: 'Hooks, Redux, Context API' },
    { name: 'Node.js', level: 92, icon: '🟢', focus: 'Express, REST APIs, Auth' },
    { name: 'MongoDB', level: 95, icon: '🍃', focus: 'Aggregation, Mongoose' },
    { name: 'Express.js', level: 96, icon: '⚡', focus: 'Middleware, Routing, JWT' },
    { name: 'Next.js', level: 90, icon: '▲', focus: 'SSR, SSG, App Router' },
    { name: 'TypeScript', level: 98, icon: '🔷', focus: 'Types, Interfaces, Generics' },
    { name: 'Redux', level: 99, icon: '🔄', focus: 'Toolkit, Thunk, Selectors' },
    { name: 'Tailwind CSS', level: 100, icon: '🎨', focus: 'Responsive, Utility-first' },
  ],
  'C++ & Core CS': [
    { name: 'C++', level: 100, icon: '⚙️', focus: 'OOP, Templates, STL' },
    { name: 'Data Structures', level: 99, icon: '📊', focus: 'Arrays, Trees, Graphs, Heaps' },
    { name: 'Algorithms', level: 100, icon: '🔍', focus: 'Sorting, Dynamic Programming' },
    { name: 'OOP Design', level: 99, icon: '🧩', focus: 'Patterns, SOLID, Clean Code' },
    { name: 'Problem Solving', level: 100, icon: '🧠', focus: 'Competitive Programming' },
  ],
  'AI Systems & Automation': [
    { name: 'AI Workflow Design', icon: '◇', focus: 'Multi-step workflows, routing, and approval steps' },
    { name: 'LLM Integration', icon: '◇', focus: 'Prompt design, structured outputs, and model APIs' },
    { name: 'API & Webhook Automation', icon: '◇', focus: 'Event triggers, service integrations, and data mapping' },
    { name: 'Automation Reliability', icon: '◇', focus: 'Retries, error handling, and workflow monitoring' },
  ],
  'Tools & Dev': [
    { name: 'Git & GitHub', level: 97, icon: '🔀', focus: 'Branching, PRs, CI/CD' },
    { name: 'VS Code', level: 100, icon: '📝', focus: 'Extensions, Debugging' },
    { name: 'Postman', level: 95, icon: '🧪', focus: 'API Testing, Collections' },
    { name: 'Microsoft Office', level: 100, icon: '📋', focus: 'Word, Excel, PowerPoint' },
    { name: 'Figma (basic)', level: 100, icon: '🎭', focus: 'UI wireframing, handoff' },
  ],
}

export default function Skills() {
  const { dark } = useTheme()
  const [activeTab, setActiveTab] = useState('MERN Stack')
  const [key, setKey] = useState(0)
  const { ref, visible } = useReveal(0.1)

  const handleTab = (tab: string) => {
    setActiveTab(tab)
    setKey((k) => k + 1)
  }

  const current = skillTabs[activeTab]

  return (
    <div style={{ background: 'var(--page)' }}>
      {/* Header */}
      <div className="scroll-reveal" style={{ background: 'var(--tint)', padding: '64px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'DM Sans, system-ui, sans-serif' }}>
          Expertise
        </p>
        <h2 id="skills-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--ink)', fontFamily: 'DM Sans, system-ui, sans-serif', margin: 0, lineHeight: 1.15 }}>
          Skills &amp; Proficiency
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: 12, fontSize: '0.95rem', fontFamily: 'DM Sans, system-ui, sans-serif' }}>
          Full-stack development, AI systems and automation, and computer science.
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 80px' }} ref={ref}>
        {/* Tabs */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          {Object.keys(skillTabs).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              aria-pressed={activeTab === tab}
              style={{
                padding: '10px 22px',
                borderRadius: 50,
                border: `2px solid ${activeTab === tab ? 'var(--accent)' : 'var(--line)'}`,
                background: activeTab === tab ? 'var(--button)' : 'var(--surface)',
                color: activeTab === tab ? '#fff' : 'var(--muted)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                fontFamily: 'DM Sans, system-ui, sans-serif',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div key={key} className="tab-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
          {current.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-entry scroll-reveal"
              style={{
                background: dark ? 'var(--surface)' : 'var(--tint)',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: '20px',
                boxShadow: '0 4px 20px rgba(125,92,194,0.06)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                animationDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 32px rgba(125,92,194,0.14)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 20px rgba(125,92,194,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 24 }}>{skill.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.93rem', color: 'var(--ink)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>{skill.name}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>{skill.focus}</div>
                </div>
                {skill.level !== undefined && <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent)', fontFamily: 'DM Sans, system-ui, sans-serif' }}>{skill.level}%</span>}
              </div>
              {skill.level !== undefined && <div style={{ height: 6, background: 'var(--line)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))',
                  borderRadius: 3,
                  transformOrigin: 'left',
                  animation: 'skill-meter .75s ease-out both',
                }} />
              </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
