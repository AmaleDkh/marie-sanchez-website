import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Marie Sanchez | Psychologue-Clinicienne</title>
        <meta
          name="description"
          content="Je suis Marie Sanchez, Psychologue Clinicienne, basée à Cenon près de Bordeaux. Je propose des consultations psychologiques en ligne et en cabinet pour vous accompagner dans votre bien-être émotionnel et psychologique."
        />
        <meta
          property="og:title"
          content="Marie Sanchez | Psychologue-Clinicienne"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
