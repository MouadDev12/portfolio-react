import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SkillCard from './SkillCard'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const technicalSkills = [
    {
      icon: "fab fa-html5",
      name: "HTML5",
      percentage: 95,
      color: "#e34f26",
      description: "Maîtrise des balises sémantiques, accessibilité, formulaires avancés et intégration d'API.",
      tags: ["Sémantique", "Accessibilité", "API"]
    },
    {
      icon: "fab fa-css3-alt",
      name: "CSS3",
      percentage: 90,
      color: "#1572b6",
      description: "Flexbox, Grid, animations, transitions, design responsive et préprocesseurs (Sass).",
      tags: ["Flexbox", "Grid", "Responsive"]
    },
    {
      icon: "fab fa-bootstrap",
      name: "Bootstrap",
      percentage: 85,
      color: "#7952b3",
      description: "Utilisation avancée du framework, personnalisation et création de composants.",
      tags: ["Framework", "Responsive", "Composants"]
    },
    {
      icon: "fab fa-js-square",
      name: "JavaScript",
      percentage: 88,
      color: "#f7df1e",
      description: "ES6+, manipulation du DOM, AJAX, programmation asynchrone et concepts POO.",
      tags: ["ES6+", "DOM", "Async"]
    },
    {
      icon: "fab fa-php",
      name: "PHP",
      percentage: 82,
      color: "#777bb4",
      description: "Développement backend, programmation orientée objet et création d'APIs REST.",
      tags: ["Backend", "POO", "API REST"]
    },
    {
      icon: "fas fa-database",
      name: "MySQL",
      percentage: 80,
      color: "#4479a1",
      description: "Conception de bases de données, requêtes complexes, optimisation et administration.",
      tags: ["BDD", "Requêtes", "Optimisation"]
    },
    {
      icon: "fab fa-react",
      name: "React",
      percentage: 75,
      color: "#61dafb",
      description: "Composants fonctionnels, hooks, gestion d'état et intégration d'APIs.",
      tags: ["Composants", "Hooks", "État"]
    }
  ]

  const generalSkills = [
    {
      icon: "fas fa-comments",
      name: "Communication",
      percentage: 90,
      color: "#e74c3c",
      description: "Capacité à exprimer clairement des idées techniques à des publics variés.",
      tags: ["Présentation", "Écoute", "Clarté"]
    },
    {
      icon: "fas fa-puzzle-piece",
      name: "Résolution de problèmes",
      percentage: 95,
      color: "#e74c3c",
      description: "Approche méthodique pour identifier et résoudre des défis techniques complexes.",
      tags: ["Analyse", "Logique", "Créativité"]
    },
    {
      icon: "fas fa-users",
      name: "Travail d'équipe",
      percentage: 88,
      color: "#e74c3c",
      description: "Collaboration efficace dans des environnements multi-disciplinaires.",
      tags: ["Collaboration", "Adaptabilité", "Respect"]
    },
    {
      icon: "fas fa-tasks",
      name: "Gestion de projet",
      percentage: 80,
      color: "#e74c3c",
      description: "Planification, organisation et suivi des projets dans les délais impartis.",
      tags: ["Planification", "Organisation", "Délais"]
    },
    {
      icon: "fas fa-lightbulb",
      name: "Créativité",
      percentage: 85,
      color: "#e74c3c",
      description: "Capacité à proposer des solutions innovantes et des designs originaux.",
      tags: ["Innovation", "Design", "Originalité"]
    },
    {
      icon: "fas fa-sync-alt",
      name: "Adaptation",
      percentage: 92,
      color: "#e74c3c",
      description: "Facilité à m'adapter aux nouvelles technologies et environnements de travail.",
      tags: ["Flexibilité", "Apprentissage", "Évolution"]
    }
  ]

  return (
    <div id="skills">
      {/* Compétences Techniques */}
      <section className="skills-section section" ref={ref}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Compétences Techniques
          </motion.h2>
          <div className="cards-container">
            {technicalSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                skill={skill} 
                type="technical" 
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Générales */}
      <section className="skills-section section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Compétences Générales
          </motion.h2>
          <div className="cards-container">
            {generalSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                skill={skill} 
                type="general" 
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills