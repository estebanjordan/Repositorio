import React, { useEffect, useRef, useState } from 'react';

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tools = [
    {
        name: 'Arduino IDE',
        category: 'IDE',
        description: 'Entorno de desarrollo para programación de microcontroladores Arduino',
        icon: '🔌',
        color: '#3d7a7d',
        level: 90,
        url: 'https://www.arduino.cc/en/software'
    },
    {
        name: 'MATLAB',
        category: 'Simulación',
        description: 'Plataforma de cálculo numérico y programación para ingeniería',
        icon: '📐',
        color: '#4a7a94',
        level: 80,
        url: 'https://www.mathworks.com/products/matlab.html'
    },
    {
        name: 'FreeDFD',
        category: 'Simulación',
        description: 'Herramienta para creación de diagramas de flujo de datos',
        icon: '📊',
        color: '#6b70a8',
        level: 75,
        url: 'https://freedfd.sourceforge.net'
    },
    {
        name: 'SolidWorks',
        category: 'CAD',
        description: 'Software de diseño asistido por computadora para modelado 3D',
        icon: '🔧',
        color: '#b86b5a',
        level: 75,
        url: 'https://www.solidworks.com'
    },
    {
        name: 'Solid Edge',
        category: 'CAD',
        description: 'Software de diseño CAD 3D para ingeniería mecánica',
        icon: '⚙️',
        color: '#5a8fa8',
        level: 70,
        url: 'https://solidedge.siemens.com'
    },
    {
        name: 'Adobe Dreamweaver',
        category: 'Diseño Web',
        description: 'Herramienta para diseño y desarrollo de sitios web',
        icon: '🌐',
        color: '#9e7a94',
        level: 80,
        url: 'https://www.adobe.com/products/dreamweaver.html'
    },
    {
        name: 'GitHub',
        category: 'Desarrollo',
        description: 'Plataforma de control de versiones y colaboración de código',
        icon: '🐙',
        color: '#4d4d5e',
        level: 75,
        url: 'https://github.com'
    },
    {
        name: 'Adobe Photoshop',
        category: 'Diseño',
        description: 'Software de edición de imágenes y diseño gráfico profesional',
        icon: '🎨',
        color: '#5294b8',
        level: 70,
        url: 'https://www.adobe.com/products/photoshop.html'
    },
    {
        name: 'Zoom',
        category: 'Comunicación',
        description: 'Plataforma de videoconferencias y reuniones virtuales',
        icon: '📹',
        color: '#5282b0',
        level: 90,
        url: 'https://zoom.us'
    },
    {
        name: 'Google Meet',
        category: 'Comunicación',
        description: 'Servicio de videollamadas y reuniones de Google',
        icon: '🎥',
        color: '#4a9485',
        level: 90,
        url: 'https://meet.google.com'
    },
    {
        name: 'Moodle',
        category: 'Educación',
        description: 'Plataforma de aprendizaje virtual y gestión de cursos',
        icon: '📚',
        color: '#b87d4a',
        level: 85,
        url: 'https://moodle.org'
    },
    {
        name: 'Microsoft Office',
        category: 'Productividad',
        description: 'Suite de herramientas ofimáticas para documentos y presentaciones',
        icon: '📄',
        color: '#a86850',
        level: 90,
        url: 'https://www.microsoft.com/microsoft-365'
    }
    ];

  const categories = ['Todas', 'IDE', 'Simulación', 'CAD', 'Diseño Web', 'Desarrollo', 'Diseño', 'Comunicación', 'Educación', 'Productividad'];
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredTools = activeCategory === 'Todas' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section id="herramientas" ref={sectionRef}>
      <h2>Herramientas y Software</h2>
      <p className="tools-subtitle">
        Software y herramientas que utilizo en mi desarrollo diario
      </p>

      <div className="tools-categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`tools-grid ${isVisible ? 'fade-in' : ''}`}>
        {filteredTools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-card"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--tool-color': tool.color
            }}
          >
            <div className="tool-header">
              <div className="tool-icon" style={{ background: tool.color }}>
                {tool.icon}
              </div>
              <span className="tool-category">{tool.category}</span>
            </div>
            
            <div className="tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>

            <div className="tool-footer">
              <div className="tool-level">
                <span className="level-label">Dominio</span>
                <div className="level-bar">
                  <div 
                    className="level-progress"
                    style={{ 
                      width: isVisible ? `${tool.level}%` : '0%',
                      background: tool.color
                    }}
                  ></div>
                </div>
                <span className="level-percentage">{tool.level}%</span>
              </div>
            </div>

            <div className="tool-link-indicator">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="no-results">
          <p>No hay herramientas en esta categoría</p>
        </div>
      )}
    </section>
  );
};

export default Tools;