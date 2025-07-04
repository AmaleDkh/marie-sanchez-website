'use client';

// Next element
import { usePathname } from 'next/navigation';

// Components
import Card from '../Card/Card';
import Button from '../Button/Button';

function DurationPrices({ className }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <section className={className}>
      {/* {isHomepage && (
        <SectionTitle
          title="Durée & tarifs"
          className="section-title centred"
        />
      )} */}

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
        {isHomepage && (
          <div className="consultation-information__text__presentation__button-container">
            <Button
              link="/practical-information"
              text="Choisissez la consultation qui vous convient"
              className="button button-to-hide"
            />

            <Button
              link="/practical-information"
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
