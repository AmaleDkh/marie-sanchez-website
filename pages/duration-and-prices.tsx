// Components
import DurationPricesPageContent from '../components/DurationPricesPageContent/DurationPricesPageContent';
import ImageBlock from '../components/ImageBlock/ImageBlock';

// Image
import Nature2 from '../assets/images/nature2.webp';

function DurationAndPricesPage() {
  return (
    <>
      <ImageBlock
        src={Nature2}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__higher-version'}
      />
      <DurationPricesPageContent />
    </>
  );
}

export default DurationAndPricesPage;
