import { useState, useEffect } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const { dark, toggleDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? dark ? 'rgba(28,28,28,0.96)' : 'rgba(255,255,255,0.96)'
          : dark ? 'rgba(28,28,28,0.9)' : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? `1px solid ${dark ? '#3d2929' : '#FFE8E5'}` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, padding: 0 }}
        >
          <span style={{ color: dark ? '#f0ede8' : '#2F4F4F', fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            Hina Tariq
          </span>
          <span style={{ color: '#FF6F61', fontSize: '1.5rem', lineHeight: 1 }}>.</span>
        </button>

        {/* Center nav (desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? '#FF6F61' : dark ? '#b0b8c1' : '#5A6B7C',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.88rem',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                transition: 'color 0.2s ease',
                position: 'relative',
              })}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#FF6F61' }}
              onMouseLeave={(e) => {
                const isActive = (e.currentTarget as HTMLAnchorElement).getAttribute('aria-current') === 'page'
                ;(e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#FF6F61' : dark ? '#b0b8c1' : '#5A6B7C'
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right: dark toggle + mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={toggleDark}
            style={{
              width: 52,
              height: 28,
              borderRadius: 14,
              background: dark ? '#FF6F61' : '#FFE8E5',
              position: 'relative',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 3,
                left: dark ? 27 : 3,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: dark ? '#fff' : '#FF6F61',
                transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
              }}
            >
              {dark ? '☀️' : '🌙'}
            </div>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: dark ? '#f0ede8' : '#2F4F4F',
              fontSize: 22,
              fontFamily: 'Poppins, sans-serif',
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            padding: '12px 24px 16px',
            borderTop: `1px solid ${dark ? '#3d2929' : '#FFE8E5'}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#FF6F61' : dark ? '#b0b8c1' : '#5A6B7C',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

function Footer() {
  const { dark } = useTheme()
  const navigate = useNavigate()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <footer style={{ background: dark ? '#141010' : '#2F4F4F', padding: '40px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 10 }}>
          <span style={{ color: '#f0ede8', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Poppins, sans-serif' }}>Hina Tariq</span>
          <span style={{ color: '#FF6F61', fontSize: '1.4rem' }}>.</span>
        </div>
        <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: '0.82rem', marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>
          MERN Stack Developer · CS Graduate · Course Instructor
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
          {links.map(({ to, label }) => (
            <button
              key={to}
              onClick={() => navigate(to)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(240,237,232,0.45)',
                fontSize: '0.82rem',
                fontFamily: 'Poppins, sans-serif',
                transition: 'color 0.2s ease',
                padding: 0,
              }}
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#FF6F61' }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = 'rgba(240,237,232,0.45)' }}
            >
              {label}
            </button>
          ))}
        </div>
        <div style={{ paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,237,232,0.3)', fontSize: '0.78rem', fontFamily: 'Poppins, sans-serif' }}>
          © {new Date().getFullYear()} Hina Tariq. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
