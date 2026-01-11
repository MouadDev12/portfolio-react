import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <span>M</span>ouad <span>M</span>ekrech
            </div>
            <p className="footer-tagline">
              Développeur Web Full-Stack passionné par la création d'expériences numériques innovantes et performantes.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Liens Rapides</h3>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Accueil</a></li>
              <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }}>Éducation</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Compétences</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projets</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact & Suivez-moi</h3>
            <ul className="footer-contact-info">
              <li><i className="fas fa-envelope"></i> mouadmekrech12@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Agadir, Ait Melloul, Maroc</li>
            </ul>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/mouad-mekrech-5b1057330/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/MouadDev12" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/itzme.mouad/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mouad Mekrech. Tous droits réservés.</p>
          <p className="made-with">
            Créé avec beaucoup d' <i className="fas fa-heart"></i> et plus de <i className="fas fa-coffee"></i>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer