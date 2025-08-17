import React from 'react';
import './ConsultationsOnPage.scss';

function ConsultationsOnPage() {
  const services = [
    {
      title: 'Thérapie individuelle',
      description:
        'Un espace d’écoute pour vous aider à dépasser ce qui vous freine et retrouver équilibre au quotidien.',
      benefit:
        'Pour pouvoir vivre plus sereinement, en comprenant mieux vos émotions et vos schémas de pensée.',
    },
    {
      title: 'Bilan psychologique',
      description:
        'Un temps pour faire le point sur votre situation et poser des bases claires pour la suite.',
      benefit:
        'Pour faire des choix plus alignés, avec une meilleure connaissance de vous-même.',
    },
    {
      title: 'Prise en charge des troubles',
      description:
        'Un accompagnement ciblé pour traverser des périodes de souffrance psychique ou émotionnelle.',
      benefit:
        'Pour alléger votre charge mentale et retrouver une stabilité émotionnelle durable.',
    },
  ];

  return (
    <section className="consultations-on-page only-top-margin-section">
      <h2 className="consultations-on-page__title">
        Des consultations adaptées à vos besoins
      </h2>

      <div className="consultations-on-page__services">
        {services.map((service, index) => (
          <div key={index} className="consultations-on-page__service">
            <div className="consultations-on-page__service-content">
              <h3 className="consultations-on-page__service-title">
                {service.title}
              </h3>
              <p className="consultations-on-page__service-description">
                {service.description}
              </p>
            </div>

            <div className="consultations-on-page__service-benefit">
              <p className="consultations-on-page__service-benefit-text">
                {service.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConsultationsOnPage;
