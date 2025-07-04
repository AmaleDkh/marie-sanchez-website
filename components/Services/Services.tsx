'use client';

// React & Next elements
import { Heart, Scale, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

// Style
import './Services.scss';

interface ServicesnProps {
  paddingVersion?:
    | 'all-padding-version'
    | 'padding-top-version'
    | 'padding-bottom-version';
}

function Services({ paddingVersion }: ServicesnProps) {
  const [isButton, setIsButton] = useState(true);
  const pathname = usePathname();

  const classicServices = [
    {
      title: 'Thérapie individuelle',
      description:
        'Accompagnement personnalisé basé sur des approches thérapeutiques validées scientifiquement (TCC, psychodynamique, systémique) pour vous aider à surmonter vos difficultés.',
      icon: <Heart size={32} />,
    },
    {
      title: 'Bilan psychologique',
      description:
        'Évaluation complète incluant tests cognitifs, de personnalité et neuropsychologiques pour mieux comprendre votre fonctionnement et vos besoins.',
      icon: <Scale size={32} />,
    },
    {
      title: 'Prise en charge des troubles',
      description:
        'Traitement spécialisé des troubles anxieux, dépressifs, du stress post-traumatique (PTSD), et des addictions.',
      icon: <Stethoscope size={32} />,
    },
  ];

  return (
    <div className={`services-section services-section--${paddingVersion}`}>
      <SectionTitle
        title="Des consultations adaptées à vos besoins"
        // colorVersion="beige"
        colorVersion="dark-green"
        textAlignVersion="center"
      />
      <div className="services">
        {classicServices.map((service, index) => (
          <div key={index} className="service">
            {service.icon && (
              <div className="service__icon">{service.icon}</div>
            )}
            <h3 className="service__title">{service.title}</h3>
            <p className="service__description">{service.description}</p>
          </div>
        ))}
      </div>

      {pathname !== '/consultations/' && isButton && (
        <SecondaryButton
          link="/consultations"
          label="Découvrir toutes les consultations proposées"
          centerVersion="secondary-button--center-version"
          marginTopVersion="margin-top-version"
        />
      )}
    </div>
  );
}

export default Services;
