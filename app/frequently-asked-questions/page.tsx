// Components
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Services from '../../components/Services/Services';
import LastSectionWithCTA from '../../components/LastSectionWithCTA/LastSectionWithCTA';

// Images
import Nature3 from '../../assets/images/nature3.webp';
import plant3 from '../../assets/images/plant3.webp';

function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <HeroBanner
        title="Des réponses à vos interrogations"
        imageSrc={Nature3}
      />

      <FrequentlyAskedQuestions />

      <Services paddingVersion="padding-bottom-version" />

      <LastSectionWithCTA
        title="Prêt à commencer votre chemin vers le mieux-être ?"
        description="Prenez rendez-vous pour une première consultation et découvrez comment la thérapie peut vous aider à retrouver l'équilibre."
        imageSrc={plant3}
        imageAlt=""
      />
    </>
  );
}

export default FrequentlyAskedQuestionsPage;
