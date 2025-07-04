// Next element
import Link from 'next/link';

// Style
import './Name.scss';

function Name({ colorVersion }) {
  return (
    <Link href="/" className={`header__principal-information ${colorVersion}`}>
      <div className="header__principal-information__names">Marie Sanchez</div>
      <div className="header__principal-information__profession">
        Psychologue-Clinicienne
      </div>
    </Link>
  );
}

export default Name;
