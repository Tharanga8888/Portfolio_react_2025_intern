function Hero() {

  return (
    <section className="hero" id="hero">
        <div className="hero-overlay"></div>
        
        <div className="hero-text">
            <h1>Hi, I'm <span>Rukmin Tharanga</span></h1>
            <h2 className="typewriter"></h2>
            <p>Passionate about technology, eager to learn, and driven to create impactful solutions.</p>
            <a href="#about" className="btn hero-btn">Let's Start</a>

            <div className="scroll-indicator">
                <span></span>
            </div>
        </div>
    </section>
  )
}

export default Hero
