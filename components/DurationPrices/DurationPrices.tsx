'use client';

// Next element
import { usePathname } from 'next/navigation';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import Button from '../Button/Button';

function DurationPrices({ className }) {
  const pathname = usePathname();

  const isDurationsPrices = pathname === '/duration-and-prices';

  return (
    <section className={className}>
      {!isDurationsPrices && (
        <SectionTitle
          title="DURÉE & TARIFS"
          className="section-title centred"
        />
      )}
      <div className="duration-prices__container">
        <div className="duration-prices__container__content">
          <Card title="DURÉE" text1="50 minutes" text2={null} />
          <Card
            title="TARIFS"
            text1={'1ère consultation : \n50 €'}
            text2={'Les suivantes : \n60 €'}
          />
          <Card title="BILANS" text1="entre 200 € et 400 €" text2={null} />
        </div>
        {pathname === '/' && (
          <div className="consultation-information__text__presentation__button-container">
            <Button
              link="/duration-and-prices"
              text="Choisissez la consultation qui vous convient"
              className="button button-to-hide"
            />

            <Button
              link="/duration-and-prices"
              text="Toutes les informations"
              className="button button-mobile-version"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default DurationPrices;
