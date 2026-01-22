
import { useState } from 'react';

import './App.css';
import bgImg from './assets/darksouls-bg.jpg';

const projects = [
  {
    title: 'Personal Portfolio Website',
    languages: ['React', 'JavaScript', 'CSS', 'Vite'],
    description: 'A portfolio site to showcase my skills, projects, and growth as a developer. Built with React and a custom UI.',
  },
  {
    title: 'Weather App',
    languages: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    description: 'A simple weather app using a public API. Learned about API integration, async data fetching, and responsive design.',
  },
  {
    title: 'UI/UX Case Study',
    languages: ['Figma', 'UX Research', 'Wireframes', 'Prototyping'],
    description: 'A conceptual redesign of a popular app, focusing on user experience improvements and modern UI trends.',
  },
];


function App() {
  const [tab, setTab] = useState('about');

  return (
    <div
      className="portfolio-root"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <nav className="portfolio-nav">
        <button className={tab === 'about' ? 'active' : ''} onClick={() => setTab('about')}>About Me</button>
        <button className={tab === 'projects' ? 'active' : ''} onClick={() => setTab('projects')}>Projects</button>
        <button className={tab === 'growth' ? 'active' : ''} onClick={() => setTab('growth')}>Growth</button>
        <button className={tab === 'contact' ? 'active' : ''} onClick={() => setTab('contact')}>Contact</button>
      </nav>
      <main className="portfolio-main">
        {tab === 'about' && (
          <section className="about-section">
            <h1>Hello, I’m Ralphner</h1>
            <p className="justify">
              I’m a UI/UX enthusiast and front-end developer passionate about creating beautiful, user-centered web experiences. I love exploring new design trends and bringing them to life with code. My goal is to build interfaces that are both visually appealing and highly usable.
            </p>
          </section>
        )}
        {tab === 'projects' && (
          <section className="projects-section">
            <h2>Projects</h2>
            <ul>
              {projects.map((proj) => (
                <li key={proj.title} className="project-card">
                  <h3>{proj.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5em', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.2rem' }}>
                    {proj.languages.map(lang => (
                      <span className="project-language-oval" key={lang}>{lang}</span>
                    ))}
                  </div>
                  <p className="justify">{proj.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {tab === 'growth' && (
          <section className="growth-section">
            <h2>Growth Mindset</h2>
            <p className="justify">
              I’m always learning! Currently, I’m exploring advanced React patterns, accessibility best practices, and animation libraries to make my UIs even more engaging.
            </p>
            <ul className="growth-list">
              <li>Advanced React (Hooks, Context, Performance)</li>
              <li>Accessibility (WCAG, ARIA)</li>
              <li>UI Animation (Framer Motion, CSS Animations)</li>
            </ul>
          </section>
        )}
        {tab === 'contact' && (
          <section className="contact-section">
            <h2>Contact</h2>
            <p className="justify">
              Interested in collaborating, hiring, or just want to chat about design and development? I’d love to hear from you! Feel free to reach out via email or connect with me on GitHub.
            </p>
            <div className="contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ralphner.capangpangan001@gmail.com"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Me
              </a>
              <a href="https://github.com/eizo-332/my-portfolio" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </div>
          </section>
        )}
      </main>
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Ralphner. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
