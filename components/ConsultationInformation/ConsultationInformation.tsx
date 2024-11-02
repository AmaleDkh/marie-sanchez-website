// Next element
import Image from 'next/image';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';

// Image
import OfficeDecoration from '../../assets/images/office-decoration.webp';

function ConsultationInformation() {
  return (
    <section className="consultation-information">
      <div className="consultation-information__text">
        <SectionTitle title="CONSULTATIONS" />
        <div className="consultation-information__text__presentation">
          <p className="consultation-information__text__presentation__paragraph">
            En tant que Psychologue-Clinicienne et Neuropsychologue,
            j'accompagne chaque personne avec une approche bienveillante et sur
            mesure, adaptée à vos besoins uniques.
          </p>
          <p className="consultation-information__text__presentation__paragraph">
            Nous explorons ensemble vos émotions et pensées grâce à des méthodes
            comme les Thérapies Cognitivo-Comportementales (TCC), la thérapie
            par l'acceptation et l'engagement (ACT) et la thérapie des schémas.
          </p>
          <p className="consultation-information__text__presentation__paragraph">
            Mon objectif est de vous offrir des solutions personnalisées pour
            retrouver en vous les ressources nécessaires à une meilleure
            compréhension de vous-même et une amélioration de votre qualité de
            vie, afin de retrouver bien-être et équilibre.
          </p>
        </div>
        <Button
          link="/consultations"
          text="En savoir plus"
          className="button"
        />
      </div>

      <ImageContainer
        src={OfficeDecoration}
        alt="Image d'une chaise et de décoration"
      />
    </section>
  );
}

export default ConsultationInformation;
