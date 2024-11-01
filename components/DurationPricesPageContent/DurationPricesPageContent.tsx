// Next element
import Image from 'next/image';

// Component
import ImageBlock from '../ImageBlock/ImageBlock';

// Images
import OfficeDecoration6 from '../../assets/images/office-decoration6.webp';
import Plant2 from '../../assets/images/plant2.webp';

function DurationPricesPageContent() {
  return (
    <section className="duration-prices-page-content">
      <h2 className="duration-prices-page-content__title">
        Une prise en charge adaptée à vos besoins et à votre rythme
      </h2>

      <section className="duration-prices">
        <div className="duration-prices__container">
          <div className="duration-prices__container__block">
            <div className="duration-prices__container__block__item-block">
              <div className="duration-prices__container__block__item-block__title">
                DURÉE
              </div>
              <p className="duration-prices__container__block__item-block__paragraph">
                <strong>50</strong> minutes
              </p>
            </div>
            <div className="duration-prices__container__block__square"></div>
          </div>

          <div className="duration-prices__container__block">
            <div className="duration-prices__container__block__item-block">
              <div className="duration-prices__container__block__item-block__title">
                TARIF
              </div>
              <p className="duration-prices__container__block__item-block__paragraph__first">
                1ère consultation : <strong>50 €</strong>
              </p>
              <p className="duration-prices__container__block__item-block__paragrap__second">
                Les suivantes : <strong>60 €</strong>
              </p>
            </div>
            <div className="duration-prices__container__block__square"></div>
          </div>

          <div className="duration-prices__container__block">
            <div className="duration-prices__container__block__item-block">
              <div className="duration-prices__container__block__item-block__title">
                BILANS
              </div>
              <p className="duration-prices__container__block__item-block__paragraph">
                entre <strong>200 €</strong> et <strong>400 €</strong> <br></br>
                (sur mesure)
              </p>
            </div>
            <div className="duration-prices__container__block__square"></div>
          </div>
        </div>
      </section>

      <div className="duration-prices-page-content__content">
        <div className="duration-prices-page-content__content__texts">
          <h3 className="duration-prices-page-content__content__texts__title">
            Déroulement des consultations
          </h3>
          <ul className="duration-prices-page-content__content__texts__list">
            <li className="duration-prices-page-content__content__texts__list__item">
              <h4 className="duration-prices-page-content__content__texts__list__item__title">
                Première consultation (45 minutes)
              </h4>
              <p className="duration-prices-page-content__content__texts__list__item__paragraph">
                Discussion initiale pour expliquer et comprendre la demande.
              </p>
            </li>
            <li className="duration-prices-page-content__content__texts__list__item">
              <h4 className="duration-prices-page-content__content__texts__list__item__title">
                Séance de passation des tests (1h à 1h30)
              </h4>
              <p className="duration-prices-page-content__content__texts__list__item__paragraph">
                Réalisation des tests adaptés selon la demande.
              </p>
            </li>
            <li className="duration-prices-page-content__content__texts__list__item">
              <h4 className="duration-prices-page-content__content__texts__list__item__title">
                Restitution des résultats (50 minutes à 1h)
              </h4>
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
        <h3 className="consultation-information-page-content__content__welcomed-profiles__texts__text-block__text__title">
          Informations tarifaires
        </h3>
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
        className={'image-block-container__smaller-version'}
      />
    </section>
  );
}

export default DurationPricesPageContent;
