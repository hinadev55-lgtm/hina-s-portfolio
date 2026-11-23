import { useState } from 'react'
import ResumeModal from '../components/ResumeModal'
import portrait from './hina-portrait.webp'

const stack = ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'C++']

const portfolioLinks = [
  { to: '#about', title: 'About', detail: 'My computer science background and approach to development.' },
  { to: '#experience', title: 'Experience', detail: 'My work in web development and teaching.' },
  { to: '#skills', title: 'Skills', detail: 'The frameworks, languages, and tools I work with.' },
  { to: '#certifications', title: 'Certifications', detail: 'My credentials and professional training.' },
]

export default function Home() {
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="portfolio-home">
      <section className="portfolio-hero">
        <div className="portfolio-shell hero-grid">
          <div className="hero-copy">
            <h1>Hina Tariq<span>Full-stack developer</span></h1>
            <p className="hero-description">
              I bring 4+ years of experience across full-stack development and technical instruction. I build web applications and design AI-powered workflows that automate repetitive tasks.
              I’m a computer science graduate with experience teaching web development and C++.
            </p>
            <div className="hero-actions">
              <a className="portfolio-button primary-button" href="#contact">Get in touch</a>
              <button className="portfolio-button secondary-button" onClick={() => setShowResume(true)}>View résumé</button>
            </div>
            <a className="hero-social" href="https://www.linkedin.com/in/hina-tariq-67252b326"
              target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <figure className="portrait-frame">
            <div className="portrait-backdrop"><img src={portrait} alt="Hina Tariq" fetchPriority="high" /></div>
            <figcaption><strong>Hina Tariq</strong><span>AI Systems &amp; Automation Engineer</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div className="portfolio-shell stack-layout scroll-reveal">
          <h2 id="stack-title">Tech stack</h2>
          <ul className="stack-list">{stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        </div>
      </section>

      <section className="portfolio-shell explore-section" aria-labelledby="explore-title">
        <h2 id="explore-title" className="scroll-reveal">Explore my portfolio</h2>
        <div className="explore-grid">
          {portfolioLinks.map(({ to, title, detail }) => (
            <a className="explore-card scroll-reveal" key={to} href={to}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </a>
          ))}
        </div>
      </section>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </div>
  )
}
