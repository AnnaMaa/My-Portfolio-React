import React from "react";
import "./Blog.css";
import BannerImage from "../assets/images/portfolio-banner.jpg";
import CoderImage from "../assets/images/coder.jpg";
import CroissanceImage from "../assets/images/croissance.jpg";
import GoogleImage from "../assets/images/google.jpg";
import ScreensImage from "../assets/images/screens.jpg";
import SeoImage from "../assets/images/seo.jpg";
import TechnosImage from "../assets/images/technos.png";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Coder son site en HTML/CSS",
      description: "Some quick example text to build on the card title.",
      date: "22 août 2022",
      image: CoderImage, 
    },
    {
      id: 2,
      title: "Vendre ses produits sur le web",
      description: "Some quick example text to build on the card title.",
      date: "20 août 2022",
      image: CroissanceImage, 
    },
    {
      id: 3,
      title: "Se positionner sur Google",
      description: "Some quick example text to build on the card title.",
      date: "1 août 2022",
      image: GoogleImage, 
    },
    {
      id: 4,
      title: "Coder en responsive design",
      description: "Some quick example text to build on the card title.",
      date: "31 juillet 2022",
      image: ScreensImage, 
    },
    {
      id: 5,
      title: "Techniques de référencement",
      description: "Some quick example text to build on the card title.",
      date: "30 juillet 2022",
      image: SeoImage, 
    },
    {
      id: 6,
      title: "Apprendre à coder",
      description: "Some quick example text to build on the card title.",
      date: "12 juillet 2022",
      image: TechnosImage, 
    },
  ];

  return (
    <section className="blog">
       {BannerImage}
    <div className="portfolio-banner">
      <img src={BannerImage} alt="Bannière Portfolio" />
    </div>
      <div className="blog-header">
        <h2>Blog</h2>
        <p>
          Retrouvez ici <span>quelques articles</span> sur le développement web.
        </p>
      </div>
      <div className="blog-underline"></div>
      <div className="blog-container">
        {articles.map((article) => (
          <div key={article.id} className="blog-card">
            {/* Affichage de l'image */}
            <img src={article.image} alt={article.title} className="blog-image" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button className="blog-button">Lire la suite</button>
            <span>{article.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
