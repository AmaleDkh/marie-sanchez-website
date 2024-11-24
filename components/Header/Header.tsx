// React and Next elements
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Components
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Button from '../Button/Button';

function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 576);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <header className="header">
      <Link href="/" className="header__principal-information">
        <div className="header__principal-information__names">
          Marie Sanchez
        </div>
        <div className="header__principal-information__profession">
          Psychologue-Clinicienne
        </div>
      </Link>

      <div className="header__block">
        {!isSmallScreen ? (
          <>
            <nav className="header__navigation-menu__hamburger-menu">
              <NavigationMenu />
            </nav>

            <Button
              link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
              text="PRENDRE RENDEZ-VOUS"
              className="button"
            />
          </>
        ) : (
          <>
            <Button
              link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
              text="PRENDRE RENDEZ-VOUS"
              className="button"
            />
            <nav className="header__navigation-menu__hamburger-menu">
              <NavigationMenu />
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
