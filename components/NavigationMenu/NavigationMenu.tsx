// React and Next elements
import { useState } from 'react';
import Link from 'next/link';

function NavigationMenu() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="navigation-container">
      <div
        className="navigation-container__hamburger-menu"
        onClick={toggleHamburgerMenu}
      >
        <span className="navigation-container__hamburger-menu__bar"></span>
        <span className="navigation-container__hamburger-menu__bar"></span>
        <span className="navigation-container__hamburger-menu__bar"></span>
      </div>
      {isHamburgerMenuOpen === true && (
        <nav className="navigation-container__navigation-menu">
          <ul className="navigation-container__navigation-menu__list">
            <li className="navigation-container__navigation-menu__list__item">
              <Link href="/">Accueil</Link>
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              <Link href="/consultations">Consultations</Link>
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              <Link href="/duration-and-prices"> Durée & tarifs</Link>
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              <Link href="/frequently-asked-questions">
                Foire aux questions
              </Link>
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              <Link href="/education-and-experience">Mon parcours</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavigationMenu;
