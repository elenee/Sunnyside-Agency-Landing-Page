import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img 
      src="/Sunnyside-Agency-Landing-Page/images/logo.svg"
      alt="Sunnyside logo"
      className="navbar-logo" />

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="contact-btn">Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <img src="/images/icon-hamburger.svg" alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
