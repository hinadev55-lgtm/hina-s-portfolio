import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useReveal } from '../components/shared'

export default function Contact() {
  const { dark } = useTheme()
  const { ref, visible } = useReveal(0.1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [valid, setValid] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    setValid(form.name.length > 1 && form.email.includes('@') && form.message.length > 10)
  }, [form])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (valid) {
      setSent(true)
      setTimeout(() => setSent(false), 3500)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const contacts = [
    { icon: '📞', label: 'Phone', value: '03097247896', href: 'tel:03097247896' },
    { icon: '✉️', label: 'Email', value: 'developerhina227@gmail.com', href: 'mailto:developerhina227@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'Hina Tariq', href: 'https://www.linkedin.com/in/hina-tariq-67252b326' },
    { icon: '🏢', label: 'Indeed', value: 'Hina Tariq', href: '#' },
  ]

  return (
    <div style={{ background: dark ? '#1c1c1c' : '#ffffff', minHeight: '100vh', paddingTop: 80 }}>
      {/* Header */}
      <div style={{ background: dark ? '#1e1414' : '#FFF2F0', padding: '64px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F61', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'Poppins, sans-serif' }}>
          Get In Touch
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif', margin: 0, lineHeight: 1.15 }}>
          Let's Work Together
        </h1>
        <p style={{ color: dark ? '#b0b8c1' : '#5A6B7C', marginTop: 12, fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif', maxWidth: 440, margin: '12px auto 0' }}>
          Open to full-stack development roles, freelance projects, and teaching collaborations.
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px 80px' }} ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Left */}
          <div className={`reveal-left ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Photo */}
            <div style={{
              width: '100%', maxWidth: 360, height: 220,
              borderRadius: 24, overflow: 'hidden',
              border: `2px solid ${dark ? '#4a2a2a' : '#FFD0CC'}`,
              boxShadow: dark ? '0 8px 32px rgba(0,0,0,0.35)' : '0 8px 32px rgba(255,182,193,0.25)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=300&fit=crop&auto=format"
                alt="Contact — Hina Tariq"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: dark ? '#f0ede8' : '#2F4F4F', margin: '0 0 4px', fontFamily: 'Poppins, sans-serif' }}>
                Direct Contact
              </h3>
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px',
                    borderRadius: 16,
                    background: dark ? '#272020' : '#FFF2F0',
                    border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: '0 2px 12px rgba(255,111,97,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.transform = 'translateX(4px)'
                    el.style.boxShadow = '0 6px 20px rgba(255,111,97,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.transform = 'translateX(0)'
                    el.style.boxShadow = '0 2px 12px rgba(255,111,97,0.06)'
                  }}
                >
                  <span style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(255,111,97,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {c.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: 11, color: dark ? '#b0b8c1' : '#5A6B7C', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>{c.label}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: dark ? '#f0ede8' : '#2F4F4F', fontFamily: 'Poppins, sans-serif' }}>{c.value}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#FF6F61', fontSize: 14 }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <div style={{
              background: dark ? '#272020' : '#ffffff',
              border: `1px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
              borderRadius: 28,
              padding: 'clamp(24px, 5vw, 44px)',
              boxShadow: '0 8px 40px rgba(255,111,97,0.08)',
            }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: dark ? '#f0ede8' : '#2F4F4F', margin: '0 0 24px', fontFamily: 'Poppins, sans-serif' }}>
                Send a Message 💬
              </h3>

              {sent ? (
                <div style={{
                  padding: '28px', background: 'rgba(255,111,97,0.1)',
                  border: '1px solid rgba(255,111,97,0.25)', borderRadius: 16,
                  textAlign: 'center', animation: 'fadeUp 0.5s ease',
                }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>🎉</div>
                  <div style={{ fontWeight: 700, color: '#FF6F61', marginBottom: 6, fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem' }}>Message Sent!</div>
                  <div style={{ fontSize: '0.87rem', color: dark ? '#b0b8c1' : '#5A6B7C', fontFamily: 'Poppins, sans-serif' }}>I'll get back to you soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                  ].map((field, i) => (
                    <div key={i} className="field-stagger">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: dark ? '#b0b8c1' : '#5A6B7C', display: 'block', marginBottom: 6, fontFamily: 'Poppins, sans-serif' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as 'name' | 'email']}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 12,
                          border: `1.5px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                          background: dark ? '#2a2020' : '#FFF8F7',
                          color: dark ? '#f0ede8' : '#2F4F4F',
                          fontSize: '0.9rem', outline: 'none',
                          fontFamily: 'Poppins, sans-serif',
                          transition: 'border-color 0.2s ease',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = '#FF6F61' }}
                        onBlur={(e) => { e.target.style.borderColor = dark ? '#3d2929' : '#FFD0CC' }}
                      />
                    </div>
                  ))}

                  <div className="field-stagger">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: dark ? '#b0b8c1' : '#5A6B7C', display: 'block', marginBottom: 6, fontFamily: 'Poppins, sans-serif' }}>
                      Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: 12,
                        border: `1.5px solid ${dark ? '#3d2929' : '#FFD0CC'}`,
                        background: dark ? '#2a2020' : '#FFF8F7',
                        color: dark ? '#f0ede8' : '#2F4F4F',
                        fontSize: '0.9rem', outline: 'none',
                        fontFamily: 'Poppins, sans-serif',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#FF6F61' }}
                      onBlur={(e) => { e.target.style.borderColor = dark ? '#3d2929' : '#FFD0CC' }}
                    />
                  </div>

                  <div className="field-stagger">
                    <button
                      type="submit"
                      disabled={!valid}
                      className={valid ? 'pulse-glow' : ''}
                      style={{
                        width: '100%', padding: '14px',
                        borderRadius: 50, border: 'none',
                        background: valid
                          ? 'linear-gradient(135deg, #FF6F61, #FFB6C1)'
                          : dark ? '#3d2929' : '#FFE8E5',
                        color: valid ? '#ffffff' : dark ? '#5A3838' : '#FFB6C1',
                        fontWeight: 700, fontSize: '0.95rem',
                        cursor: valid ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {valid ? 'Send Message ✈️' : 'Fill in all fields to send'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
