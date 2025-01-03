import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">MON OFFRE DE SERVICES</h2>
        <p className="section-subtitle">Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="services-underline"></div>
        <div className="services-container">
          {/* Carte 1 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-desktop"></i>
            </div>
            <h3>UX DESIGN</h3>
            <p>
              L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but
              est d'offrir une expérience de navigation optimale à l'internaute.
            </p>
          </div>
          {/* Carte 2 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>DÉVELOPPEMENT WEB</h3>
            <p>
              Le <strong>développement de sites web</strong> repose sur l'utilisation des langages
              <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.
            </p>
          </div>
          {/* Carte 3 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>RÉFÉRENCEMENT</h3>
            <p>
              Le <strong>référencement naturel</strong> d'un site, aussi appelé <strong>SEO</strong>, consiste
              à mettre des techniques en œuvre pour <strong>améliorer sa position</strong> dans les résultats
              des moteurs de recherche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
