// Components
import DurationPricesPageContent from '../../components/DurationPricesPageContent/DurationPricesPageContent';
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import Button from '../../components/Button/Button';

// Image
import Nature2 from '../../assets/images/nature2.webp';

function DurationAndPricesPage() {
  return (
    <div className="duration-prices__page-version">
      <ImageBlock
        src={Nature2}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__higher-version '}
      />
      <DurationPricesPageContent />
      <div className="duration-prices__page-version__button-container">
        <Button
          link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
          text="Prendre rendez-vous"
          className={'button button__margin'}
        />
      </div>
    </div>
  );
}

export default DurationAndPricesPage;
