// Components
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import DurationPrices from '../DurationPrices/DurationPrices';
import Subtitle from '../Subtitle/Subtitle';
import ImageBlock from '../ImageBlock/ImageBlock';
import Session from '../Session/Session';
import TitleAndText from '../TitleAndText/TitleAndText';
import ImageContainer from '../ImageContainer/ImageContainer';

// Images
import OfficeDecoration6 from '../../assets/images/office-decoration6.webp';
import Plant2 from '../../assets/images/plant2.webp';

function DurationPricesPageContent() {
  return (
    <section className="duration-prices__page">
      <PageIntroduction text="Une prise en charge adaptée à vos besoins" />

      <DurationPrices className="duration-prices duration-prices__page-content" />

      <div className="duration-prices__page__content">
        <div className="duration-prices__page__content__texts">
          <Subtitle text="Déroulement des consultations" />
          <ul className="duration-prices__page__content__texts__list">
            <Session
              title="Première consultation"
              duration="45 minutes"
              paragraph="Discussion initiale pour expliquer et comprendre la demande."
            />
            <Session
              title="Séance de passation des tests"
              duration="1h à 1h30"
              paragraph="Réalisation des tests adaptés selon la demande."
            />
            <Session
              title="Restitution des résultats"
              duration="50 minutes à 1h"
              paragraph=" Retour des résultats avec remise d’un compte rendu écrit en
              mains propres."
            />
          </ul>
        </div>

        <ImageContainer
          src={OfficeDecoration6}
          alt="Image d'un fauteuil avec un coussin et une plante verte en arrière-plan"
        />
      </div>

      <div className="duration-prices__page__price-information">
        <Subtitle text="Informations tarifaires" />
        <div className="duration-prices__page__price-information__blocks">
          <TitleAndText
            number={null}
            title="Paiement"
            text="En deux ou trois fois possible"
          />
          <TitleAndText
            number={null}
            title="Options de réglement"
            text="En deux ou trois fois possible"
          />
        </div>

        <p className="duration-prices__page__price-information__important-point">
          Attention : toute séance non annulée 24h en avance sera considérée
          comme due.
        </p>
      </div>

      <ImageBlock
        src={Plant2}
        alt="Image d'une plante verte"
        className={
          'image-block-container image-block-container__smaller-version image-block-container__smaller-version__margin-top'
        }
      />
    </section>
  );
}

export default DurationPricesPageContent;
