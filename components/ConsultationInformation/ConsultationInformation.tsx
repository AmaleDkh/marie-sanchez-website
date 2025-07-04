// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

function ConsultationInformation() {
  return (
    <section className="consultation-information">
      <div className="consultation-information__main-block">
        <div className="consultation-information__text">
          <SectionTitle
            title="Consultations"
            textAlignVersion="center"
            colorVersion="dark-green"
          />
          <div className="consultation-information__text__presentation">
            <p className="consultation-information__text__presentation__paragraph">
              En tant que Psychologue-Clinicienne et Neuropsychologue,
              j'accompagne chaque personne avec une approche bienveillante et
              sur mesure, adaptée à vos besoins uniques.
            </p>
            <p className="consultation-information__text__presentation__second-paragraph">
              Nous explorons ensemble vos émotions et pensées grâce à des
              méthodes comme les Thérapies Cognitivo-Comportementales (TCC), la
              thérapie par l'acceptation et l'engagement (ACT) et la thérapie
              des schémas.
            </p>
            <p className="consultation-information__text__presentation__paragraph">
              Mon objectif est de vous offrir des solutions personnalisées pour
              retrouver en vous les ressources nécessaires à une meilleure
              compréhension de vous-même et une amélioration de votre qualité de
              vie, afin de retrouver bien-être et équilibre.
            </p>
          </div>

          <div className="consultation-information__text__presentation__button-container large-responsive-version">
            <Button
              link="/consultations"
              text="Découvrez les solutions personnalisées"
              className="button"
            />
          </div>
        </div>
      </div>

      {/* <div className="consultation-information__text__presentation__button-container responsive-version">
        <Button
          link="/consultations"
          text="Découvrez les solutions personnalisées"
          className="button button-to-hide"
        />

        <Button
          link="/consultations"
          text="Les solutions personnalisées"
          className="button button-mobile-version"
        />
      </div> */}
    </section>
  );
}

export default ConsultationInformation;
