import React from "react";
import "./Home.css";
import profileImage from "../assets/images/profil.jpg"; 

const Home = () => {
  return (
    <>
      {/* Section Accueil */}
      <section className="home" id="home">
       

        {/* Contenu principal */}
        <div className="content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn">En savoir plus</a>
        </div>
      </section>

      {/* Section À propos */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">À propos</h2>
          <div className="about-content row">
            {/* Texte de présentation */}
            <div className="col-md-6">
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation
                d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation,
                j'ai pu acquérir des bases solides pour travailler dans le domaine du 
                 <strong>développement web</strong>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour
                consolider ma formation de <strong>développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte
                les bonnes pratiques du web.
              </p>
            </div>

            {/* Photo et compétences */}
            <div className="col-md-6 text-center">
              <img
                src={profileImage}
                alt="John Doe"
                className="profile-image mb-4"
              />
              <h3 className="skills-title">Mes compétences</h3>
              <div className="progress-bars">
                <div className="progress-bar-container mb-3">
                  <span>HTML5</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-bar-container mb-3">
                  <span>CSS3</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-bar-container mb-3">
                  <span>JavaScript</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-bar-container mb-3">
                  <span>PHP</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress-bar-container">
                  <span>React</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
