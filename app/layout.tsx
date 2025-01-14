'use client';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Style
import '../assets/styles/Global.scss';

function Layout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
