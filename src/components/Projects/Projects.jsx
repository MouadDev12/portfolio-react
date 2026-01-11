import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "📊Xreducation Dashboard",
      image: "/IMAGES/Xreducation Dashboard.png",
      role: "💻 Frontend Engineer /UI-UX",
      description: "Une plateforme d'administration éducative moderne développée, conçue pour gérer des cours, étudiants, revenus et statistiques dans un environnement clair.",
      technologies: ["HTML5", "CSS3", "TypeScript", "Figma", "Three.js"]
    },
    {
      title: "🍰SweetCake Patesserie artisanale",
      image: "/IMAGES/SweetCake Patesserie artisanale.png",
      role: "⚛️ React Frontend Developer",
      description: "SweetCake est une application e-commerce moderne permettant de présenter des produits de pâtisserie artisanale et de gérer un panier de commande dynamique.",
      technologies: ["React", "Vite", "Context API", "JavaScript", "HTML5", "CSS3", "Font Awesome", "Responsive Design"]
    },
    {
      title: "🍹Zest & Co. — Premium Drinks Website",
      image: "/IMAGES/Zest & Co. — Premium Drinks Website.png",
      role: "🧑‍💻 Frontend Developer",
      description: "Zest & Co. est un site web moderne et interactif dédié à la présentation et à la vente de boissons artisanales premium.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Font Awesome — icônes", "Animations et transitions"]
    },
    {
      title: "🏆 CAN 2025 - Application Web",
      image: "/IMAGES/can2025.png",
      role: "🎨 UI Designer",
      description: "Une application web moderne et responsive pour suivre la Coupe d'Afrique des Nations 2025 au Maroc.",
      technologies: ["React", "Redux Toolkit", "CSS3", "React Router DOM", "Responsive Design", "ESLint"]
    },
    {
      title: "📚 Gestionnaire de Bibliothèque Personnelle",
      image: "/IMAGES/gestion livre.png",
      role: "🌐 Web App Frontend Developer",
      description: "Une application web moderne et intuitive pour gérer votre collection de livres.",
      technologies: ["React", "Redux Toolkit", "CSS3", "Responsive Design","Thème adaptatif", "Interface moderne"]
    },
    {
      title: "👟 Nike Store - Application E-commerce React",
      image: "/IMAGES/Nike Store.png",
      role: "🛍️ E-commerce Frontend Developer",
      description: "Une plateforme e-commerce performante et évolutive dédiée à la vente de produits Nike.",
      technologies: ["React", "Redux Toolkit", "React Redux","Redux Slices",  "CSS3", "Responsive Design", "Testing Library", "API Mock"]
    }
  ]

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Mes Projets</h2>
          <p>Quelques-uns des projets sur lesquels j'ai travaillé</p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <img 
                  src={project.image} 
                  width="100%" 
                  height="100%" 
                  alt={`Projet ${index + 1}`}
                  className="project-image"
                />
                <span className="project-role">{project.role}</span>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects