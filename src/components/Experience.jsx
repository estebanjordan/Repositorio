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
        'Liderazgo y Gestión Administrativa – Coordinación de equipos y supervisión de operaciones.',
        'Mantenimiento y Ensamble de Computadores – Soporte técnico especializado.',
        'Gestión de Inventario Tecnológico – Administración y control de activos informáticos.',
        'Soporte Técnico – Atención presencial y remota en hardware, software y conectividad.',
        'Redes Informáticas – Administración y configuración de redes cableadas e inalámbricas.',
        'Desarrollo Web – Creación y mantenimiento de página corporativa.',
        'Marketing Digital – Desarrollo e implementación de estrategias de posicionamiento.',
        'Control de Calidad – Supervisión de procesos operativos.',
        'Planificación Estratégica – Optimización de recursos y mejora operativa.'
      ],
      technologies: ['Automatización', 'Inteligencia Artificial', 'Mantenimiento Industrial', 'Energía Renovable', 'Máquinas OFFSET'],
      icon: '🏢'
    },
    {
      company: 'AXCOR',
      period: 'Oct 2022 - Ene 2025',
      position: 'Gerente Administrativo',
      responsibilities: [
        'Liderazgo y Gestión Administrativa – Coordinación de equipos y supervisión de operaciones.',
        'Mantenimiento y Ensamble de Computadores – Soporte técnico especializado.',
        'Gestión de Inventario Tecnológico – Administración y control de activos informáticos.',
        'Soporte Técnico – Atención presencial y remota en hardware, software y conectividad.',
        'Redes Informáticas – Administración y configuración de redes cableadas e inalámbricas.',
        'Desarrollo Web – Creación y mantenimiento de página corporativa.',
        'Marketing Digital – Desarrollo e implementación de estrategias de posicionamiento.',
        'Control de Calidad – Supervisión de procesos operativos.',
        'Planificación Estratégica – Optimización de recursos y mejora operativa.'
      ],
      technologies: ['Gestión Administrativa', 'Marketing Digital', 'Liderazgo', 'Planificación Estratégica', 'Control de Calidad'],
      icon: '💼'
    },
    {
      company: 'Colegio Enrique Olaya Herrera',
      period: 'Ago 2022 - Nov 2022',
      position: 'Docente Practicante en Robótica Educativa',
      responsibilities: [
        'Robótica Educativa – Maestro de enseñanza en el área de robótica.',
        'Programación C++ – Desarrollo del curso de lógica de programación.',
        'Microcontroladores – Formación orientada a su utilización práctica.',
        'Metodologías de Investigación Creativa – Aplicación en procesos de aprendizaje tecnológico.',
        'Gestión de Plataformas Educativas - Uso de Moodle para contenidos',
        'Desarrollo de Habilidades Comunicativas - Facilitación del aprendizaje cooperativo'
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