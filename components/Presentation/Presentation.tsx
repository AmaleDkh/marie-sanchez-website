// Next element
import Image from 'next/image';

// Component
import Button from '../Button/Button';

// Image
import Photo from '../../assets/images/marie-sanchez.webp';

function Presentation() {
  return (
    <section className="presentation-container">
      <div className="presentation-container__photo-container">
        <Image
          src={Photo}
          alt="Photo de Marie Sanchez"
          className="presentation-container__photo-container__photo"
          width={300}
          height={300}
        />
      </div>
      <div className="presentation-container__text">
        <div className="presentation-container__text__presentation">
          <h2 className="presentation-container__text__presentation__title">
            Psychologue-Clinicienne à Bordeaux
          </h2>
          <p className="presentation-container__text__presentation__paragraph">
            Psychologue-Clinicienne et Psychothérapeute, je vous accompagne à
            Cenon, près de Bordeaux, dans un espace bienveillant et
            confidentiel. Mon rôle est de vous aider à surmonter vos difficultés
            et à redécouvrir votre potentiel à votre rythme. Ensemble, nous
            explorerons vos émotions et vos pensées pour vous permettre
            d'avancer sereinement.
          </p>
        </div>
        <div className="presentation-container__text__button-container">
          <Button
            link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
            text="Prendre rendez-vous"
            className="button"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
