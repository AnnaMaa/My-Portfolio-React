import React from "react";
import { Accordion } from "react-bootstrap"; // Importation du composant accordéon de Bootstrap
import "./MentionsLegales.css"; // Ajoutez des styles personnalisés si nécessaire

const MentionsLegales = () => {
  return (
    <>
      {/* Balise meta pour empêcher l'indexation */}
      <meta name="robots" content="noindex" />

      <section className="mentions-legales">
        <div className="container">
          <h2 className="section-title">MENTIONS LÉGALES</h2>
          <div className="section-underline"></div>

          {/* Accordéon Bootstrap */}
          <Accordion>
            {/* Éditeur du site */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Éditeur du site</Accordion.Header>
              <Accordion.Body>
                <p><strong>John Doe</strong></p>
                <p>40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>📞 06 20 30 40 50</p>
                <p>✉️ <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Hébergeur */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Hébergeur</Accordion.Header>
              <Accordion.Body>
                <p><strong>Always Data</strong></p>
                <p>91 rue du Faubourg Saint-Honoré</p>
                <p>75008 Paris</p>
                <p>🌐 <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Crédits */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Crédits</Accordion.Header>
              <Accordion.Body>
                <p>Site développé par <strong>John Doe</strong>, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site{" "}
                  <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                    Pixabay
                  </a>.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default MentionsLegales;
