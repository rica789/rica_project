import React, { useState } from 'react';
import './Portfolio.css'; // Import your CSS here

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio-root">
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="brand-badge" aria-hidden="true"></div>
            <span>RICA MAE BAUTISTA</span>
          </div>
          <button 
            className="menu-btn"
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          > 
            ☰
          </button>
      
          <nav 
            className={`nav-links ${isMenuOpen ? 'open' : ''}`} 
            aria-label="Primary"
          >
            <a href="#home">HOME</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#reflection">REFLECTION</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME / ABOUT ME */}
        <section id="home" className="container hero">
          <div>
            <div className="profile-image">
              <img src="profile.png" alt="Profile" />
            </div>
            <span className="pill">About Me</span>
            <h1>Hello! I'm Rica, an IT student and dreaming graduate.</h1>
            <p>
             "I believe that great design is invisible—it just works. As an aspiring UI/UX Designer, I am driven by a deep curiosity about how people interact with technology. My goal isn't just to make things look beautiful, but to advocate for the user at every turn, transforming complex frustrations into seamless, intuitive digital journeys."
            </p>

            
            <div className="hero-card"> 
              <p><strong>Biggest Accomplishment:</strong> Achieved an academic excellence award</p>
               <p><strong>Biggest Accomplishment:</strong> Developed A fully functional Mobile application for last semester's Project (MindForge App).</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Skills</span>
                <h2 className="title">Programming Tools</h2>
              </div>
              <div className="subtitle">Technologies I use to make my projects</div>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Programming Languages</h3>
                <p>Languages I frequently use in projects.</p>
                <div className="tag-row">
                  {['HTML', 'CSS', 'JavaScript'].map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </article>

              <article className="card">
                <h3>System Visual Design</h3>
                <p>I create clean, intuitive interfaces where clarity is the priority.</p>
                <div className="tag-row">
                  {['Unity UI', 'UI Design', 'UX Design', 'AutoDesk Sketch', 'Figma'].map(design => (
                    <span key={design} className="tag">{design}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Portfolio</span>
                <h2 className="title">Projects</h2>
              </div>
              <div className="subtitle">Academic and personal projects</div>
            </div>

            <div className="cards">
              <article class="card">
          <h3>Capstone Project</h3>
          <p>On-going academic project.</p>
          <p><strong>Role:</strong>Lead Developer</p>
          <p><strong>Technologies:</strong> Unity, C#, Blender, Autodesk Sketch</p>
        </article>

        <article class="card">
          <h3>3rd Year-1st Semester Research Project (MindForge App)</h3>
          <p>Developed a research project for class activity.</p>
          <p><strong>Role:</strong>Research Leader</p>
          <p><strong>Technologies:</strong> Unity, C#, Microsoft Word</p>
        </article>

            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section id="reflection">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Reflection</span>
                <h2 className="title">My Thoughts & Learnings</h2>
              </div>
               <div class="subtitle">Self-assessment and future goals</div>
            </div>
            <div class="cards">
        <article class="card">
          <h3>Technologies Used & Why</h3>
          <p>Web development combines a backend (PHP/Node.js) and database (MySQL) for data processing and storage with a frontend (HTML/CSS/JS) for graphics and interaction.</p>
        </article>

        
        <article class="card">
          <h3>Most Challenging Parts</h3>
          <p>It's a never-ending problem to manage the technological limitations of school technology while guaranteeing smooth database connectivity and cross-platform file pathing.</p>
        </article>

        <article class="card">
          <h3>Easiest Parts</h3>
          <p>Because of my consistent background, HTML architecture and UI layout refinement came natural to me.</p>
        </article>

                  
                  
        <article class="card">
          <h3>Future Applications I Want to Build</h3>
          <p>committed to creating effective instructional software and high-utility productivity tools that address real-world problems and satisfy changing business technological needs.</p>
        </article>

        <article class="card">
          <h3>Technologies I Want to Learn</h3>
          <p>"Specializing in AI implementation, high-performance backend frameworks like Node.js and cross-platform mobile development."</p>
        </article>

      </div>
 

          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;