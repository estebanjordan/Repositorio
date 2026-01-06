import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Sistema de Control con PLC',
      description: 'Implementación de sistema de control industrial utilizando PLC para automatización de procesos de manufactura.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['PLC', 'Automatización', 'Control Industrial'],
      link: '#'
    },
    {
      title: 'Robot Antropomórfico',
      description: 'Diseño y desarrollo de brazo robótico con control de movimiento y programación de trayectorias.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tags: ['Robótica', 'Arduino', 'Sensores'],
      link: '#'
    },
    {
      title: 'Sistema de Automatización',
      description: 'Proyecto de automatización industrial con integración de sensores y actuadores para optimización de procesos.',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=400&fit=crop',
      tags: ['Mecatrónica', 'SCADA', 'IoT'],
      link: '#'
    }
  ];

  return (
    <section id="proyectos" ref={sectionRef}>
      <h2>Proyectos Destacados</h2>
      <div className={`projects-grid-modern ${isVisible ? 'fade-in' : ''}`}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card-modern"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="project-link">Ver Proyecto</a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;