
function About() {

  return (
    <section id="about" className="section about-section fade-section">
        <h2>About Me</h2>
        <div className="about-container">
            <div className="about-image">
                <img src={import.meta.env.BASE_URL +"aboutAssets/me3.png"} alt="Rukmin Tharanga Portrait" />
            </div>

            <div className="about-text">
                <p>
                    Aspiring full-stack web developer with a background in Networking and Mobile Computing, driven by a passion for creating impactful, user-focused digital experiences.
                </p>
                <p>
                    I enjoy building responsive, interactive interfaces using <span className="highlight">React</span>, while also exploring a wide range of technologies and frameworks.
                </p>
                <p>
                    My experience spans both web development and broader tech domains, giving me a versatile edge. I thrive on learning quickly, adapting fast, and contributing meaningfully in dynamic environments.
                </p>

                <a href= {import.meta.env.BASE_URL + "aboutAssets/me3.png/Rukmin_Tharanga_Resume.pdf"} className="btn" download>Download Resume</a>
            </div>
        </div>
    </section>
  )
}

export default About
