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
          Ingeniero Mecatrónico (CORHUILA, 2023) con Tarjeta Profesional COPNIA y Maestría en Inteligencia Artificial en curso (Universidad Sergio Arboleda). Especializado en robótica, programación y desarrollo web, con experiencia comprobada en entornos educativos y empresariales.
        </p>
        <p>
          Cuento con más de 3 años de experiencia en gestión técnica y administrativa, donde he desarrollado soluciones tecnológicas concretas: páginas web, mantenimiento y ensamble de equipos de cómputo, administración de sistemas informáticos, instalaciones de energía solar fotovoltaica, y aplicaciones de visión por computador. Mi formación combina habilidades técnicas sólidas (Python, C/C++, Arduino, diseño CAD) con capacidades de liderazgo, gestión empresarial y optimización.
        </p>
        <p>
          He trabajado como docente de robótica educativa, gerente administrativo y actualmente como ingeniero mecatrónico con funciones en desarrollo web, administración de sistemas y energía solar fotovoltaica. Busco integrarme a una organización que valore la versatilidad técnica y el desarrollo de soluciones innovadoras, donde pueda aportar mis conocimientos en automatización, robótica e inteligencia artificial mientras continúo mi crecimiento profesional.
        </p>
      </div>
    </section>
  );
};

export default About;