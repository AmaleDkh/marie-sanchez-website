// Components
import Presentation from '../Presentation/Presentation';
import PracticalInformation from '../PracticalInformation/PracticalInformation';
import ConsultationInformation from '../ConsultationInformation/ConsultationInformation';
import DurationPrices from '../DurationPrices/DurationPrices';
import ImageBlock from '../ImageBlock/ImageBlock';

function MainContent() {
  return (
    <main className="main">
      <Presentation />
      <PracticalInformation />
      <ConsultationInformation />
      <DurationPrices />
      <ImageBlock />
    </main>
  );
}

export default MainContent;
