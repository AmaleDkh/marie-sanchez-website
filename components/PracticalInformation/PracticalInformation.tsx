// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';

function PracticalInformation() {
  return (
    <section className="practical-information">
      <div className="practical-information__item">
        <FontAwesomeIcon
          icon={faLocationDot}
          size="3x"
          className="practical-information__item__icon"
        />
        <div className="practical-information__item__text">TBC</div>
      </div>
      <div className="practical-information__item">
        <FontAwesomeIcon
          icon={faPhone}
          size="3x"
          className="practical-information__item__icon"
        />
        <div className="practical-information__item__text">TBC</div>
      </div>
      <div className="practical-information__item">
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          size="3x"
          className="practical-information__item__icon"
        />
        <div className="practical-information__item__text">TBC</div>
      </div>
    </section>
  );
}

export default PracticalInformation;
