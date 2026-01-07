import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const educationData = [
    {
      period: "2024 - 2026",
      title: "Technicien Spécialisé en Développement Web Full Stack",
      institution: "ISTA AIT MELLOUL",
      description: "Formation en technologies front-end modernes et back-end."
    },
    {
      period: "2022 - 2024",
      title: "Technicien en Dessinateur Bâtiment",
      institution: "ISTA INZEGANE",
      description: "Formation technique en dessin et conception de structures bâtiment et urbaines."
    },
    {
      period: "2021 - 2022",
      title: "Formation Metreur",
      institution: "ISTA TASSILA",
      description: "Formation pratique en métreur."
    }
  ]

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Éducation</h2>
        </motion.div>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-date">{item.period}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="institution">{item.institution}</span>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education