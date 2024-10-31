// Components
import Presentation from '../Presentation/Presentation';
import PracticalInformation from '../PracticalInformation/PracticalInformation';
import ConsultationInformation from '../ConsultationInformation/ConsultationInformation';
import DurationPrices from '../DurationPrices/DurationPrices';
import ImageBlock from '../ImageBlock/ImageBlock';
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';

function MainContent() {
  return (
    <main className="main">
      <Presentation />
      <PracticalInformation />
      <ConsultationInformation />
      <DurationPrices className="" />
      <FrequentlyAskedQuestions className="" />
      <ImageBlock />
      <EducationAndExperience className="" />
    </main>
  );
}

export default MainContent;
