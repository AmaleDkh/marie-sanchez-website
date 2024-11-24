// Next element
import Link from 'next/link';

// Font Awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function ButtonWithIcon() {
  return (
    <Link href="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466">
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
