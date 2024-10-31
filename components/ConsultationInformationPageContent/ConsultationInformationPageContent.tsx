// Next element
import Image from 'next/image';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

// Image
import OfficeDecoration from '../../assets/images/office-decoration.webp';

function ConsultationInformationPageContent() {
  return (
    <section className="consultation-information-page-content">
      <div className="consultation-information-page-content__text">
        <SectionTitle title="CONSULTATIONS" />
        <div className="consultation-information-page-content__text__presentation">
          <p className="consultation-information-page-content__text__presentation__paragraph">
            J’accueille des adultes et des jeunes adultes, y compris les
            personnes issues des communautés LGBTQIA+ et celles avec des profils
            neuroatypiques.
          </p>
          <p className="consultation-information-page-content__text__presentation__paragraph">
            Mon approche est adaptée à chaque patient et vise à répondre à vos
            besoins uniques. Elle a pour objectif de vous aider à explorer vos
            émotions et vos pensées, afin de retrouver en vous les ressources
            nécessaires à une meilleure compréhension de vous-même et à une
            amélioration de votre qualité de vie.
          </p>
          <p className="consultation-information-page-content__text__presentation__paragraph">
            La première séance est dédiée à l’écoute de vos besoins : vous y
            exposez les raisons de votre consultation, vos objectifs, et nous
            définissons ensemble les modalités du suivi.
          </p>
        </div>
        <Button link="" text="Prendre rendez-vous" />
      </div>
      <div className="consultation-information-page-content__image-container">
        <Image
          src={OfficeDecoration}
          alt="Image d'une chaise et de décoration"
          className="consultation-information-page-content__image-container__image"
        />
      </div>
    </section>
  );
}

export default ConsultationInformationPageContent;
