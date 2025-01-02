// Font Awesome icons
import {
  faLocationDot,
  faPhone,
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';

import PracticalInformationIcon from '../PracticalInformationIcon/PracticalInformationIcon';

function PracticalInformation() {
  return (
    <section className="practical-information">
      <PracticalInformationIcon
        icon={faLocationDot}
        size="3x"
        text={
          <div className="practical-information__address">
            38 rue Fernand Favre <br></br> 33100 Cenon
          </div>
        }
      />

      <PracticalInformationIcon
        icon={faEnvelopeOpen}
        size="3x"
        text="mariesanchezpsy@gmail.com"
      />

      <PracticalInformationIcon
        icon={faPhone}
        size="3x"
        text={'07 56 97 91 14'}
      />
    </section>
  );
}

export default PracticalInformation;
