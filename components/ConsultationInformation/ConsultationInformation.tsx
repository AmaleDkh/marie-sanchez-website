// Next element
import Image from 'next/image';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import AppointmentButton from './AppointmentButton/AppointmentButton';

import OfficeDecoration from '../../assets/images/office-decoration.webp';

function ConsultationInformation() {
  return (
    <section className="consultation-information">
      <div className="consultation-information__text">
        <SectionTitle title="CONSULTATIONS" />
        <div className="consultation-information__text__presentation">
          <p className="consultation-information__text__presentation__paragraph">
            Psychologue clinicienne et Psychothérapeute, je vous reçois dans mon
            cabinet à Cenon, proche de Bordeaux centre, dans un cadre
            bienveillant, sans jugement et de manière confidentielle. 
          </p>
          <p className="consultation-information__text__presentation__paragraph">
            Je reçois des adultes et jeunes adultes (à partir de 18 ans). 
          </p>
          <p className="consultation-information__text__presentation__paragraph">
            La première séance vous permet d'exposer les raisons qui vous
            amènent à consulter, de parler de vos objectifs et de poser vos
            questions, afin que nous puissions définir ensemble les modalités du
            suivi ainsi que la ou les approche(s) que nous utiliserons.
          </p>
          <p className="consultation-information__text__presentation__paragraph">
            L’objectif est que vous puissiez bénéficier d’un espace d’écoute et
            d’une aide afin d’apaiser et dépasser certaines souffrances. Mon
            rôle est de vous accompagner, à votre rythme,  en vous aidant à
            explorer et à comprendre vos émotions, vos pensées, et retrouver en
            vous les ressources pour aller vers une meilleure compréhension de
            vous-même et une amélioration de votre qualité de vie. 
          </p>
        </div>
        <AppointmentButton />
      </div>
      <div className="consultation-information__image-container">
        <Image
          src={OfficeDecoration}
          alt="Image d'une chaise et de décoration"
          className="consultation-information__image-container__image"
        />
      </div>
    </section>
  );
}

export default ConsultationInformation;
