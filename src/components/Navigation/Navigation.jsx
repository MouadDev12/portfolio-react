import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <div className="container nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          MM
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
            <i className="fa fa-home"></i> Accueil
          </a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }}>
            <i className="fa fa-graduation-cap"></i> Éducation
          </a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>
            <i className="fa fa-cogs"></i> Compétences
          </a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
            <i className="fa fa-briefcase"></i> Projets
          </a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
            <i className="fa fa-address-book"></i> Contact
          </a></li>
          <li className="theme-switcher">
            <div className="theme-toggle" onClick={toggleTheme}>
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
              <i className="fas fa-cloud"></i>
              <div className="theme-slider"></div>
            </div>
          </li>
        </ul>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navigation