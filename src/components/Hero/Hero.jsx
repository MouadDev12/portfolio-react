import React from 'react'
import { motion } from 'framer-motion'
import html2pdf from 'html2pdf.js'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const downloadCV = () => {
    const element = document.getElementById('cvContent')
    const button = document.getElementById('downloadCV')

    if (!element || !button) return

    const originalText = button.innerHTML
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Génération du PDF...'
    button.disabled = true

    const options = {
      margin: 10,
      filename: 'CV_Mouad_Mekrech.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().set(options).from(element).save().then(() => {
      button.innerHTML = originalText
      button.disabled = false
    }).catch(error => {
      console.error('Erreur:', error)
      button.innerHTML = originalText
      button.disabled = false
      alert('Erreur lors de la génération du PDF')
    })
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BIENVENUE!
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Je suis Mouad Mekrech
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <b>Développeur Web Full-Stack</b>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Stagiaire en dernière année d'Institut Spécialisée de Technologie
            Appliquée (ISTA) AIT MELLOUL, passionné par la création de produits
            digitaux modernes et évolutifs.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              className="btn"
              onClick={() => scrollToSection('contact')}
            >
              Contactez-moi <i className="fas fa-arrow-right"></i>
            </button>
            <button
              className="btn btn-secondary"
              id="downloadCV"
              onClick={downloadCV}
            >
              Télécharger CV <i className="fas fa-download"></i>
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/IMAGES/mouad.png" alt="Mouad Mekrech" className="profile-img" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero