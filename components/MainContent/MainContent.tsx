// Components
import Presentation from '../Presentation/Presentation';
import PracticalInformation from '../PracticalInformation/PracticalInformation';
import ConsultationInformation from '../ConsultationInformation/ConsultationInformation';
import DurationPrices from '../DurationPrices/DurationPrices';
import ImageBlock from '../ImageBlock/ImageBlock';
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions';

function MainContent() {
  return (
    <main className="main">
      <Presentation />
      <PracticalInformation />
      <ConsultationInformation />
      <DurationPrices />
      <FrequentlyAskedQuestions />
      <ImageBlock />
    </main>
  );
}

export default MainContent;
