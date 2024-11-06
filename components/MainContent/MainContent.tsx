// Components
import Presentation from '../Presentation/Presentation';
import PracticalInformation from '../PracticalInformation/PracticalInformation';
import ConsultationInformation from '../ConsultationInformation/ConsultationInformation';
import DurationPrices from '../DurationPrices/DurationPrices';
import ImageBlock from '../ImageBlock/ImageBlock';
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';

// Image
import OfficeDecoration2 from '../../assets/images/office-decoration2.webp';

function MainContent() {
  return (
    <main className="main">
      <Presentation />
      <PracticalInformation />
      <ConsultationInformation />
      <DurationPrices className="duration-prices" />
      <FrequentlyAskedQuestions
        className={'frequently-asked-questions__homepage-version'}
      />
      <ImageBlock
        src={OfficeDecoration2}
        alt="Image d'un meuble avec un tableau, une lumière en forme de lune et des plantes"
        className={'image-block-container__higher-version'}
      />
      <EducationAndExperience className="" />
    </main>
  );
}

export default MainContent;
