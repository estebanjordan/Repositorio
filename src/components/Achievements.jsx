import React, { useEffect, useRef, useState } from 'react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    experience: 0,
    certifications: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
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

  const animateCounters = () => {
    const targets = {
      projects: 10,
      technologies: 20,
      experience: 5,
      certifications: 10
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const achievements = [
    {
      icon: '🏆',
      title: 'Proyectos Completados',
      count: counters.projects,
      suffix: '+',
      color: '#4a6d82'
    },
    {
      icon: '💻',
      title: 'Tecnologías Dominadas',
      count: counters.technologies,
      suffix: '+',
      color: '#4d7a68'
    },
    {
      icon: '📅',
      title: 'Años de Experiencia',
      count: counters.experience,
      suffix: '',
      color: '#8f6b58'
    },
    {
      icon: '📜',
      title: 'Certificaciones',
      count: counters.certifications,
      suffix: '+',
      color: '#566a8f'
    }
  ];

  const highlights = [
    {
      icon: '🎓',
      title: 'Ingeniería Mecatrónica',
      description: 'Título profesional de la Corporación Universitaria del Huila - CORHUILA (Marzo 2023)',
      color: '#4a6d82',
      gradient: 'linear-gradient(135deg, #4a6d82, #5d8399)'
    },
    {
      icon: '📋',
      title: 'Diplomado Alta Gerencia',
      description: 'Diplomado en Alta Gerencia y Competitividad - CORHUILA (144 horas, Diciembre 2022)',
      color: '#8f6b58',
      gradient: 'linear-gradient(135deg, #8f6b58, #a8826e)'
    },
    {
      icon: '🔧',
      title: 'PLC Industrial',
      description: 'Integración de PLC en el Control de Sistemas Industriales - SENA (48 horas, Junio 2022)',
      color: '#4d6b6b',
      gradient: 'linear-gradient(135deg, #4d6b6b, #5f8282)'
    },
    {
      icon: '🤖',
      title: 'Robótica Antropomórfica',
      description: 'Curso de Robótica Antropomórfica Básica 1 - UDEMY (3.5 horas, Julio 2022)',
      color: '#566a8f',
      gradient: 'linear-gradient(135deg, #566a8f, #6b82ab)'
    },
    {
      icon: '🧠',
      title: 'Inteligencia Artificial',
      description: 'Potencia tu Vida y Negocio con IA - Cámara de Comercio del Huila (24 horas, Septiembre 2023)',
      color: '#3d5c6b',
      gradient: 'linear-gradient(135deg, #3d5c6b, #4f7382)'
    },
    {
      icon: '🌐',
      title: 'Diseño Web',
      description: 'Diseño Web con Adobe Dreamweaver - SENA (40 horas, Octubre 2023)',
      color: '#7d6b85',
      gradient: 'linear-gradient(135deg, #7d6b85, #9682a0)'
    },
    {
      icon: '🔐',
      title: 'Ciberseguridad',
      description: 'Ciberseguridad - MinTIC / Universidad Distrital Francisco José de Caldas (50 horas, Julio 2024)',
      color: '#4d7a68',
      gradient: 'linear-gradient(135deg, #4d7a68, #5f9480)'
    },
    {
      icon: '☀️',
      title: 'Sistemas Fotovoltaicos',
      description: 'Sistemas Fotovoltaicos - La Escuela Casa Solar / NABCEP (60 horas, Mayo 2024)',
      color: '#b8923d',
      gradient: 'linear-gradient(135deg, #b8923d, #cba555)'
    },
    {
      icon: '📚',
      title: 'Competencias Pedagógicas',
      description: 'Diagnóstico de Competencias desde la Ingeniería Pedagógica - SENA (40 horas, Septiembre 2023)',
      color: '#73604a',
      gradient: 'linear-gradient(135deg, #73604a, #8a7660)'
    },
    {
      icon: '❤️',
      title: 'Primeros Auxilios Cruz Roja',
      description: 'Servicio Social en Primeros Auxilios - Cruz Roja Colombiana (80 horas, Noviembre 2016)',
      color: '#a06868',
      gradient: 'linear-gradient(135deg, #a06868, #b88080)'
    }
  ];

  return (
    <section id="logros" ref={sectionRef}>
      <h2>Logros y Reconocimientos</h2>
      
      <div className={`achievements-stats ${isVisible ? 'fade-in' : ''}`}>
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="achievement-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="achievement-icon" style={{ color: achievement.color }}>
              {achievement.icon}
            </div>
            <div className="achievement-count" style={{ color: achievement.color }}>
              {achievement.count}{achievement.suffix}
            </div>
            <div className="achievement-title">{achievement.title}</div>
          </div>
        ))}
      </div>

      <div className={`achievements-highlights ${isVisible ? 'fade-in' : ''}`}>
  {highlights.map((highlight, index) => (
    <div 
      key={index} 
      className="highlight-card-simple"
      style={{ 
        animationDelay: `${(index + 4) * 0.1}s`,
        '--card-color': highlight.color
      }}
    >
      <div className="highlight-icon-simple">{highlight.icon}</div>
      <h3>{highlight.title}</h3>
      <p>{highlight.description}</p>
    </div>
  ))}
</div>
    </section>
  );
};

export default Achievements;