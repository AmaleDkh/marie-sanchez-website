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
          <p>
            Spécialisée en psychopathologie de l’adulte et en neuropsychologie,
            j’exerce de manière intégrative, en utilisant principalement des
            outils tels que les Thérapies Cognitivo-Comportementales (TCC), la
            thérapie par l’acceptation et l’engagement (ACT) ou encore la
            thérapie des schémas. Je suis également formée à la prise en charge
            des troubles du stress post-traumatique (PTSD) ainsi qu’aux
            addictions. J’adapte mon approche selon votre demande et vos
            préférences.
          </p>
          <p>
            J’accueille tout type de public adulte (LGBTQIA+, profils neuro
            atypiques, etc.)
          </p>
          <p>
            J’exerce en parallèle de mon activité en libéral dans une clinique
            psychiatrique au sein de laquelle je propose des ateliers de groupe.
          </p>
        </div>
        <Button text="Prendre rendez-vous" />
      </div>
    </section>
  );
}

export default Presentation;
