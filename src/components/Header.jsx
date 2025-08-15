import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">Rukmin<span>Tharanga</span></div>

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>HOME</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACTS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
