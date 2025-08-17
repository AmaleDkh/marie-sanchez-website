// Next elements
import Image, { StaticImageData } from 'next/image';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

// Style
import './ImageAndTextSection.scss';

interface ImageAndTextSectionProps {
  sectionTitle: string;
  titleColorVersion?: 'beige' | 'dark-green ' | 'white';
  textColorVersion?: 'white';
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imageOnLeft?: boolean;
  backgroundColor?:
    | 'beige'
    | 'light-brown'
    | 'dark-green'
    | 'green'
    | 'medium-green';

  button?: boolean;
  buttonLink?: string;
  buttonLabel?: string;
  paddingVersion?:
    | 'all-padding-version'
    | 'padding-top-version'
    | 'padding-bottom-version';
}

function ImageAndTextSection({
  sectionTitle,
  titleColorVersion,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  backgroundColor,
  button,
  buttonLink,
  buttonLabel = 'En savoir plus sur moi',
  paddingVersion,
  textColorVersion,
}: ImageAndTextSectionProps) {
  return (
    <section
      className={`image-and-text-section image-and-text-section--${backgroundColor} image-and-text-section--${paddingVersion}  ${imageOnLeft ? 'image-and-text-section--image-left' : ''} image-and-text-section--${paddingVersion}`}
    >
      {/* <div className="image-and-text-section__inner"> */}
      {/* <div
        className={`image-and-text-section__grid ${
          imageOnLeft ? 'image-and-text-section__grid--image-left' : ''
        }`}
      > */}
      <div className="image-and-text-section__content">
        <SectionTitle title={sectionTitle} colorVersion={titleColorVersion} />
        <p
          className={` image-and-text-section__description image-and-text-section__description--${textColorVersion}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {/* {button && (
              <div className="image-and-text-section__cta">
                <SecondaryButton
                  link={buttonLink || ''}
                  label={buttonLabel}
                  centerVersion=""
                />
              </div>
            )} */}
      </div>

      <div className="image-and-text-section__image-container">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="image-and-text-section__image"
        />
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}

export default ImageAndTextSection;
