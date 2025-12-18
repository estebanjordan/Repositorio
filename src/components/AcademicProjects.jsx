import React, { useEffect, useRef, useState } from 'react';

const AcademicProjects = () => {
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

  const academicProjects = [
    {
      year: '2024',
      title: 'Especialización Avanzada',
      description: 'Ciberseguridad (MinTIC/Universidad Distrital, 50h) y Sistemas Fotovoltaicos (Casa Solar/NABCEP, 60h)',
      icon: '🔐'
    },
    {
      year: '2023',
      title: 'Graduación Ingeniero Mecatrónico',
      description: 'Título profesional de Ingeniero Mecatrónico - CORHUILA. Tarjeta Profesional COPNIA',
      icon: '🏆'
    },
    {
      year: '2023',
      title: 'Certificaciones TICs',
      description: 'Diseño Web con Dreamweaver (SENA), Potencia tu Vida con IA (Cámara de Comercio), Competencias Pedagógicas (SENA)',
      icon: '🌐'
    },
    {
      year: '2022',
      title: 'Diplomado Alta Gerencia',
      description: 'Diplomado en Alta Gerencia y Competitividad - CORHUILA (144 horas)',
      icon: '📋'
    },
    {
      year: '2022',
      title: 'Especialización PLC y Robótica',
      description: 'Integración de PLC en Sistemas Industriales (SENA, 48h) y Robótica Antropomórfica Básica (UDEMY)',
      icon: '🔧'
    },
    {
      year: '2022',
      title: 'Prácticas Docentes',
      description: 'Docente practicante en robótica educativa - Colegio Enrique Olaya Herrera',
      icon: '📚'
    },
    {
      year: '2018-2023',
      title: 'Ingeniería Mecatrónica',
      description: 'Formación profesional en la Corporación Universitaria del Huila (CORHUILA) con énfasis en robótica, automatización y sistemas de control',
      icon: '🎓'
    },
    {
      year: '2016',
      title: 'Primeros Auxilios Cruz Roja',
      description: 'Servicio Social en Primeros Auxilios con la Cruz Roja Colombiana (80 horas)',
      icon: '❤️'
    }
  ];

  return (
    <section id="proyectos-academicos" ref={sectionRef}>
      <h2>Proyectos y Logros Académicos</h2>
      <div className="timeline-scroll-container">
        <div className={`timeline-horizontal ${isVisible ? 'fade-in' : ''}`}>
          <div className="timeline-track"></div>
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className="timeline-item-horizontal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-year-badge">{project.year}</div>
                <div className="timeline-dot-horizontal"></div>
              </div>
              <div className="timeline-card-horizontal">
                <div className="timeline-icon-horizontal">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;