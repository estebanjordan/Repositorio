import React, { useEffect, useState } from 'react';
import perfil from "../img/Perfil.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div 
          className="hero-shapes"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-image-container">
          <img
            src={perfil}
            alt="Julio Esteban Jordan Losada"
            className="hero-profile-image"
          />
          <div className="hero-image-ring"></div>
        </div>

        <h2 className="hero-title">
          Julio Esteban Jordan Losada
        </h2>

        <p className="hero-description">
          Ingeniero Mecatrónico | Especialista en Robótica y Automatización | Apasionado por la Inteligencia Artificial
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary" onClick={scrollToContact}>
            Contáctame
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#proyectos" className="btn btn-secondary">
            Ver Proyectos
          </a>
        </div>

        <div className="hero-social">
          <a href="mailto:estebanjordan666@gmail.com" title="Email">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
          </a>
          <a href="tel:+573106664528" title="Teléfono">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;