// React & Next elements
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

// Style
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__sections">
          <div className="footer__section">
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contact">
              <a href="tel:0123456789" className="footer__link">
                <Phone size={16} />
                06 68 64 94 88
              </a>
              <a
                href="mailto:contact@isabellemartin.fr"
                className="footer__link"
              >
                <Mail size={16} />
                mariesanchezpsy@gmail.com
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <MapPin size={16} />
                28 rue Fernand Favre, 33100 Cenon
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__heading">Navigation</h3>
            <div className="footer__nav">
              <Link href="/consultations" className="footer__link">
                Consultations
              </Link>
              <Link href="/practical-information" className="footer__link">
                Tarifs
              </Link>
              <Link href="/frequently-asked-questions" className="footer__link">
                Questions
              </Link>
              <Link href="/about" className="footer__link">
                À propos
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__info">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Marie Sanchez
            </p>
            <p className="footer__design">
              Design & Code par
              <a
                href="https://amale-dkhissi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__design-link"
              >
                {''} Amale Dkhissi
              </a>
            </p>
          </div>
          {/* <div className="footer__legal">
            <Link href="/mentions-legales" className="footer__legal-link">
              Mentions légales
            </Link>
            <span className="footer__legal-separator">•</span>
            <Link
              href="/politique-confidentialite"
              className="footer__legal-link"
            >
              Politique de confidentialité
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
