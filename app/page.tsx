// Components
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ImageAndTextSection from '../components/ImageAndTextSection/ImageAndTextSection';
import Services from '../components/Services/Services';
import LastSectionWithCTA from '../components/LastSectionWithCTA/LastSectionWithCTA';

// Style
import '../assets/styles/Global.scss';
import '../assets/styles/Fonts.scss';

// Images
import OfficeDecoration4 from '../assets/images/office-decoration4.webp';
import OfficeDecoration2 from '../assets/images/office-decoration2.webp';
import Photo from '../assets/images/marie-sanchez.webp';
import OfficeDecoration8 from '../assets/images/office-decoration8.webp';

function Home() {
  return (
    <>
      <HeroBanner
        title="Ici, vous avez le droit de souffler."
        subtitle="Prenons le temps de comprendre ce que vous vivez."
        imageSrc={OfficeDecoration4}
        hasButton={true}
        buttonText="Découvrir les consultations"
      />

      <ImageAndTextSection
        sectionTitle="Un accompagnement sur mesure"
        description={`En tant que <strong style='font-weight: 500;'>Psychologue-Clinicienne et Neuropsychologue</strong>, j'accompagne chaque personne avec <strong style='font-weight: 500;'>une approche bienveillante et sur mesure, adaptée à vos besoins uniques</strong>. <br /> <br />
        Nous <strong style='font-weight: 500;'>explorons ensemble vos émotions et pensées </strong> grâce à des méthodes comme : <br /> <br />
        • Les Thérapies Cognitivo-Comportementales (TCC) <br />
        • La thérapie par l’acceptation et l’engagement (ACT) <br />
        • La thérapie des schémas <br /> <br />
        <strong style='font-weight: 500;'>Mon objectif </strong> est de vous offrir <strong style='font-weight: 500;'>des solutions personnalisées </strong> pour retrouver en vous les ressources nécessaires à une meilleure compréhension de vous-même et une amélioration de votre qualité de vie, afin de retrouver bien-être et équilibre.`}
        imageSrc={Photo}
        imageAlt="Marie Sanchez"
        imageOnLeft={true}
        backgroundColor="medium-green"
        titleColorVersion="beige"
        paddingVersion="all-padding-version"
      />

      {/* <ImageAndTextSection
        sectionTitle="Un accompagnement sur mesure"
        description={`En tant que <strong style='font-weight: 500;'>Psychologue-Clinicienne et Psychothérapeute </strong>, j’accompagne chaque personne avec <strong style='font-weight: 500;'>une écoute attentive, sans jugement, dans le respect de son rythme et de son histoire</strong>. <br /> <br />
        Je propose <strong style='font-weight: 500;'>un suivi adapté à vos besoins</strong>, en m’appuyant notamment sur : <br />
        • Les Thérapies Cognitivo-Comportementales (TCC) <br />
        • La thérapie par l’acceptation et l’engagement (ACT) <br />
        • La thérapie des schémas <br /> <br />
       <strong style='font-weight: 500;'> Mon objectif </strong> : vous aider à <strong style='font-weight: 500;'>mieux comprendre vos émotions, dépasser les blocages et retrouver les ressources en vous </strong> pour avancer avec plus de sérénité.`}
        imageSrc={Photo}
        imageAlt="Marie Sanchez"
        imageOnLeft={true}
        backgroundColor="medium-green"
        titleColorVersion="beige"
        paddingVersion="all-padding-version"
      /> */}

      <ImageAndTextSection
        sectionTitle="Vous n’avez pas à tout porter seul(e)"
        description={` <strong style='font-weight: 500;'>Vous traversez une période difficile ? </strong> Vous vous sentez anxieux(se), dépassé(e), fatigué(e) émotionnellement ? <br /> <br />
        La thérapie peut vous offrir  <strong style='font-weight: 500;'>un espace d’écoute, de compréhension et de renouveau. </strong><br /> <br />
        Parfois, il suffit de prendre  <strong style='font-weight: 500;'>un moment pour soi, d'exprimer ce que l'on ressent </strong> pour commencer à y voir plus clair. <br /> <br />
        L'accompagnement thérapeutique vous permet  <strong style='font-weight: 500;'>de poser des mots sur vos émotions, de comprendre ce qui vous bloque et d'avancer sereinement </strong>. <br /> <br />
        Je suis là pour vous aider à trouver   <strong style='font-weight: 500;'>des solutions adaptées à votre situation, à votre rythme</strong>.`}
        imageSrc={OfficeDecoration8}
        imageAlt="Marie Sanchez"
        titleColorVersion="dark-green"
        paddingVersion="all-padding-version"
      />

      <Services paddingVersion="padding-bottom-version" />

      <LastSectionWithCTA
        title="Prêt à commencer votre chemin vers le mieux-être ?"
        description="Prenez rendez-vous pour une première consultation et découvrez comment la thérapie peut vous aider à retrouver l'équilibre."
        imageSrc={OfficeDecoration2}
        imageAlt=""
      />
    </>
  );
}

export default Home;
