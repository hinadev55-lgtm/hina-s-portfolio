import express from 'express'
import { rateLimit } from 'express-rate-limit'
import nodemailer from 'nodemailer'

export function createContactApp(env) {
  const app = express()
  app.disable('x-powered-by')

  const { SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO } = env
  const port = Number(env.SMTP_PORT || 587)
  const secure = port === 465
  const ready = SMTP_HOST && MAIL_FROM && CONTACT_TO &&
    Number.isInteger(port) && port > 0 && port <= 65535 &&
    Boolean(SMTP_USER) === Boolean(SMTP_PASS)
  const transporter = ready && nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    requireTLS: !secure && env.SMTP_REQUIRE_TLS !== 'false',
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 15000,
  })

  const limit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: { error: 'Too many messages. Please try again in 15 minutes.' },
  })

  app.post('/api/contact', limit, express.json({ limit: '16kb' }), async (req, res) => {
    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : ''
    const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
    const message = typeof req.body?.message === 'string' ? req.body.message.trim() : ''
    if (name.length < 2 || name.length > 100 ||
      email.length > 254 || !/^[^\s<>,;:"@]+@[^\s<>,;:"@]+\.[^\s<>,;:"@]+$/.test(email) ||
      message.length < 11 || message.length > 5000) {
      return res.status(400).json({ error: 'Enter a valid name, email address, and message.' })
    }
    if (!transporter) {
      return res.status(503).json({ error: 'The contact form is temporarily unavailable. Please use the email link.' })
    }

    try {
      const result = await transporter.sendMail({
        from: MAIL_FROM,
        to: CONTACT_TO,
        replyTo: { address: email, name },
        subject: 'New portfolio inquiry',
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      })
      if (!result.accepted.length) throw new Error('SMTP rejected the recipient')
      return res.json({ ok: true })
    } catch (error) {
      console.error('Contact mail delivery failed:', error.code ?? error.name)
      return res.status(502).json({ error: 'Your message could not be sent. Please try again or use the email link.' })
    }
  })
  app.all('/api/contact', (_req, res) => res.set('Allow', 'POST').status(405).json({ error: 'Use POST to send a message.' }))
  app.use((error, _req, res, next) => {
    if (res.headersSent) return next(error)
    if (error.status === 413) return res.status(413).json({ error: 'Your message is too large.' })
    if (error.status === 400) return res.status(400).json({ error: 'Invalid message data.' })
    return next(error)
  })

  return app
}
