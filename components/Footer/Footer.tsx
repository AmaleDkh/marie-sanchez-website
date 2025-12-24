import './Footer.scss';

function Footer() {
  const contactInfo = [
    {
      label: 'Numéro de portable',
      value: '06 68 64 94 88',
    },
    {
      label: 'E-mail',
      value: 'mariesanchezpsy@gmail.com',
    },
    {
      label: 'Adresse',
      value: '28 rue Fernand Favre, 33100 Cenon',
    },
  ];

  // const navigationLinks = ['Consultations', 'Tarifs', 'À propos'];

  const navigationLinks = [
    {
      name: 'Consultations',
      link: '/consultations',
    },
    {
      name: 'Tarifs',
      link: '/practical-information',
    },
    {
      name: 'À propos',
      link: '/about',
    },
    {
      name: 'Mentions légales',
      link: '/mentions-legales',
    },
  ];

  return (
    <footer className="footer margin-section">

      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__contact">
            {contactInfo.map((info, index) => (
              <div key={index} className="footer__contact-item">
                <div className="footer__contact-label">{info.label}</div>
                <div className="footer__contact-value">{info.value}</div>
              </div>
            ))}
          </div>

          <div className="footer__navigation">
            {navigationLinks.map((navigationLink, index) => (
              <a href={navigationLink.link} key={index} className="footer__nav-link">
                {navigationLink.name}
              </a>
            ))}
          </div>

          <div className="footer__brand">
            <div className="footer__brand-name">Marie Sanchez</div>
            <div className="footer__brand-title">Psychologue-Clinicienne</div>
          </div>
        </div>

        <div className="footer__copyright">
          <div className="footer__copyright-text">
            © 2025
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

// // React & Next elements
// import Link from 'next/link';
// import { Phone, Mail, MapPin } from 'lucide-react';

// // Style
// import './Footer.scss';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer__sections">
//           <div className="footer__section">
//             <h3 className="footer__heading">Contact</h3>
//             <div className="footer__contact">
//               <a href="tel:0123456789" className="footer__link">
//                 <Phone size={16} />
//                 06 68 64 94 88
//               </a>
//               <a
//                 href="mailto:contact@isabellemartin.fr"
//                 className="footer__link"
//               >
//                 <Mail size={16} />
//                 mariesanchezpsy@gmail.com
//               </a>
//               <a
//                 href="https://maps.google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer__link"
//               >
//                 <MapPin size={16} />
//                 28 rue Fernand Favre, 33100 Cenon
//               </a>
//             </div>
//           </div>

//           <div className="footer__section">
//             <h3 className="footer__heading">Navigation</h3>
//             <div className="footer__nav">
//               <Link href="/consultations" className="footer__link">
//                 Consultations
//               </Link>
//               <Link href="/practical-information" className="footer__link">
//                 Tarifs
//               </Link>
//               <Link href="/frequently-asked-questions" className="footer__link">
//                 Questions
//               </Link>
//               <Link href="/about" className="footer__link">
//                 À propos
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="footer__bottom">
//           <div className="footer__info">
//             <p className="footer__copyright">
//               © {new Date().getFullYear()} Marie Sanchez
//             </p>
//             <p className="footer__design">
//               Design & Code par
//               <a
//                 href="https://amale-dkhissi.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="footer__design-link"
//               >
//                 {''} Amale Dkhissi
//               </a>
//             </p>
//           </div>
//           {/* <div className="footer__legal">
//             <Link href="/mentions-legales" className="footer__legal-link">
//               Mentions légales
//             </Link>
//             <span className="footer__legal-separator">•</span>
//             <Link
//               href="/politique-confidentialite"
//               className="footer__legal-link"
//             >
//               Politique de confidentialité
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
