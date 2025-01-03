
import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Fonction pour afficher ou cacher le bouton selon le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
    <div className="footer-content">
      {/* Section Informations de contact */}
      <div className="footer-section">
        <h3>John Doe</h3>
        <p>40 Rue Laure Diebold</p>
        <p>69009 Lyon, France</p>
        <p>Téléphone : 06 20 30 40 50</p>
        {/* Réseaux sociaux */}
       <div className="footer-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
       

      {/* Section Liens utiles */}
      <div className="footer-section">
        <h4>Liens utiles</h4>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/">À propos</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Me contacter</a></li>
          <li><a href="/mentions-legales">Mentions légales</a></li>
        </ul>
      </div>

      {/* Section Réalisations */}
      <div className="footer-section">
        <h4>Mes dernières réalisations</h4>
        <ul>
          <li><a href="/portfolio">Fresh food</a></li>
          <li><a href="/portfolio">Restaurant Akira</a></li>
          <li><a href="/portfolio">Espace bien-être</a></li>
        </ul>
      </div>

      {/* Section Articles */}
      <div className="footer-section">
        <h4>Mes derniers articles</h4>
        <ul>
          <li><a href="/blog">Coder son site en HTML/CSS</a></li>
          <li><a href="/blog">Vendre ses produits sur le web</a></li>
          <li><a href="/blog">Se positionner sur Google</a></li>
          <li><a href="/blog">Coder en responsive design</a></li>
          <li><a href="/blog">Technique de référencement</a></li>
          <li><a href="/blog">Apprendre à coder</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; Designed by John Doe</p>
      {showButton && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑ 
          </button>
        )}
    </div>
  </footer>
);
};

export default Footer;
