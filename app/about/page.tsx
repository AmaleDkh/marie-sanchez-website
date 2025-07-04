// Components
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';
import Services from '../../components/Services/Services';
import LastSectionWithCTA from '../../components/LastSectionWithCTA/LastSectionWithCTA';

// Images
import Nature4 from '../../assets/images/nature4.webp';
import plant4 from '../../assets/images/plant4.webp';
import OfficeDecoration8 from '../../assets/images/office-decoration8.webp';
import OfficeDecoration3 from '../../assets/images/office-decoration3.webp';

function AboutPage() {
  return (
    <>
      <HeroBanner
        title="Les grandes lignes de mon parcours"
        imageSrc={Nature4}
      />

      <Education image={OfficeDecoration8} />

      <Experience image={OfficeDecoration3} />

      <Services paddingVersion="padding-bottom-version" />

      <LastSectionWithCTA
        title="Prêt à commencer votre chemin vers le mieux-être ?"
        description="Prenez rendez-vous pour une première consultation et découvrez comment la thérapie peut vous aider à retrouver l'équilibre."
        imageSrc={plant4}
        imageAlt=""
      />
    </>
  );
}

export default AboutPage;
