import React from 'react';
import './DurationAndPrices.scss';

function DurationAndPrices() {
  const pricingCards = [
    {
      title: "Premier rendez-vous d'évaluation",
      duration: '50 minutes',
      price: '50 €',
    },
    {
      title: 'Séances suivantes',
      duration: '50 minutes',
      price: '60 €',
    },
    {
      title: 'Évaluation complète avec compte-rendu',
      duration: 'Plusieurs séances',
      price: '200 € - 400 €',
    },
  ];

  const paymentInfo = [
    {
      title: 'Options de règlement',
      description: 'Espèces, chèque ou virement bancaire',
      className: '',
    },
    {
      title: 'Facilités de paiement',
      description: 'Paiement en 2 ou 3 fois possible',
      className: 'duration-and-prices__payment-item-description--wide',
    },
    {
      title: "Politique d'annulation",
      description:
        'Toute séance non annulée 24h en avance sera considérée comme due',
      className: 'duration-and-prices__payment-item-description--full',
    },
  ];

  return (
    <section className="duration-and-prices padding-section">
      <h2 className="duration-and-prices__title">Durées & tarifs</h2>

      <div className="duration-and-prices__pricing-container">
        <div className="duration-and-prices__pricing-cards">
          {pricingCards.map((card, index) => (
            <div key={index} className="duration-and-prices__pricing-card">
              <div className="duration-and-prices__card-content">
                <h3 className="duration-and-prices__card-title">
                  {card.title}
                </h3>
                <p className="duration-and-prices__card-duration">
                  {card.duration}
                </p>
              </div>
              <div className="duration-and-prices__card-price">
                {card.price}
              </div>
            </div>
          ))}
        </div>

        <div className="duration-and-prices__payment-info">
          <h3 className="duration-and-prices__payment-title">
            Modalités de paiement
          </h3>
          <div className="duration-and-prices__payment-items">
            {paymentInfo.map((info, index) => (
              <div key={index} className="duration-and-prices__payment-item">
                <h4 className="duration-and-prices__payment-item-title">
                  {info.title}
                </h4>
                <p
                  className={`duration-and-prices__payment-item-description ${info.className}`}
                >
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DurationAndPrices;
