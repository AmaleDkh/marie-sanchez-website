'use client';

// Next element
import Head from 'next/head';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Style
import '../assets/styles/Global.scss';

function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Marie Sanchez | Psychologue-Clinicienne</title>

        <meta
          name="description"
          content="Je suis Marie Sanchez, Psychologue Clinicienne, basée à Cenon près de Bordeaux. Je propose des consultations psychologiques en ligne et en cabinet pour vous accompagner dans votre bien-être émotionnel et psychologique."
        />

        <meta name="title" content="Marie Sanchez | Psychologue-Clinicienne" />

        <meta
          property="og:title"
          content="Marie Sanchez | Psychologue-Clinicienne"
        />

        <meta
          property="og:description"
          content="Je suis Marie Sanchez, Psychologue Clinicienne, spécialisée dans les consultations psychologiques en ligne et en cabinet."
        />

        <meta property="og:image" content="/path-to-your-image.jpg" />

        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
