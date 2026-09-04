import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="sobre-mi" ref={sectionRef} className={isVisible ? 'fade-in' : ''}>
      <h2>Sobre Mí</h2>
      <div className="about-content-simple">
        <p>
          Ingeniero Mecatrónico (CORHUILA, 2023), Maestría en Inteligencia Artificial (Sergio Arboleda, 2026), con Tarjeta Profesional COPNIA. Cuento con experiencia en soporte técnico, mantenimiento de equipos, desarrollo web, administración de sistemas informáticos y docencia en robótica educativa.
        </p>
        <p>
          Cuatro años de trayectoria en tres roles: docencia en robótica, - funciones técnicas y administrativas en AXCOR, - e Ingeniero Mecatrónico en GED SAS. Manejo programación (Python, C/C++, JavaScript, MATLAB, Arduino), diseño CAD (SolidWorks, Solid Edge) y desarrollo web.
        </p>
        <p>
          Busco una oportunidad que me permita aportar desde mi formación en ingeniería e inteligencia artificial, y seguir creciendo profesionalmente en las distintas áreas donde puedo aportar a empresas o instituciones educativas.
        </p>
      </div>
    </section>
  );
};

export default About;