// Components
import ImageBlock from '../components/ImageBlock/ImageBlock';
import ConsultationInformationPageContent from '../components/ConsultationInformationPageContent/ConsultationInformationPageContent';

// Image
import nature from '../assets/images/nature.jpg';

function ConsultationsPage() {
  return (
    <>
      <ImageBlock
        src={nature}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__higher-version'}
      />
      <ConsultationInformationPageContent />
    </>
  );
}

export default ConsultationsPage;
