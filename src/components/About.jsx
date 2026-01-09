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
          Soy Ingeniero Mecatrónico de la Corporación Universitaria del Huila (CORHUILA, 2023) con Tarjeta Profesional COPNIA y Maestría en Inteligencia Artificial (Universidad Sergio Arboleda). Mi pasión se centra en la mecatrónica y la IA, con experiencia en áreas clave como Robótica, Automatización, Programación, Sistemas Tecnológicos, Sistemas SCADA y Energía Solar Fotovoltaica.
        </p>
        <p>
          He liderado proyectos en el sector educativo desarrollando programas de robótica que mejoraron significativamente las habilidades técnicas de los estudiantes. Como Gerente Administrativo en AXCOR, implementé estrategias de mantenimiento y marketing que aumentaron la visibilidad y rentabilidad de la empresa, demostrando capacidad tanto en gestión técnica como empresarial.
        </p>
        <p>
          Mi propuesta de valor combina formación técnica sólida en mecatrónica e inteligencia artificial con experiencia práctica en gestión de proyectos y liderazgo empresarial. Busco aplicar estos conocimientos en organizaciones que requieran soluciones tecnológicas concretas.
        </p>
      </div>
    </section>
  );

};

export default About;