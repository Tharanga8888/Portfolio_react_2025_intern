import { useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Fade-in on scroll
    const fadeSections = document.querySelectorAll(".fade-section");
    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeSections.forEach(section => fadeObserver.observe(section));

    // Typewriter effect
    const typewriterEl = document.querySelector(".typewriter");
    if (typewriterEl) {
      const words = ["IT Undergraduate ", "Web Developer ", "Tech Enthusiast ", "Fast Learner "];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
          typewriterEl.textContent = currentWord.substring(0, charIndex--);
        } else {
          typewriterEl.textContent = currentWord.substring(0, charIndex++);
        }

        let speed = isDeleting ? 80 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
          speed = 1500;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
      }

      typeEffect();
    }
  }, []); // <-- runs once after initial render

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
