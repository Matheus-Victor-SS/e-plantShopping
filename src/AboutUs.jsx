import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-modern">
        <div className="au-badge">
          <span>Desde 2024</span>
        </div>

        <h2 className="au-title">
          Quem Somos
          <span className="au-title-accent">Paraíso Verde</span>
        </h2>

        <div className="au-divider"></div>

        <p className="au-text">
          No <strong>Paraíso Verde</strong>, acreditamos que plantas transformam vidas. 
          Mais do que decoração, <strong>elas trazem equilíbrio, bem-estar e conexão com a natureza</strong>.
        </p>

        <p className="au-text">
          Nossa missão é oferecer plantas de alta qualidade — desde purificadoras de ar até 
          espécies aromáticas e medicinais — com todo o suporte para você, <strong>seja iniciante ou expert em jardinagem</strong>.
        </p>

        <p className="au-text">
          Cada planta é cuidada com dedicação por nossa equipe, garantindo que chegue até você 
          saudável e pronta para florescer. Queremos ajudar a tornar <strong>seu lar mais verde, vivo e feliz</strong>.
        </p>

        <div className="au-quote">
          “Um lar com plantas é um lar com alma.”
        </div>

        <div className="au-footer-features">
          <span>Purificam o ar</span>
          <span>Aromatizam ambientes</span>
          <span>Trazem bem-estar</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;