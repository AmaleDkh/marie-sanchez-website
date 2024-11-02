// Next element
import Image from 'next/image';

// Components
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import DurationPrices from '../DurationPrices/DurationPrices';
import Subtitle from '../Subtitle/Subtitle';
import ImageBlock from '../ImageBlock/ImageBlock';

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
            <li className="duration-prices-page-content__content__texts__list__item">
              <h4 className="duration-prices-page-content__content__texts__list__item__title">
                Première consultation
              </h4>
              <p className="duration-prices-page-content__content__texts__list__item__duration">
                45 minutes
              </p>
              <p className="duration-prices-page-content__content__texts__list__item__paragraph">
                Discussion initiale pour expliquer et comprendre la demande.
              </p>
            </li>
            <li className="duration-prices-page-content__content__texts__list__item">
              <h4 className="duration-prices-page-content__content__texts__list__item__title">
                Séance de passation des tests
              </h4>
              <p className="duration-prices-page-content__content__texts__list__item__duration">
                1h à 1h30
              </p>
              <p className="duration-prices-page-content__content__texts__list__item__paragraph">
                Réalisation des tests adaptés selon la demande.
              </p>
            </li>
            <li className="duration-prices-page-content__content__texts__list__item">
              <h4 className="duration-prices-page-content__content__texts__list__item__title">
                Restitution des résultats
              </h4>
              <p className="duration-prices-page-content__content__texts__list__item__duration">
                50 minutes à 1h
              </p>
              <p className="duration-prices-page-content__content__texts__list__item__paragraph">
                Retour des résultats avec remise d’un compte rendu écrit en
                mains propres.
              </p>
            </li>
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
          <div className="consultation-information-page-content__first-session__blocks__item">
            <h4 className="consultation-information-page-content__first-session__blocks__item__title">
              Paiement
            </h4>
            <p className="consultation-information-page-content__first-session__blocks__item__paragraph">
              En deux ou trois fois possible
            </p>
          </div>
          <div className="consultation-information-page-content__first-session__blocks__item">
            <h4 className="consultation-information-page-content__first-session__blocks__item__title">
              Options de réglement
            </h4>
            <p className="consultation-information-page-content__first-session__blocks__item__paragraph">
              Espèces, chèque, ou virement bancaire
            </p>
          </div>
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
