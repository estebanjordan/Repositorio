import React, { useEffect, useRef, useState } from 'react';

const AITools = () => {
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

  const aiTools = [
    {
      name: 'ChatGPT',
      category: 'Conversacional',
      description: 'Asistente de IA para generación de texto, código y análisis',
      icon: '💬',
      color: '#4a8a5c',
      level: 85,
      url: 'https://chat.openai.com'
    },
    {
      name: 'Gemini',
      category: 'Conversacional',
      description: 'IA multimodal de Google para texto, código e imágenes',
      icon: '✨',
      color: '#5280b0',
      level: 80,
      url: 'https://gemini.google.com'
    },
    {
      name: 'Claude',
      category: 'Conversacional',
      description: 'IA avanzada de Anthropic para análisis y desarrollo',
      icon: '🤖',
      color: '#a87860',
      level: 90,
      url: 'https://claude.ai'
    },
    {
      name: 'Midjourney',
      category: 'Generación de Imágenes',
      description: 'IA generativa para creación de imágenes artísticas y diseño visual',
      icon: '🎨',
      color: '#6d5a82',
      level: 75,
      url: 'https://www.midjourney.com'
    },
    {
      name: 'Perplexity',
      category: 'Búsqueda',
      description: 'Motor de búsqueda potenciado por IA',
      icon: '🔍',
      color: '#3d7575',
      level: 70,
      url: 'https://www.perplexity.ai'
    }
  ];

  const categories = ['Todas', 'Conversacional', 'Generación de Imágenes', 'Búsqueda'];
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredTools = activeCategory === 'Todas' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  return (
    <section id="ai-tools" ref={sectionRef}>
      <h2>Inteligencias Artificiales</h2>
      <p className="ai-tools-subtitle">
        Herramientas de IA que domino y utilizo en mi flujo de trabajo diario
      </p>

      <div className="ai-categories">
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

      <div className={`ai-tools-grid ${isVisible ? 'fade-in' : ''}`}>
        {filteredTools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ai-tool-card"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--tool-color': tool.color
            }}
          >
            <div className="ai-tool-header">
              <div className="ai-tool-icon" style={{ background: tool.color }}>
                {tool.icon}
              </div>
              <span className="ai-tool-category">{tool.category}</span>
            </div>
            
            <div className="ai-tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>

            <div className="ai-tool-footer">
              <div className="ai-tool-level">
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

            <div className="ai-tool-link-indicator">
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

export default AITools;