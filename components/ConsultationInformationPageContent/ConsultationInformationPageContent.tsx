// Components
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import Subtitle from '../Subtitle/Subtitle';
import ImageBlock from '../ImageBlock/ImageBlock';
import Button from '../Button/Button';
import TitleAndText from '../TitleAndText/TitleAndText';
import ImageContainer from '../ImageContainer/ImageContainer';

// Image
import OfficeDecoration4 from '../../assets/images/office-decoration4.webp';
import OfficeDecoration5 from '../../assets/images/office-decoration5.webp';
import Plant from '../../assets/images/plant.jpg';

function ConsultationInformationPageContent() {
  return (
    <section className="consultation-information__page">
      <PageIntroduction text="Bienvenue dans un espace d'écoute et de soutien" />

      <div className="consultation-information__page__content">
        <div className="consultation-information__page__content__welcomed-profiles">
          <div className="consultation-information__page__content__welcomed-profiles__texts">
            <div className="consultation-information__page__content__welcomed-profiles__texts__text-block">
              <Subtitle text="Un accompagnement inclusif pour chacun" />
              <p className="consultation-information__page__content__welcomed-profiles__texts__paragraph">
                J’accueille des adultes et des jeunes adultes, y compris les
                personnes issues des communautés LGBTQIA+ et celles avec des
                profils neuroatypiques.
              </p>
            </div>

            <div className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text">
              <Subtitle text="Une approche personnalisée" />
              <p className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__paragraph">
                Mon approche s’adapte à chaque patient pour répondre à vos
                besoins uniques. L’objectif est d’explorer vos émotions et
                pensées, afin de vous aider à retrouver en vous les ressources
                pour mieux vous comprendre et améliorer votre qualité de vie.
              </p>
            </div>
          </div>

          <ImageContainer
            src={OfficeDecoration4}
            alt="Image d'un fauteuil avec un coussin et une plante verte en arrière-plan"
          />
        </div>
      </div>

      <div className="consultation-information__page__first-session">
        <Subtitle text="Un accompagnement bienveillant à chaque étape" />
        <div className="consultation-information__page__first-session__blocks">
          <TitleAndText
            number="1."
            title="Première séance"
            text="La première séance est dédiée à l'écoute attentive de vos besoins.
            C'est l'occasion pour vous de partager vos attentes et ce qui vous
            a amené à consulter."
          />
          <TitleAndText
            number="2."
            title="Écoute et objectifs"
            text="Nous discutons de votre situation et définissons ensemble les
            objectifs de votre suivi, qu'il s'agisse d'émotions, de
            comportements ou d'améliorer votre qualité de vie."
          />
          <TitleAndText
            number="3."
            title="Modalités du suivi"
            text="Nous convenons des modalités pratiques : fréquence des séances et
            durée estimée de la thérapie, pour un accompagnement adapté à
            votre rythme."
          />
        </div>
      </div>

      <div className="consultation-information__page__personalized-assessment">
        <ImageContainer
          src={OfficeDecoration5}
          alt="Image de 2 pots avec des plantes vertes sur fond blanc"
        />

        <div className="consultation-information__page__personalized-assessment__content">
          <div className="consultation-information__page__personalized-assessment__content__texts">
            <Subtitle text="Bilans psychologiques" />
            <p className="consultation-information__page__personalized-assessment__content__texts__paragraph">
              En tant que neuropsychologue, je propose des bilans psychologiques
              pour enfants, adolescents et adultes.
            </p>
            <p className="consultation-information__page__personalized-assessment__content__texts__paragraph">
              Ces évaluations peuvent vous aider à mieux vous comprendre (bilans
              de personnalité) ou à poser un diagnostic, comme le Trouble du
              Spectre Autistique, le Trouble Déficitaire de l’Attention, ou
              encore le Haut Potentiel Intellectuel.
            </p>
          </div>
        </div>
      </div>

      <div className="consultation-information__page__therapeutic-approaches">
        <Subtitle text="Approches thérapeutiques" />
        <div className="consultation-information__page__therapeutic-approaches__blocks">
          <TitleAndText
            number={null}
            title="Thérapies cognitivo-comportementales (TCC)"
            text="Les TCC sont une approche structurée visant à identifier et à
              modifier les pensées et comportements négatifs. Cette méthode vous
              aide à mieux comprendre le lien entre vos pensées, émotions et
              actions, afin de développer des stratégies pour les transformer et
              améliorer votre bien-être au quotidien."
          />
          <TitleAndText
            number={null}
            title="Thérapie par l'acceptation et l'engagement (ACT)"
            text="L’ACT encourage la pleine conscience et l’acceptation des émotions
            difficiles, plutôt que leur évitement. Elle vous aide à vous
            concentrer sur ce qui compte vraiment pour vous, tout en vous
            engageant dans des actions qui alignent vos valeurs personnelles
            et vos objectifs de vie."
          />
          <TitleAndText
            number={null}
            title="Thérapie des schémas"
            text="La thérapie des schémas explore les schémas de pensée inconscients
            développés depuis l’enfance, qui influencent vos comportements
            actuels. L’objectif est de remettre en question ces schémas,
            souvent dysfonctionnels, afin de favoriser des changements
            durables et un mieux-être émotionnel."
          />
        </div>
      </div>

      <div className="consultation-information__page__troubles">
        <Subtitle text="Prise en charge des troubles" />
        <div className="consultation-information-page-content__content__troubles__text">
          Je suis également formée à la prise en charge des troubles du stress
          post-traumatique (PTSD) ainsi qu’aux addictions.
        </div>
      </div>

      <ImageBlock
        src={Plant}
        alt="Image d'une plante verte"
        className={
          'image-block-container image-block-container__smaller-version image-block-container__smaller-version__margin-top'
        }
      />

      <div className="consultation-information__page__conclusion">
        <p className="consultation-information__page__conclusion__paragraph">
          Quel que soit le trouble que vous rencontrez, vous n’êtes pas seul.
          Ensemble, nous trouverons des solutions adaptées pour vous
          accompagner. Nous construirons un suivi personnalisé pour vous aider à
          mieux comprendre et surmonter ces difficultés.
        </p>
        <Button
          link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
          text="Prendre rendez-vous"
          className="button"
        />
      </div>
    </section>
  );
}

export default ConsultationInformationPageContent;
