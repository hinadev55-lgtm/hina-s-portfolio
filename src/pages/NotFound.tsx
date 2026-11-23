import { useNavigate } from 'react-router'
import { useTheme } from '../context/ThemeContext'

export default function NotFound() {
  const { dark } = useTheme()
  const navigate = useNavigate()

  return (
    <div style={{
      background: 'var(--page)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 24,
      fontFamily: 'DM Sans, system-ui, sans-serif',
    }}>
      <div style={{ textAlign: 'center', padding: '0 24px' }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>🌸</div>
        <h1 style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--accent)', margin: '0 0 8px', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 12px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--muted)', marginBottom: 32, fontSize: '0.95rem' }}>
          This page doesn't exist — but my portfolio does.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 32px',
            borderRadius: 50,
            border: 'none',
            background: 'var(--button)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            fontFamily: 'DM Sans, system-ui, sans-serif',
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
