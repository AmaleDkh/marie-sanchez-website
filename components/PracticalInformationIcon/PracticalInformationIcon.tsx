// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PracticalInformationIcon({ icon, size, text }) {
  return (
    <div className="practical-information__item">
      <FontAwesomeIcon
        icon={icon}
        size={size}
        className="practical-information__item__icon"
      />
      <div className="practical-information__item__text">{text}</div>
    </div>
  );
}

export default PracticalInformationIcon;
