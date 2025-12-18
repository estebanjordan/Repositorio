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
          Soy un Ingeniero Mecatrónico formado en la Corporación Universitaria del Huila (CORHUILA),
          donde me gradué en marzo de 2023, con Tarjeta Profesional COPNIA. Además, cuento con una
          Maestría en Inteligencia Artificial de la Universidad Sergio Arboleda. Mi pasión se centra en la
          mecatrónica y la IA, con experiencia en áreas clave como Robótica, Automatización Industrial,
          Programación de PLC, Sistemas SCADA y Energía Solar Fotovoltaica.
        </p>
        <p>
          Cuento con experiencia laboral en empresas como AXCOR y Grupo Empresarial Colombia GED SAS,
          donde he aplicado mis conocimientos técnicos en proyectos industriales. Además, me desempeñé
          como docente practicante en talleres de robótica educativa, desarrollando habilidades pedagógicas
          certificadas por el SENA en Ingeniería Pedagógica.
        </p>
        <p>
          Mi formación continua incluye certificaciones en Ciberseguridad (MinTIC/Universidad Distrital),
          Sistemas Fotovoltaicos con estándares NABCEP (La Escuela Casa Solar), Integración de PLC en
          Sistemas Industriales (SENA), Diseño Web con Adobe Dreamweaver (SENA) e Inteligencia Artificial
          aplicada a negocios (Cámara de Comercio del Huila). Complemento mi perfil técnico con un
          Diplomado en Alta Gerencia y Competitividad de CORHUILA.
        </p>
        <p>
          Domino herramientas de diseño CAD como SolidWorks y Solid Edge, lenguajes de programación
          como Python, JavaScript, C/C++ y MATLAB, además de tecnologías de inteligencia artificial
          que integro en mi flujo de trabajo diario. Mi compromiso profesional es desarrollar soluciones
          innovadoras que contribuyan al crecimiento tecnológico de las organizaciones.
        </p>
      </div>
    </section>
  );
};

export default About;