// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        text={'Lorem ipsum'}
      />

      <PracticalInformationIcon icon={faPhone} size="3x" text={'Lorem ipsum'} />

      <PracticalInformationIcon
        icon={faEnvelopeOpen}
        size="3x"
        text={'Lorem ipsum'}
      />
    </section>
  );
}

export default PracticalInformation;
