// Next element
import Link from 'next/link';

// Component
import NavigationMenu from '../NavigationMenu/NavigationMenu';

function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__principal-information">
        <div className="header__principal-information__names">
          Marie Sanchez
        </div>
        <div className="header__principal-information__profession">
          Psychologue Clinicienne
        </div>
      </Link>
      <div className="header__navigation-menu">
        <a className="header__navigation-menu__link">PRENDRE RENDEZ-VOUS</a>
        <nav className="header__navigation-menu__hamburger-menu">
          <NavigationMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
