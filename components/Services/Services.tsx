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
        'Un espace d’écoute pour vous aider à dépasser ce qui vous freine et retrouver équilibre au quotidien.',
      icon: <Heart size={32} />,
    },
    {
      title: 'Bilan psychologique',
      description:
        'Un temps pour faire le point sur votre situation et poser des bases claires pour la suite.',
      icon: <Scale size={32} />,
    },
    {
      title: 'Prise en charge des troubles',
      description:
        'Un temps pour faire le point sur votre situation et poser des bases claires pour la suite.',
      icon: <Stethoscope size={32} />,
    },
  ];

  return (
    <div className={`services-section services-section--${paddingVersion}`}>
      <SectionTitle
        title="Des consultations adaptées à vos besoins"
        // colorVersion="beige"
        // colorVersion="dark-green"
        // textAlignVersion="center"
      />
      <div className="services">
        {classicServices.map((service, index) => (
          <div key={index} className="service">
            <div className="service__text">
              {service.icon && (
                <div className="service__icon">{service.icon}</div>
              )}
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
            </div>

            <SecondaryButton text="Découvrir" link="/consultations" />
          </div>
        ))}
      </div>
      {/* 
      {pathname !== '/consultations/' && isButton && (
        <SecondaryButton
          link="/consultations"
          label="Découvrir toutes les consultations proposées"
          centerVersion="secondary-button--center-version"
          marginTopVersion="margin-top-version"
        />
      )} */}
    </div>
  );
}

export default Services;
