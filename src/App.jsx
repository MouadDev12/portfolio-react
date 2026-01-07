import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CVContent from './components/CVContent/CVContent'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <CVContent />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default Appp