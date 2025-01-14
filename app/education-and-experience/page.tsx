// Components
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import EducationAndExperiencePageContent from '../../components/EducationAndExperiencePageContent/EducationAndExperiencePageContent';

// Image
import Nature4 from '../../assets/images/nature4.webp';

function EducationAndExperiencePage() {
  return (
    <>
      <ImageBlock
        src={Nature4}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__higher-version '}
      />
      <EducationAndExperiencePageContent />
    </>
  );
}

export default EducationAndExperiencePage;
