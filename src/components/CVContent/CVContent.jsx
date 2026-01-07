import React from 'react'

const CVContent = () => {
  return (
    <div id="cvContent" style={{ display: 'none' }}>
      <div className="cv-pdf">
        <div className="cv-header">
          <h1>Mouad Mekrech</h1>
          <h2>Développeur Web Full-Stack</h2>
          <p>Email: mouadmekrech12@gmail.com | Téléphone: +212 76 863 63 08 | Localisation: Agadir, Maroc</p>
        </div>
        
        <div className="cv-section">
          <h3>Compétences Techniques</h3>
          <div className="cv-skills">
            <div>
              <div className="cv-skill-item">
                <div className="cv-skill-name">
                  <span>HTML5/CSS3</span>
                  <span>95%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-level" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="cv-skill-item">
                <div className="cv-skill-name">
                  <span>JavaScript</span>
                  <span>88%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-level" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="cv-skill-item">
                <div className="cv-skill-name">
                  <span>React</span>
                  <span>75%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="cv-skill-item">
                <div className="cv-skill-name">
                  <span>PHP</span>
                  <span>82%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-level" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
            <div>
              <div className="cv-skill-item">
                <div className="cv-skill-name">
                  <span>MySQL</span>
                  <span>80%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="cv-skill-item">
                <div className="cv-skill-name">
                  <span>Bootstrap</span>
                  <span>85%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-level" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cv-section">
          <h3>Éducation</h3>
          <div className="cv-item">
            <div className="cv-item-title">Technicien Spécialisé en Développement Web Full Stack</div>
            <div className="cv-item-date">2024 - 2026</div>
            <p>ISTA AIT MELLOUL - Formation en technologies front-end modernes et back-end.</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-title">Technicien en Dessinateur Bâtiment</div>
            <div className="cv-item-date">2022 - 2024</div>
            <p>ISTA INZEGANE - Formation technique en dessin et conception de structures bâtiment et urbaines.</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-title">Formation Metreur</div>
            <div className="cv-item-date">2021 - 2022</div>
            <p>ISTA TASSILA - Formation pratique en métreur.</p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Projets Réalisés</h3>
          <div className="cv-item">
            <div className="cv-item-title">Xreducation Dashboard</div>
            <div className="cv-item-date">2024</div>
            <p>Plateforme d'administration éducative moderne - HTML5, CSS3, TypeScript, Figma, Three.js</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-title">SweetCake Patesserie artisanale</div>
            <div className="cv-item-date">2024</div>
            <p>Application e-commerce avec React + Vite - React, Context API, JavaScript ES6+</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-title">Zest & Co. Premium Drinks Website</div>
            <div className="cv-item-date">2024</div>
            <p>Site web moderne pour boissons artisanales - HTML5, CSS3, JavaScript, Responsive Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVContent