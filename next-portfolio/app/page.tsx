export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Lokesh Sannidhi home">LS<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:lokeshsannidhi118@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> Available for opportunities · 2026</p>
          <h1>Building useful things with <em>data.</em></h1>
          <p className="hero-intro">I&apos;m Lokesh, an AI and Data Science student who turns messy questions into clear, thoughtful digital experiences.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <span>↘</span></a>
            <a className="text-link" href="mailto:lokeshsannidhi118@gmail.com">Get in touch <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract portrait illustration of Lokesh" role="img">
          <div className="art-label">AI / DS<br />2022—26</div>
          <div className="portrait-shape"><span>LS</span></div>
          <div className="art-stamp">Curious<br />by default</div>
          <div className="art-line line-one" /><div className="art-line line-two" />
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>PYTHON <span>*</span> ANALYTICS <span>*</span> GENERATIVE AI <span>*</span> PRODUCT THINKING <span>*</span> PYTHON <span>*</span> ANALYTICS <span>*</span></div></div>

      <section className="section shell" id="work">
        <div className="section-topline"><p className="section-number">01 / Selected work</p><p className="section-note">A few places where curiosity became something practical.</p></div>
        <div className="work-grid">
          <article className="project project-featured">
            <div className="project-visual visual-book"><span className="visual-tag">COMMUNITY / 01</span><div className="book-stack"><i /><i /><i /></div><span className="visual-title">BOOK<br />BANK</span></div>
            <div className="project-meta"><div><h2>Book Bank</h2><p>Connecting book donors with learners who need them.</p></div><span className="project-arrow">↗</span></div>
            <div className="tags"><span>Web platform</span><span>Social impact</span></div>
          </article>
          <article className="project project-small">
            <div className="project-visual visual-tableau"><span className="visual-tag">DATA STORY / 02</span><div className="bars"><i /><i /><i /><i /><i /></div><span className="visual-title">FREEDOM<br />INDEX</span></div>
            <div className="project-meta"><div><h2>Economic Freedom</h2><p>Interactive storytelling with Tableau.</p></div><span className="project-arrow">↗</span></div>
            <div className="tags"><span>Tableau</span><span>Data viz</span></div>
          </article>
          <article className="project project-small">
            <div className="project-visual visual-ai"><span className="visual-tag">RESEARCH / 03</span><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="ai-core">AI</div><span className="visual-title">GEN<br />AI</span></div>
            <div className="project-meta"><div><h2>Generative AI</h2><p>Learning how models think, evaluate, and create.</p></div><span className="project-arrow">↗</span></div>
            <div className="tags"><span>Internship</span><span>Model evaluation</span></div>
          </article>
        </div>
      </section>

      <section className="section about-section shell" id="about">
        <div className="section-topline"><p className="section-number">02 / A little about me</p><p className="section-note">The person behind the projects.</p></div>
        <div className="about-grid">
          <div><h2 className="display-heading">I like the space<br />between <em>ideas</em> and<br />impact.</h2></div>
          <div className="about-copy"><p>I&apos;m currently pursuing a B.Tech in Artificial Intelligence and Data Science at Seshadri Rao Gudlavalleru Engineering College. I enjoy learning in public, exploring new tools, and making complex information feel more human.</p><p>My sweet spot is where technical thinking meets communication: building dashboards, shaping data stories, and finding the simple next step inside a complicated problem.</p><a className="text-link" href="mailto:lokeshsannidhi118@gmail.com">More about my journey <span>↗</span></a></div>
        </div>
        <div className="detail-grid">
          <div><p className="detail-label">Education</p><p className="detail-value">B.Tech · AI &amp; Data Science<br /><small>2022—2026 · CGPA 8.7</small></p></div>
          <div><p className="detail-label">Currently learning</p><p className="detail-value">Python · SQL · Power BI<br /><small>Generative AI · Tableau</small></p></div>
          <div><p className="detail-label">Based in</p><p className="detail-value">Elurupadu, Andhra Pradesh<br /><small>Open to remote collaboration</small></p></div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <p className="section-number">03 / Start a conversation</p>
        <h2>Have a good question?<br /><em>Let&apos;s make something.</em></h2>
        <a className="contact-email" href="mailto:lokeshsannidhi118@gmail.com">lokeshsannidhi118@gmail.com <span>↗</span></a>
        <div className="contact-footer"><span>Lokesh Sannidhi © 2026</span><div><a href="https://github.com/lokesh-sannidhi-181" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/lokesh-sannidhi" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </section>
    </main>
  );
}
