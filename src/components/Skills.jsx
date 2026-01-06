import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillsData = [
    {
      category: 'Robótica',
      icon: '🤖',
      color: '#4a6d82',
      gradient: 'linear-gradient(135deg, #4a6d82, #5d8399)',
      skills: [
        { name: 'Robótica Antropomórfica', level: 85, icon: '🦾' },
        { name: 'Sensores y Actuadores', level: 88, icon: '📡' },
        { name: 'Control de Movimiento', level: 70, icon: '🎮' },
        { name: 'Diseño Mecánico', level: 80, icon: '⚙️' }
      ]
    },
    {
      category: 'Automatización',
      icon: '⚙️',
      color: '#4d6b6b',
      gradient: 'linear-gradient(135deg, #4d6b6b, #5f8282)',
      skills: [
        { name: 'PLC', level: 85, icon: '🔧' },
        { name: 'Sistemas SCADA', level: 78, icon: '📊' },
        { name: 'Control Industrial', level: 82, icon: '🏭' },
        { name: 'Instrumentación', level: 80, icon: '📏' }
      ]
    },
    {
      category: 'Programación',
      icon: '💻',
      color: '#566a8f',
      gradient: 'linear-gradient(135deg, #566a8f, #6b82ab)',
      skills: [
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'JavaScript', level: 75, icon: '🟨' },
        { name: 'C/C++', level: 78, icon: '⚡' },
        { name: 'MATLAB', level: 75, icon: '📐' },
        { name: 'Arduino', level: 85, icon: '🔌' }
      ]
    },
    {
      category: 'Energía Solar',
      icon: '☀️',
      color: '#b8923d',
      gradient: 'linear-gradient(135deg, #b8923d, #cba555)',
      skills: [
        { name: 'Sistemas Fotovoltaicos', level: 80, icon: '🔆' },
        { name: 'Diseño de Instalaciones', level: 75, icon: '📐' },
        { name: 'Energías Renovables', level: 78, icon: '🌱' },
        { name: 'Certificación NABCEP', level: 70, icon: '📜' }
      ]
    },
    {
      category: 'Ciberseguridad',
      icon: '🔐',
      color: '#4d7a68',
      gradient: 'linear-gradient(135deg, #4d7a68, #5f9480)',
      skills: [
        { name: 'Seguridad Informática', level: 75, icon: '🛡️' },
        { name: 'Protección de Datos', level: 72, icon: '🔒' },
        { name: 'Análisis de Vulnerabilidades', level: 70, icon: '🔍' },
        { name: 'Redes Seguras', level: 68, icon: '🌐' }
      ]
    },
    {
      category: 'Diseño Web',
      icon: '🌐',
      color: '#7d6b85',
      gradient: 'linear-gradient(135deg, #7d6b85, #9682a0)',
      skills: [
        { name: 'Adobe Dreamweaver', level: 80, icon: '🎨' },
        { name: 'HTML/CSS', level: 78, icon: '📄' },
        { name: 'Diseño Responsivo', level: 75, icon: '📱' }
      ]
    },
    {
      category: 'Inteligencia Artificial',
      icon: '🧠',
      color: '#3d5c6b',
      gradient: 'linear-gradient(135deg, #3d5c6b, #4f7382)',
      skills: [
        { name: 'Machine Learning', level: 75, icon: '📈' },
        { name: 'Procesamiento de Datos', level: 78, icon: '📊' },
        { name: 'Visión Artificial', level: 72, icon: '👁️' },
        { name: 'Automatización con IA', level: 70, icon: '🤖' }
      ]
    },
    {
      category: 'Gestión y Liderazgo',
      icon: '📋',
      color: '#8f6b58',
      gradient: 'linear-gradient(135deg, #8f6b58, #a8826e)',
      skills: [
        { name: 'Gerencia Administrativa', level: 85, icon: '💼' },
        { name: 'Gestión de Proyectos', level: 82, icon: '📅' },
        { name: 'Marketing Digital', level: 75, icon: '📣' },
        { name: 'Pedagogía', level: 80, icon: '📚' }
      ]
    },
    {
      category: 'Oficios Prácticos',
      icon: '🛠️',
      color: '#73604a',
      gradient: 'linear-gradient(135deg, #73604a, #8a7660)',
      skills: [
        { name: 'Carpintería', level: 75, icon: '🪚' },
        { name: 'Redes Eléctricas Hogareñas', level: 70, icon: '💡' },
        { name: 'Mantenimiento General', level: 78, icon: '🔨' }
      ]
    }
  ];

  return (
    <section id="habilidades" ref={sectionRef}>
      <h2>Habilidades Técnicas</h2>
      <div className={`skills-grid-enhanced ${isVisible ? 'fade-in' : ''}`}>
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className="skill-card-enhanced"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-card-header-enhanced" style={{ background: category.gradient }}>
              <span className="skill-icon-enhanced">{category.icon}</span>
              <h3>{category.category}</h3>
            </div>
            <div className="skill-card-body-enhanced">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item-enhanced">
                  <div className="skill-item-header">
                    <div className="skill-name-container">
                      <span className="skill-tech-icon">{skill.icon}</span>
                      <span className="skill-name-enhanced">{skill.name}</span>
                    </div>
                    <span className="skill-level-enhanced">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-enhanced">
                    <div 
                      className="skill-progress-enhanced"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        background: category.gradient,
                        transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      <div className="skill-progress-shine"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;