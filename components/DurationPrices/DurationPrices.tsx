// Next element
import { useRouter } from 'next/router';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';

function DurationPrices({ className }) {
  const router = useRouter();

  const isDurationsPrices = router.pathname === '/duration-and-prices';

  return (
    <section className={className}>
      {!isDurationsPrices && <SectionTitle title="DURÉE & TARIFS" />}
      <div className="duration-prices__container">
        <Card title="DURÉE" text1="50 minutes" text2={null} />
        <Card
          title="TARIF"
          text1="1ère consultation : 50 €"
          text2="Les suivantes : 60 €"
        />
        <Card title="BILANS" text1="entre 200 € et 400 €" text2={null} />
      </div>
    </section>
  );
}

export default DurationPrices;
