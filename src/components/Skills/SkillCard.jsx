import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, type, index, inView }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.percentage)
      }, index * 200 + 300)
      
      return () => clearTimeout(timer)
    }
  }, [inView, skill.percentage, index])

  return (
    <motion.div
      className={`skill-card ${type}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="skill-icon">
        <i className={skill.icon}></i>
      </div>
      <h3 className="skill-name">{skill.name}</h3>
      <div className="skill-percentage">{skill.percentage}%</div>
      <div className="skill-level">
        <motion.div 
          className="skill-progress" 
          style={{ 
            backgroundColor: skill.color,
            width: `${animatedWidth}%`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedWidth}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
      <p className="skill-description">{skill.description}</p>
      <div className="skill-tags">
        {skill.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="skill-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCard