// React element
import { useState } from 'react';

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
              Consultations
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              Durée & tarifs
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              Foire aux questions
            </li>
            <li className="navigation-container__navigation-menu__list__item">
              Formations & expériences
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavigationMenu;
