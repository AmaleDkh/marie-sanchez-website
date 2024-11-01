// Next element
import Image from 'next/image';

// Components
import ImageBlock from '../ImageBlock/ImageBlock';
import Button from '../Button/Button';

// Image
import OfficeDecoration4 from '../../assets/images/office-decoration4.webp';
import OfficeDecoration5 from '../../assets/images/office-decoration5.webp';
import Plant from '../../assets/images/plant.jpg';

function ConsultationInformationPageContent() {
  return (
    <section className="consultation-information-page-content">
      <h2 className="consultation-information-page-content__title">
        Bienvenue dans un espace d'écoute et de soutien
      </h2>

      <div className="consultation-information-page-content__content">
        <div className="consultation-information-page-content__content__welcomed-profiles">
          <div className="consultation-information-page-content__content__welcomed-profiles__texts">
            <div className="consultation-information-page-content__content__welcomed-profiles__texts__text-block">
              <h3 className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text__title">
                Un accompagnement inclusif pour chacun
              </h3>
              <p className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__paragraph">
                J’accueille des adultes et des jeunes adultes, y compris les
                personnes issues des communautés LGBTQIA+ et celles avec des
                profils neuroatypiques.
              </p>
            </div>

            <div className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text">
              <h3 className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text__title">
                Une approche personnalisée
              </h3>
              <p className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__paragraph">
                Mon approche s’adapte à chaque patient pour répondre à vos
                besoins uniques. L’objectif est d’explorer vos émotions et
                pensées, afin de vous aider à retrouver en vous les ressources
                pour mieux vous comprendre et améliorer votre qualité de vie.
              </p>
            </div>
          </div>

          <div className="consultation-information-page-content__image-container">
            <Image
              src={OfficeDecoration4}
              alt="Image d'un fauteuil avec un coussin et une plante verte en arrière-plan"
              className="consultation-information-page-content__image-container__image"
            />
          </div>
        </div>
      </div>

      <div className="consultation-information-page-content__first-session">
        <h3 className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text__title">
          Un accompagnement inclusif pour chacun
        </h3>
        <div className="consultation-information-page-content__first-session__blocks">
          <div className="consultation-information-page-content__first-session__blocks__item">
            <span className="consultation-information-page-content__first-session__blocks__item__number">
              1.
            </span>
            <h4 className="consultation-information-page-content__first-session__blocks__item__title">
              Première séance
            </h4>
            <p className="consultation-information-page-content__first-session__blocks__item__paragraph">
              La première séance est dédiée à l'écoute attentive de vos besoins.
              C'est l'occasion pour vous de partager vos attentes et ce qui vous
              a amené à consulter.
            </p>
          </div>
          <div className="consultation-information-page-content__first-session__blocks__item">
            <span className="consultation-information-page-content__first-session__blocks__item__number">
              2.
            </span>
            <h4 className="consultation-information-page-content__first-session__blocks__item__title">
              Écoute et objectifs
            </h4>
            <p className="consultation-information-page-content__first-session__blocks__item__paragraph">
              Nous discutons de votre situation et définissons ensemble les
              objectifs de votre suivi, qu'il s'agisse d'émotions, de
              comportements ou d'améliorer votre qualité de vie.
            </p>
          </div>
          <div className="consultation-information-page-content__first-session__blocks__item">
            <span className="consultation-information-page-content__first-session__blocks__item__number">
              3.
            </span>
            <h4 className="consultation-information-page-content__first-session__blocks__item__title">
              Modalités du suivi
            </h4>
            <p className="consultation-information-page-content__first-session__blocks__item__paragraph">
              Nous convenons des modalités pratiques : fréquence des séances et
              durée estimée de la thérapie, pour un accompagnement adapté à
              votre rythme.
            </p>
          </div>
        </div>
      </div>

      <div className="consultation-information-page-content__personalized-assessment">
        <div className="consultation-information-page-content__image-container">
          <Image
            src={OfficeDecoration5}
            alt="Image de 2 pots avec des plantes vertes sur fond blanc"
            className="consultation-information-page-content__image-container__image"
          />
        </div>
        <div className="consultation-information-page-content__personalized-assessment__content">
          <div className="consultation-information-page-content__personalized-assessment__content__texts">
            <h3 className="consultation-information-page-content__personalized-assessment__content__texts__title">
              Bilans psychologiques
            </h3>
            <p className="consultation-information-page-content__personalized-assessment__content__texts__paragraph">
              En tant que neuropsychologue, je propose des bilans psychologiques
              pour enfants, adolescents et adultes.
            </p>
            <p className="consultation-information-page-content__personalized-assessment__content__texts__paragraph">
              Ces évaluations peuvent vous aider à mieux vous comprendre (bilans
              de personnalité) ou à poser un diagnostic, comme le Trouble du
              Spectre Autistique, le Trouble Déficitaire de l’Attention, ou
              encore le Haut Potentiel Intellectuel.
            </p>
          </div>
        </div>
      </div>

      <div className="consultation-information-page-content__therapeutic-approaches">
        <h3 className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text__title">
          Approches thérapeutiques
        </h3>
        <div className="consultation-information-page-content__therapeutic-approaches__blocks">
          <div className="consultation-information-page-content__therapeutic-approaches__blocks__item">
            <h4 className="consultation-information-page-content__therapeutic-approaches__blocks__item__title">
              Thérapies cognitivo-comportementales (TCC)
            </h4>
            <p className="consultation-information-page-content__therapeutic-approaches__blocks__item__paragraph">
              Les TCC sont une approche structurée visant à identifier et à
              modifier les pensées et comportements négatifs. Cette méthode vous
              aide à mieux comprendre le lien entre vos pensées, émotions et
              actions, afin de développer des stratégies pour les transformer et
              améliorer votre bien-être au quotidien.
            </p>
          </div>
          <div className="consultation-information-page-content__therapeutic-approaches__blocks__item">
            <h4 className="consultation-information-page-content__therapeutic-approaches__blocks__item__title">
              Thérapie par l'acceptation et l'engagement (ACT)
            </h4>
            <p className="consultation-information-page-content__therapeutic-approaches__blocks__item__paragraph">
              L’ACT encourage la pleine conscience et l’acceptation des émotions
              difficiles, plutôt que leur évitement. Elle vous aide à vous
              concentrer sur ce qui compte vraiment pour vous, tout en vous
              engageant dans des actions qui alignent vos valeurs personnelles
              et vos objectifs de vie.
            </p>
          </div>
          <div className="consultation-information-page-content__therapeutic-approaches__blocks__item">
            <h4 className="consultation-information-page-content__therapeutic-approaches__blocks__item__title">
              Thérapie des schémas
            </h4>
            <p className="consultation-information-page-content__therapeutic-approaches__blocks__item__paragraph">
              La thérapie des schémas explore les schémas de pensée inconscients
              développés depuis l’enfance, qui influencent vos comportements
              actuels. L’objectif est de remettre en question ces schémas,
              souvent dysfonctionnels, afin de favoriser des changements
              durables et un mieux-être émotionnel.
            </p>
          </div>
        </div>
      </div>

      <div className="consultation-information-page-content__troubles">
        <h3 className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text__title">
          Prise en charge des troubles
        </h3>
        <div className="consultation-information-page-content__content__troubles__text">
          Je suis également formée à la prise en charge des troubles du stress
          post-traumatique (PTSD) ainsi qu’aux addictions.
        </div>
      </div>

      <ImageBlock
        src={Plant}
        alt="Image d'une plante verte"
        className={'image-block-container__smaller-version'}
      />

      <div className="consultation-information-page-content__conclusion">
        <p className="consultation-information-page-content__conclusion__paragraph">
          Quel que soit le trouble que vous rencontrez, vous n’êtes pas seul.
          Ensemble, nous trouverons des solutions adaptées pour vous
          accompagner. Nous construirons un suivi personnalisé pour vous aider à
          mieux comprendre et surmonter ces difficultés.
        </p>
        <Button link="" text="Prendre rendez-vous" />
      </div>
    </section>
  );
}

export default ConsultationInformationPageContent;
