import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      {/* Superposition bleu transparent */}
      <div className="overlay"></div>

      <div className="contact-container">
        <h2>ME CONTACTER</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className="contact-content">
          {/* Formulaire de contact */}
          <div className="contact-form">
            <h3>Formulaire de contact</h3>
            <form>
              <input type="text" placeholder="Votre nom" required />
              <input type="email" placeholder="Votre adresse email" required />
              <input type="tel" placeholder="Votre numéro de téléphone" required />
              <input type="text" placeholder="Sujet" required />
              <textarea placeholder="Votre message" rows="5" required></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p>
            <i className="fas fa-map-marker-alt"></i> {/* Icône de localisation */}
                40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>
            <i className="fas fa-phone-alt"></i> {/* Icône de téléphone */}
                06 20 30 40 50</p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.008572009719!2d4.80552831557624!3d45.7706901791059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1f380a841b1%3A0x16c6b3b292f5e86!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1696271391884!5m2!1sen!2sfr"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
