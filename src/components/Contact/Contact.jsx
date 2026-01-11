import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  // Initialiser EmailJS avec votre clé publique
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY") // Remplacez par votre clé publique
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.consent) {
      alert("Veuillez accepter le consentement pour continuer")
      return
    }

    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",     // Remplacez par votre SERVICE_ID
        "YOUR_TEMPLATE_ID",    // Remplacez par votre TEMPLATE_ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "mouadmekrech12@gmail.com", // Email de destination
          date: new Date().toLocaleDateString('fr-FR')
        },
        "YOUR_PUBLIC_KEY"      // Remplacez par votre PUBLIC_KEY
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        alert("Message envoyé avec succès ✅")
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          consent: false
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      setSubmitStatus('error')
      alert("Erreur lors de l'envoi du message ❌")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact">
      <div className="contact-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Restons en contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            N'hésitez pas à me contacter pour discuter de vos projets
          </motion.p>
        </div>
      </div>

      <div className="contact-section" ref={ref}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Mes Coordonnées</h2>
              
              <div className="contact-item">
                <h3><i className="fas fa-envelope"></i> Email</h3>
                <p><a href="mailto:mouadmekrech12@gmail.com">mouadmekrech12@gmail.com</a></p>
              </div>

              <div className="contact-item">
                <h3><i className="fas fa-phone"></i> Téléphone</h3>
                <p><a href="tel:+212768636308">+212 76 863 63 08</a></p>
              </div>

              <div className="contact-item">
                <h3><i className="fas fa-map-marker-alt"></i> Localisation</h3>
                <p>AGADIR, AITMELLOUL.MAROC</p>
              </div>

              <div className="contact-item">
                <h3><i className="fas fa-share-alt"></i> Suivez-moi</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/mouad-mekrech-5b1057330/" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/MouadDev12" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/itzme.mouad/" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form fade-in"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="section-title">Envoyez-moi un message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Nom complet *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="form-input" 
                      placeholder="Votre nom" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="form-input" 
                      placeholder="votre@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Sujet *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    className="form-input" 
                    placeholder="Sujet de votre message" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    className="form-input form-textarea" 
                    placeholder="Décrivez votre projet ou votre demande..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="consent">J'accepte que mes données soient utilisées pour me recontacter</label>
                </div>

                <button 
                  type="submit" 
                  className="btn-contact"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Envoyer le message
                    </>
                  )}
                </button>

                {/* Message de statut */}
                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <i className="fas fa-check-circle"></i>
                    Message envoyé avec succès !
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <i className="fas fa-exclamation-circle"></i>
                    Erreur lors de l'envoi. Veuillez réessayer.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div 
        className="map-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <iframe
          id="map"
          src="https://www.google.com/maps?q=Ait%20Melloul%20Maroc&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  )
}

export default Contact