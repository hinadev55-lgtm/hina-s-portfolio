import { useState, type FormEvent } from 'react'
import portrait from './hina-portrait.webp'

const email = 'developerhina227@gmail.com'
const contactLinks = [
  { label: 'Email', value: email, href: 'mailto:' + email },
  { label: 'Phone', value: '03097247896', href: 'tel:03097247896' },
  { label: 'LinkedIn', value: 'Hina Tariq', href: 'https://www.linkedin.com/in/hina-tariq-67252b326' },
]
const emptyForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return

    setSending(true)
    setError('')
    try {
      const response = await fetch(import.meta.env.BASE_URL + 'api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || result?.ok !== true) {
        setError(result?.error || 'Your message could not be sent. Please try again or use the email link.')
        return
      }
      setForm(emptyForm)
      setSent(true)
    } catch {
      setError('Your message could not be sent. Please try again or use the email link.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <header className="contact-header scroll-reveal">
        <h2 id="contact-title">Get in touch</h2>
        <p>Have a project or opportunity in mind? Send me a message.</p>
      </header>
      <div className="portfolio-shell contact-grid">
        <div className="contact-details">
          <div className="portrait-backdrop contact-portrait scroll-reveal">
            <img src={portrait} alt="Hina Tariq" loading="lazy" />
          </div>
          {contactLinks.map(({ label, value, href }) => (
            <a key={label} className="contact-link scroll-reveal" href={href}>
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>

        <div className="contact-panel scroll-reveal">
          <h3>Send a message</h3>
          {sent ? (
            <div>
              <p className="contact-success" role="status">Message sent</p>
              <button className="portfolio-button secondary-button contact-repeat" onClick={() => setSent(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field-stagger">
                Full name
                <input name="name" autoComplete="name" minLength={2} maxLength={100} required
                  value={form.name} readOnly={sending}
                  onChange={(event) => setForm({ ...form, name: event.target.value })} />
              </label>
              <label className="field-stagger">
                Email address
                <input type="email" name="email" autoComplete="email" maxLength={254} required
                  value={form.email} readOnly={sending}
                  onChange={(event) => setForm({ ...form, email: event.target.value })} />
              </label>
              <label className="field-stagger">
                Message
                <textarea name="message" rows={5} minLength={11} maxLength={5000} required
                  value={form.message} readOnly={sending}
                  onChange={(event) => setForm({ ...form, message: event.target.value })} />
              </label>
              <button className="portfolio-button primary-button field-stagger" disabled={sending} type="submit">
                {sending ? 'Sending…' : 'Send message'}
              </button>
              {error && <p className="contact-error" role="alert">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
