// Next element
import { useRouter } from 'next/router';

// Component
import SectionTitle from '../SectionTitle/SectionTitle';

function DurationPrices({ className }) {
  const router = useRouter();

  const isDurationsPrices = router.pathname === '/duration-and-prices';

  return (
    <section className={className}>
      {!isDurationsPrices && <SectionTitle title="DURÉE & TARIFS" />}
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
  );
}

export default DurationPrices;
