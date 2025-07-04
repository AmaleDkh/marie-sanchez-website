// Components
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SessionSteps from '../../components/SessionSteps/SessionSteps';
import PricingTable from '../../components/PricingTable/PricingTable';
import PaymentTerms from '../../components/PaymentTerms/PaymentTerms';
import Services from '../../components/Services/Services';
import LastSectionWithCTA from '../../components/LastSectionWithCTA/LastSectionWithCTA';

// Images
import Nature2 from '../../assets/images/nature2.webp';
import plant2 from '../../assets/images/plant2.webp';

function PracticalInformationPage() {
  const sessions = [
    {
      title: 'Première consultation',
      duration: '45 minutes',
      paragraph: 'Discussion initiale pour expliquer et comprendre la demande.',
    },
    {
      title: 'Séance de passation des tests',
      duration: '1h à 1h30',
      paragraph: 'Réalisation des tests adaptés selon la demande.',
    },
    {
      title: 'Restitution des résultats',
      duration: '50 minutes à 1h',
      paragraph:
        "Retour des résultats avec remise d'un compte rendu écrit en mains propres.",
    },
  ];

  const pricingItems = [
    {
      title: 'Première consultation',
      description: "Premier rendez-vous d'évaluation",
      duration: '50 min',
      price: '50 €',
    },
    {
      title: 'Consultation de suivi',
      description: 'Séances suivantes',
      duration: '50 min',
      price: '60 €',
    },
    {
      title: 'Bilan psychologique',
      description: 'Évaluation complète avec compte-rendu',
      duration: 'Plusieurs séances',
      price: '200 € - 400 €',
    },
  ];

  return (
    <>
      <HeroBanner
        title="Une prise en charge adaptée à vos besoins"
        imageSrc={Nature2}
      />

      <PricingTable items={pricingItems} />

      <SessionSteps sessions={sessions} />

      <PaymentTerms />

      <Services paddingVersion="all-padding-version" />

      <LastSectionWithCTA
        title="Prêt à commencer votre chemin vers le mieux-être ?"
        description="Prenez rendez-vous pour une première consultation et découvrez comment la thérapie peut vous aider à retrouver l'équilibre."
        imageSrc={plant2}
        imageAlt=""
      />
    </>
  );
}

export default PracticalInformationPage;
