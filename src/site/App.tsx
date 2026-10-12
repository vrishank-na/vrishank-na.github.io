import { useEffect, useState } from 'react'

const socials = {
  github: 'https://github.com/vrishank-na',
  linkedin: 'https://www.linkedin.com/in/vrishank-amembal/',
}
// Add a path such as "/resume.pdf" when a resume is available in public/.
const resumeHref: string | null = null

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* The current page theme still changes. */ }
    setTheme(next)
  }
  return <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
    <span aria-hidden="true" className="theme-icon">{theme === 'light' ? '◐' : '☼'}</span><span className="toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
  </button>
}

function Header() {
  return <header className="topbar"><a className="wordmark" href="#top" aria-label="Vrishank N Amembal, home">V<span>.</span></a>
    <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a><ThemeToggle /></nav>
  </header>
}

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-heading"><span className="eyebrow">{number}</span><h2>{children}</h2></div>
}

function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return <a className="arrow-link" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}<span aria-hidden="true">↗</span></a>
}

function App() {
  useEffect(() => { document.title = 'Vrishank N Amembal — Portfolio' }, [])
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero wrap" id="top">
        <p className="eyebrow hero-kicker"><span className="availability-dot" /> CSE undergraduate · Bengaluru, India</p>
        <h1>Vrishank N<br className="mobile-break" /> <span className="serif">Amembal</span></h1>
        <div className="hero-bottom"><p className="hero-copy">I’m a Computer Science and Engineering undergraduate at PES University, interested in software engineering, machine learning, and building practical systems.</p>
          <div className="hero-actions"><a className="primary-link" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a><div className="social-links"><ArrowLink href={socials.github} external>GitHub</ArrowLink><ArrowLink href={socials.linkedin} external>LinkedIn</ArrowLink></div></div>
        </div>
        <div className="hero-index"><span>Portfolio · 2026</span><span>01 — 09</span></div>
      </section>

      <section className="section wrap projects" id="projects"><SectionHeading number="01 / SELECTED WORK">Projects</SectionHeading>
        <article className="project project-ecg"><div className="project-meta"><span>Capstone · PESU IoT Centre</span><span>01</span></div><div className="project-content"><div><h3>ECG-Based Cardiac<br className="desktop-break" /> Event Detection <i>&</i> Simulation</h3><p className="project-description">An end-to-end system that processes raw ECG signals, identifies cardiac events, and connects those events to a virtual heart simulation.</p><ul className="detail-list"><li>Preprocessed ECG signals and worked on P, QRS, and T wave segmentation.</li><li>Applied machine learning for event detection and linked the output to a Unity heart model.</li></ul><div className="tags"><span>Signal processing</span><span>Machine learning</span><span>Unity</span></div></div>
          <div className="pipeline" aria-label="ECG processing pipeline"><div className="pipeline-step"><span>01</span><b>ECG input</b><small>Raw signal</small></div><span className="pipeline-arrow">→</span><div className="pipeline-step"><span>02</span><b>Process</b><small>Wave segmentation</small></div><span className="pipeline-arrow">→</span><div className="pipeline-step"><span>03</span><b>Detect</b><small>ML event output</small></div><span className="pipeline-arrow">→</span><div className="pipeline-step"><span>04</span><b>Simulate</b><small>Virtual heart</small></div><svg className="ecg-trace" viewBox="0 0 600 54" role="img" aria-label="A simplified ECG waveform"><path d="M0 28h85l12-1 12 1h40l12-2 8 3 10-2 10 1 14 0 10-2 8 2 10-1 12 0 10-2 8 4 6-2 10-1 12 0 14-2 8-1 6 4 8-2 12 0 13 0 9-2 6 3 8-1 14 0h54l12-1 12 1h85" /></svg></div>
        </div></article>
        <article className="project project-energy"><div className="project-meta"><span>IndiaAI Impact Gen-AI Hackathon</span><span>02</span></div><div className="project-content"><div><h3>Short-Term Energy<br className="desktop-break" /> Load Forecasting</h3><p className="project-description">Forecasting how much electricity will be needed in the near term helps make energy supply planning more responsive.</p><p className="project-description">Explored time-series foundation models alongside LightGBM, including model ensembling, to estimate short-term demand.</p><div className="tags"><span>Time-series forecasting</span><span>TSFMs</span><span>LightGBM</span></div></div><div className="placement"><strong>14<sup>th</sup></strong><span>among 3,300+<br />participants</span><i aria-hidden="true">↗</i></div></div></article>
        <article className="project project-3d"><div className="project-meta"><span>3D visualization</span><span>03</span></div><div className="project-content"><div><h3>Campus, seen<br className="desktop-break" /> in three dimensions</h3><p className="project-description">A virtual recreation of the PES University Sports Complex, developed through 3D modelling, scene design, and visualization.</p><div className="tags"><span>Blender</span><span>3D modelling</span><span>Visualization</span></div></div><div className="campus-mark" aria-hidden="true"><span className="campus-ring ring-one"/><span className="campus-ring ring-two"/><span className="campus-ring ring-three"/><span className="campus-court"/><span className="campus-label">PESU<br />SPORTS COMPLEX</span></div></div></article>
      </section>

      <section className="section wrap experience" id="experience"><SectionHeading number="02 / EXPERIENCE">Where I’ve worked</SectionHeading><div className="timeline">
        <article className="timeline-item"><time>JUN — AUG 2026</time><div><h3>Summer Intern <span>— PESU IoT Centre</span></h3><p>Worked on ECG preprocessing, machine learning based cardiac event detection, and P/QRS/T wave segmentation. Integrated ECG-derived events with virtual and physical cardiac simulation.</p></div></article>
        <article className="timeline-item"><time>SEP — OCT 2024</time><div><h3>Event Management Team Member <span>— Embrione Club</span></h3><p>Planned and coordinated club events, handling logistics and on-ground execution as part of a team.</p></div></article>
      </div></section>

      <section className="publication-band"><div className="wrap publication"><span className="eyebrow">03 / PUBLICATION</span><div><h2>R Peak-Centered<br className="mobile-break" /> ECG Delineation</h2><p>Accepted at ICBBE 2026 · Hokkaido, Japan</p><span className="publication-note">Part of my undergraduate capstone project</span></div><span className="accepted">ACCEPTED</span></div></section>

      <section className="section wrap about" id="about"><SectionHeading number="04 / A LITTLE ABOUT ME">About</SectionHeading><div className="about-body"><p className="about-lede">I study computer science at PES University in Bengaluru and enjoy exploring how software can make complex, real-world information easier to work with.</p><p>My projects have taken me from ECG signal processing and energy forecasting to 3D visualization. I’m continuing to build my foundations across machine learning and software development, one practical system at a time.</p></div></section>

      <section className="section wrap toolkit"><SectionHeading number="05 / TOOLKIT">Skills <i>&</i> education</SectionHeading><div className="toolkit-grid"><div className="skill-groups"><div className="skill-row"><h3>Languages</h3><p>Python, C, JavaScript, HTML, CSS</p></div><div className="skill-row"><h3>Data <i>&</i> ML</h3><p>NumPy, scikit-learn, PyTorch, LightGBM</p></div><div className="skill-row"><h3>Development <i>&</i> 3D</h3><p>React, Blender, Unity, OpenGL</p></div><div className="skill-row"><h3>Tools</h3><p>Git, GitHub</p></div></div><div className="education"><span className="eyebrow">EDUCATION</span><h3>B.Tech, Computer Science<br />and Engineering</h3><p>PES University</p><span>2023 — present · Bengaluru, India</span></div></div></section>

      <section className="section wrap beyond"><SectionHeading number="06 / BEYOND THE CLASSROOM">Other things</SectionHeading><div className="beyond-grid"><div><span className="eyebrow">LEADERSHIP</span><p>Vice President, Public Relations <span>— Toastmasters Club</span></p><small>Promotional posters and social media content</small></div><div><span className="eyebrow">EXTRACURRICULAR</span><p>Nautanki Dramatics Team</p><small>Represented PES University at IIT Kharagpur</small></div><div><span className="eyebrow">LEARNING</span><p>Artificial Intelligence and Machine Learning</p><small>Pravega, IISc</small></div><div><span className="eyebrow">LEARNING</span><p>Hands-on Arduino: Real-World Applications</p><small>PESU I/O</small></div></div></section>

      <section className="contact-band" id="contact"><div className="wrap contact"><span className="eyebrow">07 / CONTACT</span><div><h2>Have something<br /><i>in mind?</i></h2><p>I’d be glad to hear from you.</p><a className="email-link" href="mailto:vrishankamembal@gmail.com">vrishankamembal@gmail.com <span aria-hidden="true">↗</span></a></div><div className="contact-socials"><ArrowLink href={socials.github} external>GitHub</ArrowLink><ArrowLink href={socials.linkedin} external>LinkedIn</ArrowLink></div></div></section>
    </main>
    <footer className="footer wrap"><a className="wordmark" href="#top">V<span>.</span></a><span>© {new Date().getFullYear()} Vrishank N Amembal</span><div className="footer-links">{resumeHref && <a href={resumeHref} download>Resume ↓</a>}<a href="#top" className="back-top">Back to top ↑</a></div></footer>
  </>
}

export default App
