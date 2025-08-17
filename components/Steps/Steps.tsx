import React from 'react';
import './Steps.scss';

function Steps() {
  const consultationSteps = [
    {
      number: '1',
      text: "Cette première séance est un moment d'échange bienveillant, où vous êtes invité·e à exprimer librement ce qui vous amène.\n\nJe vous écoute attentivement pour comprendre votre histoire, vos besoins et vos attentes.",
    },
    {
      number: '2',
      text: "Nous explorons ensemble les points que vous souhaitez travailler, qu'il s'agisse d'émotions, de comportements ou d'aspirations.\n\nCela nous permet de définir des objectifs clairs et adaptés à votre cheminement personnel.",
    },
    {
      number: '3',
      text: "Nous déterminons ensemble le rythme qui vous convient : fréquence des séances, durée estimée du suivi, et modalités pratiques.\n\nL'idée est de construire un cadre souple et sécurisant, aligné avec vos besoins.",
    },
  ];

  return (
    <section className="steps margin-section padding-section">
      <div className="steps__hero">
        <h2 className="steps__hero-title">
          Déroulé d&apos;une 1ère consultation
        </h2>

        {/* <div className="steps__consultation-card">
          <div className="steps__steps">
            {consultationSteps.map((step, index) => (
              <div key={index} className="steps__step">
                <div className="steps__step-number">
                  <span className="steps__step-number-text">{step.number}</span>
                </div>
                <p className="steps__step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="steps__consultation-card">
        <div className="steps__steps">
          {consultationSteps.map((step, index) => (
            <div key={index} className="steps__step">
              <div className="steps__step-number">
                <span className="steps__step-number-text">{step.number}</span>
              </div>
              <p className="steps__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
