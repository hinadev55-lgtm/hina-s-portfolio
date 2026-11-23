import { useLayoutEffect } from 'react'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Certifications from './Certifications'
import Contact from './Contact'

export default function Portfolio() {
  // The browser can scroll native anchor clicks. On initial render the
  // section may not have existed yet, including after a legacy redirect.
  useLayoutEffect(() => {
    const section = document.getElementById(window.location.hash.slice(1))
    section?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <div className="portfolio-section" id="home" tabIndex={-1}><Home /></div>
      <section className="portfolio-section" id="about" aria-labelledby="about-title" tabIndex={-1}><About /></section>
      <section className="portfolio-section" id="experience" aria-labelledby="experience-title" tabIndex={-1}><Experience /></section>
      <section className="portfolio-section" id="skills" aria-labelledby="skills-title" tabIndex={-1}><Skills /></section>
      <section className="portfolio-section" id="certifications" aria-labelledby="certifications-title" tabIndex={-1}><Certifications /></section>
      <section className="portfolio-section" id="contact" aria-labelledby="contact-title" tabIndex={-1}><Contact /></section>
    </>
  )
}
