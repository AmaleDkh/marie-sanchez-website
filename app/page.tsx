// React elements
import { Brain, Heart, Sparkles } from 'lucide-react';

// Components
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ImageAndTextSection from '../components/ImageAndTextSection/ImageAndTextSection';
import Services from '../components/Services/Services';
// import TherapeuticApproaches from '../components/TherapeuticApproaches/TherapeuticApproaches';
import ApproachesSection from '../components/ApproachesSection/ApproachesSection';
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
  const therapeuticApproaches = [
    {
      title: 'Thérapies cognitivo-comportementales (TCC)',
      description: [
        'Les TCC sont une approche structurée visant à identifier et à modifier les pensées et comportements négatifs.',
      ],
      icon: <Brain size={36} />,
    },
    {
      title: "Thérapie par l'acceptation et l'engagement (ACT)",
      description: [
        "L'ACT encourage la pleine conscience et l'acceptation des émotions difficiles, plutôt que leur évitement.",
      ],
      icon: <Heart size={36} />,
    },
    {
      title: 'Thérapie des schémas',
      description: [
        "La thérapie des schémas explore les schémas de pensée inconscients développés depuis l'enfance, qui influencent vos comportements actuels.",
      ],
      icon: <Sparkles size={36} />,
    },
  ];

  // const therapeuticApproaches = [
  //   {
  //     title: 'Thérapies cognitivo-comportementales (TCC)',
  //     description: [
  //       'Les TCC sont une approche structurée visant à identifier et à modifier les pensées et comportements négatifs.',
  //       'Cette méthode vous aide à mieux comprendre le lien entre vos pensées, émotions et actions, afin de développer des stratégies pour les transformer et améliorer votre bien-être au quotidien.',
  //     ],
  //     icon: <Brain size={36} />,
  //   },
  //   {
  //     title: "Thérapie par l'acceptation et l'engagement (ACT)",
  //     description: [
  //       "L'ACT encourage la pleine conscience et l'acceptation des émotions difficiles, plutôt que leur évitement.",
  //       'Elle vous aide à vous concentrer sur ce qui compte vraiment pour vous, tout en vous engageant dans des actions qui alignent vos valeurs personnelles et vos objectifs de vie.',
  //     ],
  //     icon: <Heart size={36} />,
  //   },
  //   {
  //     title: 'Thérapie des schémas',
  //     description: [
  //       "La thérapie des schémas explore les schémas de pensée inconscients développés depuis l'enfance, qui influencent vos comportements actuels.",
  //       "L'objectif est de remettre en question ces schémas, souvent dysfonctionnels, afin de favoriser des changements durables et un mieux-être émotionnel.",
  //     ],
  //     icon: <Sparkles size={36} />,
  //   },
  // ];

  return (
    <>
      <HeroBanner
        title="Un espace pour souffler et vous retrouver."
        subtitle="Je vous accompagne pour comprendre ce que vous traversez, à votre rythme, dans un espace sûr et bienveillant."
        imageSrc={OfficeDecoration4}
        hasButton={true}
        buttonText="Découvrir les consultations"
      />

      <ImageAndTextSection
        sectionTitle="Vous n’avez pas à tout porter seul(e)"
        description={`  
          <span class="bold-word">Quand les émotions deviennent lourdes à porter </span>, vous méritez un espace sûr pour en parler.
          <br></br>
          <span class="bold-word">Il est parfois difficile de trouver les mots justes. </span>
          <br>
          Ensemble, nous clarifions ce que vous vivez pour retrouver sérénité et confiance.
          <br></br>
          <span class="bold-word">Certaines étapes de vie peuvent donner l’impression d’être dans une impasse. </span>
          <br>
          Un regard extérieur peut vous aider à ouvrir de nouvelles perspectives et à avancer.
`}
        imageSrc={OfficeDecoration8}
        imageAlt="Marie Sanchez"
        paddingVersion="all-padding-version"
      />

      {/* <ImageAndTextSection
        sectionTitle="Vous n’avez pas à tout porter seul(e)"
        description={`  <span class="bold-word">Vous traversez une période difficile ? </span> Vous vous sentez anxieux(se), dépassé(e), fatigué(e) émotionnellement ? <br /> <br />
        La thérapie peut vous offrir   <span class="bold-word">un espace d’écoute, de compréhension et de renouveau. </span><br /> <br />
        Parfois, il suffit de prendre  <span class="bold-word">un moment pour soi, d'exprimer ce que l'on ressent </span> pour commencer à y voir plus clair. <br /> <br />
        L'accompagnement thérapeutique vous permet   <span class="bold-word">de poser des mots sur vos émotions, de comprendre ce qui vous bloque et d'avancer sereinement </span>. <br /> <br />
        Je suis là pour vous aider à trouver    <span class="bold-word">des solutions adaptées à votre situation, à votre rythme</span>.`}
        imageSrc={OfficeDecoration8}
        imageAlt="Marie Sanchez"
        paddingVersion="all-padding-version"
      /> */}

      <Services paddingVersion="padding-bottom-version" />

      <ImageAndTextSection
        sectionTitle="Un accompagnement sur mesure"
        description={`En tant que Psychologue-Clinicienne et Neuropsychologue, je vous accompagne avec <span class="bold-word">une approche bienveillante et entièrement adaptée à vos besoins</span>.
        <br></br>
        <span class="bold-word">Nous prenons le temps</span> d’explorer vos émotions et pensées, pour identifier ce qui vous freine et <span class="bold-word">ce qui peut vous aider à avancer</span>.
        <br></br>
        Mon objectif est de <span class="bold-word">vous aider à mieux comprendre votre fonctionnement, surmonter vos difficultés et améliorer votre qualité de vie</span>.`}
        imageSrc={Photo}
        imageAlt="Marie Sanchez"
        imageOnLeft={true}
        backgroundColor="dark-green"
        titleColorVersion="white"
        textColorVersion="white"
        paddingVersion="all-padding-version"
      />

      {/* 
      <ImageAndTextSection
        sectionTitle="Un accompagnement sur mesure"
        description={`En tant que  <span class="bold-word">Psychologue-Clinicienne et Neuropsychologue</span>, j'accompagne chaque personne avec  <span class="bold-word">une approche bienveillante et sur mesure, adaptée à vos besoins uniques</span>. <br /> <br />
        Nous  <span class="bold-word">explorons ensemble vos émotions et pensées </span> grâce à des méthodes comme : <br /> <br />
        • Les Thérapies Cognitivo-Comportementales (TCC) <br />
        • La thérapie par l’acceptation et l’engagement (ACT) <br />
        • La thérapie des schémas <br /> <br />
        <span class="bold-word">Mon objectif </span> est de vous offrir  <span class="bold-word">des solutions personnalisées </span> pour retrouver en vous les ressources nécessaires à une meilleure compréhension de vous-même et une amélioration de votre qualité de vie, afin de retrouver bien-être et équilibre.`}
        imageSrc={Photo}
        imageAlt="Marie Sanchez"
        imageOnLeft={true}
        backgroundColor="dark-green"
        titleColorVersion="white"
        textColorVersion="white"
        paddingVersion="all-padding-version"
      /> */}

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

      <ApproachesSection />

      <LastSectionWithCTA
        title="Prêt(e) à prendre soin de vous et à avancer vers plus de sérénité ?"
        description="Prenez rendez-vous pour une première consultation et découvrez comment la thérapie peut vous aider à retrouver l'équilibre."
        imageSrc={OfficeDecoration2}
        imageAlt=""
      />

      {/* <LastSectionWithCTA
        title="Prêt à commencer votre chemin vers le mieux-être ?"
        description="Prenez rendez-vous pour une première consultation et découvrez comment la thérapie peut vous aider à retrouver l'équilibre."
        imageSrc={OfficeDecoration2}
        imageAlt=""
      /> */}

      {/* <TherapeuticApproaches approaches={therapeuticApproaches} /> */}
    </>
  );
}

export default Home;
