// React and Next elements
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
        <a
          href="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
          className="header__navigation-menu__link"
        >
          PRENDRE RENDEZ-VOUS
        </a>

        <nav className="header__navigation-menu__hamburger-menu">
          <NavigationMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
