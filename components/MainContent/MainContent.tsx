// React elements
import { Brain, Heart, Sparkles } from 'lucide-react';

// Components
import ConsultationInformation from '../ConsultationInformation/ConsultationInformation';
import TherapeuticApproaches from '../TherapeuticApproaches/TherapeuticApproaches';

function MainContent() {
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
    <main className="main">
      <ConsultationInformation />

      <TherapeuticApproaches approaches={therapeuticApproaches} />
    </main>
  );
}

export default MainContent;
