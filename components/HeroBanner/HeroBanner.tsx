// React & Next elements
import Image, { StaticImageData } from 'next/image';

// Components
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

// Style
import './HeroBanner.scss';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string | StaticImageData;
  hasButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

function HeroBanner({
  title,
  subtitle,
  imageSrc,
  hasButton = false,
  buttonText = 'En savoir plus',
  buttonLink = '/consultations',
}: HeroBannerProps) {
  return (
    <section className="hero-banner">
      <div className="hero-banner__media">
        <Image
          src={imageSrc}
          alt=""
          className="hero-banner__image"
          width={100}
          height={100}
        />
        {/* <div className="hero-banner__overlay"></div> */}
      </div>
      <div className="container">
        <div className="hero-banner__content">
          <div className="hero-banner__content__first-information">
            <h1 className="hero-banner__title">{title}</h1>
            {subtitle && <p className="hero-banner__subtitle">{subtitle}</p>}
          </div>

          {hasButton && (
            <div className="hero-banner__buttons">
              <PrimaryButton
                link="https://www.maiia.com/psychologue/33150-cenon/sanchez-marie"
                text="Prendre rendez-vous"
              />

              {/* <SecondaryButton
                link="/consultations"
                label="Découvrir les consultations"
              /> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
