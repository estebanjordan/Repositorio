import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Grupo Empresarial Colombia GED SAS',
      period: '2023 - Actualidad',
      position: 'Ingeniero Mecatrónico / Accionista',
      responsibilities: [
        'Liderazgo del área de producción de publicidad, optimizando procesos y garantizando calidad en entregas.',
        'Mantenimiento preventivo y correctivo de máquinas OFFSET, implementando soluciones con Inteligencia Artificial.',
        'Apoyo en proyectos de energía renovable y sistemas fotovoltaicos para reducción de costos operativos.',
        'Participación activa en la toma de decisiones estratégicas como accionista de la empresa.',
        'Implementación de automatización y sistemas tecnológicos para mejorar la eficiencia operativa.'
      ],
      technologies: ['Automatización', 'Inteligencia Artificial', 'Mantenimiento Industrial', 'Energía Renovable', 'Máquinas OFFSET'],
      icon: '🏢'
    },
    {
      company: 'AXCOR',
      period: 'Oct 2022 - Ene 2025',
      position: 'Gerente Administrativo',
      responsibilities: [
        'Aplicación de conocimientos en mantenimiento y habilidades de liderazgo para garantizar el funcionamiento eficiente de la empresa.',
        'Desarrollo de estrategias de marketing que aumentaron significativamente la visibilidad y rentabilidad de la empresa.',
        'Gestión administrativa integral y coordinación de equipos de trabajo.',
        'Implementación de mejoras operativas y optimización de recursos.',
        'Supervisión de operaciones diarias y control de calidad.'
      ],
      technologies: ['Gestión Administrativa', 'Marketing Digital', 'Liderazgo', 'Planificación Estratégica', 'Control de Calidad'],
      icon: '💼'
    },
    {
      company: 'Colegio Enrique Olaya Herrera',
      period: 'Ago 2022 - Nov 2022',
      position: 'Docente Practicante en Robótica Educativa',
      responsibilities: [
        'Diseño y aplicación de métodos educativos efectivos en el área de robótica.',
        'Contribución al mejoramiento del aprendizaje de los estudiantes mediante metodologías innovadoras.',
        'Desarrollo de habilidades pedagógicas y comunicativas en entornos educativos.',
        'Fomento del crecimiento de habilidades en robótica y programación entre los estudiantes.',
        'Implementación de plataformas educativas como Moodle para gestión de contenidos.'
      ],
      technologies: ['Robótica Educativa', 'Arduino', 'Metodología Pedagógica', 'TICs', 'Moodle'],
      icon: '🎓'
    }
  ];

  return (
    <section id="experiencia" ref={sectionRef}>
      <h2>Experiencia Profesional</h2>
      <div className={`experience-timeline ${isVisible ? 'fade-in' : ''}`}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{exp.company}</h3>
                  <h4>{exp.position}</h4>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              
              <div className="experience-section">
                <h5 className="experience-subtitle">Responsabilidades</h5>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-section">
                <h5 className="experience-subtitle">Tecnologías Implementadas</h5>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="experience-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;