// React & Next elements
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Style
import './Header.scss';

// Component
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path: string) => location === path;

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__content">
          <div
            className={`header__logo ${isMenuOpen ? 'header__logo--hidden' : ''}`}
          >
            <Link
              href="/"
              className="header__logo-link"
              onClick={handleLinkClick}
            >


              {/* Marie Sanchez
              <span className="header__logo-subtitle">
                Psychologue-Clinicienne
              </span> */}

               <div className="header__brand">
            <div className="header__brand-name">Marie Sanchez</div>
            <div className="header__brand-title">Psychologue-Clinicienne</div>
          </div>
            </Link>
          </div>

          {isMenuOpen ? (
            <button
              className="header__menu-close"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <X size={24} />
            </button>
          ) : (
            <button
              className="header__menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} />
            </button>
          )}

          <div
            className={`header__nav-wrapper ${isMenuOpen ? 'header__nav-wrapper--open' : ''}`}
          >
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link
                    href="/consultations"
                    className={
                      isActive('/consultations')
                        ? 'header__nav-link header__nav-link--active'
                        : 'header__nav-link'
                    }
                    onClick={handleLinkClick}
                  >
                    Consultations
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/practical-information"
                    className={
                      isActive('/practical-information')
                        ? 'header__nav-link header__nav-link--active'
                        : 'header__nav-link'
                    }
                    onClick={handleLinkClick}
                  >
                    Tarifs
                  </Link>
                </li>
                {/* <li className="header__nav-item">
                  <Link
                    href="/frequently-asked-questions"
                    className={
                      isActive('/frequently-asked-questions')
                        ? 'header__nav-link header__nav-link--active'
                        : 'header__nav-link'
                    }
                    onClick={handleLinkClick}
                  >
                    Questions
                  </Link>
                </li> */}
                <li className="header__nav-item">
                  <Link
                    href="/about"
                    className={
                      isActive('/about')
                        ? 'header__nav-link header__nav-link--active'
                        : 'header__nav-link'
                    }
                    onClick={handleLinkClick}
                  >
                    À propos
                  </Link>
                </li>
              </ul>
            </nav>
            <PrimaryButton
              link="https://www.maiia.com/psychologue/33150-cenon/sanchez-marie"
              text="Prendre rendez-vous"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
