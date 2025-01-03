import React from "react";
import "./Portfolio.css";
import BannerImage from "../assets/images/portfolio-banner.jpg";
import FreshFoodImage from "../assets/images/fresh-food.jpg"
import RestaurantAkiraImage from "../assets/images/restaurant-japonais.jpg"
import SpaImage from "../assets/images/espace-bien-etre.jpg"



const Portfolio = () => {
  const projects = [
    {
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      technology: "PHP et MySQL",
      image: FreshFoodImage,
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      technology: "WordPress",
      image: RestaurantAkiraImage,
    },
    {
        title: "Espace bien-être",
      description: "Réalisation d'un site vitrine pour un praticien.",
      technology: "HTML/CSS",
      image: SpaImage,
    },
  ];

  return (
    <section className="portfolio">
    {BannerImage}
    <div className="portfolio-banner">
      <img src={BannerImage} alt="Bannière Portfolio" />
    </div>

      <div className="portfolio-header">
        <h2>PORTFOLIO</h2>
        <p>Voici <span>quelques-unes</span> de mes réalisations.</p>
      </div>
      
      <div className="portfolio-underline"></div>
      
      <div className="portfolio-container">
        <div className="portfolio-card">
          <img src={FreshFoodImage} alt="Fresh food" />
          <h3>Fresh food</h3>
          <p>Réalisation d'un site avec commande en ligne.</p>
          <button>Voir</button>
          <div className="portfolio-footer">
          <span>Site réalisé avec PHP et MySQL</span>
        </div>
        </div>
        <div className="portfolio-card">
          <img src={RestaurantAkiraImage} alt="Restaurant Akira" />
          <h3>Restaurant Akira</h3>
          <p>Réalisation d'un site vitrine.</p>
          <button>Voir</button>
          <div className="portfolio-footer">
          <span>Site réalisé avec WordPress</span>
        </div>
        </div>
        <div className="portfolio-card">
          <img src={SpaImage} alt="Espace bien-être" />
          <h3>Espace bien-être</h3>
          <p>Réalisation d'un site vitrine pour un praticien.</p>
          <button>Voir</button>
          <div className="portfolio-footer">
          <span>Site réalisé en HTML/CSS</span>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Portfolio;