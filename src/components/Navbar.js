import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../css/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link"
          activeClass="active"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link"
          activeClass="active"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link"
          activeClass="active"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="education"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link"
          activeClass="active"
        >
          Education
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="nav-link"
          activeClass="active"
        >
          Contact
        </ScrollLink>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
