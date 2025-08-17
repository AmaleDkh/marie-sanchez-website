// React elements
import { Brain, Heart, Sparkles } from 'lucide-react';

// Components
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Services from '../../components/Services/Services';
import TherapeuticApproaches from '../../components/TherapeuticApproaches/TherapeuticApproaches';
import ConsultationsOnPage from '../../components/ConsultationsOnPage/ConsultationsOnPage';
import ApproachesSection from '../../components/ApproachesSection/ApproachesSection';
import Steps from '../../components/Steps/Steps';
import SessionSteps from '../../components/SessionSteps/SessionSteps';
import DurationAndPrices from '../../components/DurationAndPrices/DurationAndPrices';
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

import LastSectionWithCTA from '../../components/LastSectionWithCTA/LastSectionWithCTA';

// Images
import nature from '../../assets/images/nature.jpg';
import Plant from '../../assets/images/plant.jpg';

function ConsultationsPage() {
  const sessions = [
    {
      title: 'Première séance',
      paragraph:
        "La première séance est dédiée à l'écoute attentive de vos besoins. C'est l'occasion pour vous de partager vos attentes et ce qui vous a amené à consulter.",
    },
    {
      title: 'Écoute et objectifs',
      paragraph:
        "Nous discutons de votre situation et définissons ensemble les objectifs de votre suivi, qu'il s'agisse d'émotions, de comportements ou d'améliorer votre qualité de vie.",
    },
    {
      title: 'Modalités du suivi',
      paragraph:
        'Nous convenons des modalités pratiques : fréquence des séances et durée estimée de la thérapie, pour un accompagnement adapté à votre rythme.',
    },
  ];

  const therapeuticApproaches = [
    {
      title: 'Thérapies cognitivo-comportementales (TCC)',
      description: [
        'Les TCC sont une approche structurée visant à identifier et à modifier les pensées et comportements négatifs.',
        'Cette méthode vous aide à mieux comprendre le lien entre vos pensées, émotions et actions, afin de développer des stratégies pour les transformer et améliorer votre bien-être au quotidien.',
      ],
      icon: <Brain size={36} />,
    },
    {
      title: "Thérapie par l'acceptation et l'engagement (ACT)",
      description: [
        "L'ACT encourage la pleine conscience et l'acceptation des émotions difficiles, plutôt que leur évitement.",
        'Elle vous aide à vous concentrer sur ce qui compte vraiment pour vous, tout en vous engageant dans des actions qui alignent vos valeurs personnelles et vos objectifs de vie.',
      ],
      icon: <Heart size={36} />,
    },
    {
      title: 'Thérapie des schémas',
      description: [
        "La thérapie des schémas explore les schémas de pensée inconscients développés depuis l'enfance, qui influencent vos comportements actuels.",
        "L'objectif est de remettre en question ces schémas, souvent dysfonctionnels, afin de favoriser des changements durables et un mieux-être émotionnel.",
      ],
      icon: <Sparkles size={36} />,
    },
  ];

  return (
    <>
      <HeroBanner
        title="Bienvenue dans un espace d'écoute et de soutien"
        imageSrc={nature}
      />

      <ConsultationsOnPage />

      <ApproachesSection />

      {/* <Steps /> */}

      {/* <DurationAndPrices /> */}

      {/* <FrequentlyAskedQuestions /> */}

      {/* <Services paddingVersion="all-padding-version" /> */}

      {/* <TherapeuticApproaches approaches={therapeuticApproaches} /> */}

      {/* <SessionSteps sessions={sessions} /> */}

      <LastSectionWithCTA
        title="Quel que soit le trouble que vous rencontrez, vous n’êtes pas seul."
        description="Ensemble, nous trouverons des solutions adaptées pour vous
          accompagner. Nous construirons un suivi personnalisé pour vous aider à
          mieux comprendre et surmonter ces difficultés."
        imageSrc={Plant}
        imageAlt=""
      />
    </>
  );
}

export default ConsultationsPage;
