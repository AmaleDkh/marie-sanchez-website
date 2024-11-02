// Next element
import Image from 'next/image';

// Components
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import DurationPrices from '../DurationPrices/DurationPrices';
import Subtitle from '../Subtitle/Subtitle';
import ImageBlock from '../ImageBlock/ImageBlock';
import Session from '../Session/Session';
import TitleAndText from '../TitleAndText/TitleAndText';

// Images
import OfficeDecoration6 from '../../assets/images/office-decoration6.webp';
import Plant2 from '../../assets/images/plant2.webp';

function DurationPricesPageContent() {
  return (
    <section className="duration-prices-page-content">
      <PageIntroduction text="Une prise en charge adaptée à vos besoins" />

      <DurationPrices className="duration-prices duration-prices__page-content" />

      <div className="duration-prices-page-content__content">
        <div className="duration-prices-page-content__content__texts">
          <Subtitle text="Déroulement des consultations" />
          <ul className="duration-prices-page-content__content__texts__list">
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

        <div className="consultation-information-page-content__image-container">
          <Image
            src={OfficeDecoration6}
            alt="Image d'un fauteuil avec un coussin et une plante verte en arrière-plan"
            className="consultation-information-page-content__image-container__image"
          />
        </div>
      </div>

      <div className="consultation-information-page-content__first-session">
        <Subtitle text=" Informations tarifaires" />
        <div className="consultation-information-page-content__first-session__blocks">
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

        <p className="duration-prices-page-content__price-information">
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
