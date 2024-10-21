// Components
import Presentation from '../Presentation/Presentation';
import PracticalInformation from '../PracticalInformation/PracticalInformation';
import ConsultationInformation from '../ConsultationInformation/ConsultationInformation';

function MainContent() {
  return (
    <main className="main">
      <Presentation />
      <PracticalInformation />
      <ConsultationInformation />
    </main>
  );
}

export default MainContent;
