import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { useTheme } from '../context/ThemeContext'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Layout() {
  const { dark, toggleDark } = useTheme()
  const { pathname } = useLocation()
  const header = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (pathname !== '/') return

    const sections = links.map(({ id }) => document.getElementById(id)).reverse()
    function updateActiveSection() {
      const offset = (header.current?.offsetHeight ?? 0) + 32
      const current = sections.find((section) => section && section.getBoundingClientRect().top <= offset)
      setActive(current?.id ?? 'home')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [pathname])

  const anchorBase = pathname === '/' ? '' : '/'

  return (
    <>
      <a className="skip-link" href="#portfolio-main">Skip to content</a>
      <header className="site-header" ref={header}>
        <div className="site-header-inner">
          <a className="site-brand" href={`${anchorBase}#home`} onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">HT</span>
            Hina Tariq
          </a>
          <nav className="site-nav" id="portfolio-navigation" data-open={open} aria-label="Main navigation">
            {links.map(({ id, label }) => (
              <a key={id} href={`${anchorBase}#${id}`} aria-current={pathname === '/' && active === id ? 'location' : undefined}
                onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button type="button" className="theme-toggle" onClick={toggleDark}
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
              <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
            </button>
            <button type="button" className="menu-toggle" aria-controls="portfolio-navigation"
              aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>
      <main id="portfolio-main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="portfolio-shell footer-grid">
          <div>
            <a className="site-brand" href={`${anchorBase}#home`}><span className="brand-mark" aria-hidden="true">HT</span>Hina Tariq</a>
            <p>Full-stack Developer · AI Systems &amp; Automation Engineer</p>
          </div>
          <small>© {new Date().getFullYear()} Hina Tariq</small>
        </div>
      </footer>
    </>
  )
}
