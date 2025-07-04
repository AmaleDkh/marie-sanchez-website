// React and Next elements
import { useState } from 'react';
import Link from 'next/link';

// Component
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function NavigationMenu() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  };

  const closeHamburgerMenu = () => {
    setTimeout(() => {
      setIsHamburgerMenuOpen(false);
    }, 500);
  };

  return (
    <div className="navigation-container__mobile-version">
      <div
        className="navigation-container__mobile-version__hamburger-menu"
        onClick={toggleHamburgerMenu}
      >
        <span className="navigation-container__mobile-version__hamburger-menu__bar"></span>
        <span className="navigation-container__mobile-version__hamburger-menu__bar"></span>
        <span className="navigation-container__mobile-version__hamburger-menu__bar"></span>
      </div>
      {isHamburgerMenuOpen === true && (
        <div>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsHamburgerMenuOpen(false)}
          />

          <nav
            className={`navigation-container__mobile-version__navigation-menu ${
              isHamburgerMenuOpen
                ? 'navigation-container__mobile-version__navigation-menu--open'
                : ''
            }`}
          >
            <ul className="navigation-container__mobile-version__navigation-menu__list">
              <li className="navigation-container__mobile-version__navigation-menu__list__item">
                <Link onClick={closeHamburgerMenu} href="/consultations">
                  CONSULTATIONS
                </Link>
              </li>
              <li className="navigation-container__mobile-version__navigation-menu__list__item">
                <Link
                  onClick={closeHamburgerMenu}
                  href="/practical-information"
                >
                  DURÉE & TARIFS
                </Link>
              </li>
              <li className="navigation-container__mobile-version__navigation-menu__list__item">
                <Link
                  onClick={closeHamburgerMenu}
                  href="/frequently-asked-questions"
                >
                  QUESTIONS
                </Link>
              </li>
              <li className="navigation-container__mobile-version__navigation-menu__list__item">
                <Link onClick={closeHamburgerMenu} href="/about">
                  À PROPOS
                </Link>
              </li>
              <ButtonWithIcon />
            </ul>
          </nav>
        </div>
      )}
      <nav className="navigation-container__navigation-menu">
        <ul className="navigation-container__navigation-menu__list">
          <li className="navigation-container__navigation-menu__list__item">
            <Link onClick={closeHamburgerMenu} href="/consultations">
              CONSULTATIONS
            </Link>
          </li>
          <li className="navigation-container__navigation-menu__list__item">
            <Link onClick={closeHamburgerMenu} href="/practical-information">
              DURÉE & TARIFS
            </Link>
          </li>
          <li className="navigation-container__navigation-menu__list__item">
            <Link
              onClick={closeHamburgerMenu}
              href="/frequently-asked-questions"
            >
              QUESTIONS
            </Link>
          </li>
          <li className="navigation-container__navigation-menu__list__item">
            <Link onClick={closeHamburgerMenu} href="/about">
              À PROPOS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMenu;
