// Next element
import Link from 'next/link';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function ButtonWithIcon() {
  return (
    <Link href="https://www.maiia.com/psychologue/33150-cenon/sanchez-marie">
      <button className="button-with-icon__container">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="button-with-icon__container__button"
        />
      </button>
    </Link>
  );
}

export default ButtonWithIcon;
