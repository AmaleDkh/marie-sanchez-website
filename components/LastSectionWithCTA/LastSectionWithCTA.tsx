// Next elements
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

// Style
import './LastSectionWithCTA.scss';

interface LastSectionWithCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
}

function LastSectionWithCTA({
  title,
  description,
  imageSrc,
  imageAlt,
}: LastSectionWithCTAProps) {
  return (
    <section className="cta">
      <div className="cta__media">
        <Image
          src={imageSrc}
          alt={imageAlt || ''}
          className="cta__image"
          fill
        />
        {/* <div className="cta__overlay"></div> */}
      </div>
      <div className="container">
        <div className="cta__content">
          <div className="cta__content__text">
            {/* <SectionTitle
              title={title}
              colorVersion="dark-green"
              textAlignVersion="center"
            /> */}

            <h2 className="cta__title">{title}</h2>
            {/* <p className="cta__description">{description}</p> */}
          </div>

          <PrimaryButton
            link="https://www.maiia.com/psychologue/33150-cenon/sanchez-marie"
            text="Prendre rendez-vous"
          />
        </div>
      </div>
    </section>
  );
}

export default LastSectionWithCTA;

// // Next elements
// import Image from 'next/image';
// import { StaticImageData } from 'next/image';

// // Components
// import SectionTitle from '../SectionTitle/SectionTitle';
// import PrimaryButton from '../PrimaryButton/PrimaryButton';

// // Style
// import './LastSectionWithCTA.scss';

// interface LastSectionWithCTAProps {
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   buttonLink?: string;
//   imageSrc?: string | StaticImageData;
//   imageAlt?: string;
// }

// function LastSectionWithCTA({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
// }: LastSectionWithCTAProps) {
//   return (
//     <section className="cta">
//       <div className="cta__image">
//         <Image
//           src={imageSrc}
//           alt={imageAlt || ''}
//           className="cta__background"
//           fill
//         />
//         {/* <div className="cta__overlay"></div> */}
//       </div>
//       <div className="cta-container">
//         <div className="cta__content">
//           <div className="cta__content__text">
//             <SectionTitle
//               title={title}
//               colorVersion="beige"
//               textAlignVersion="center"
//             />
//             {/* <p className="cta__description">{description}</p> */}
//           </div>

//           <PrimaryButton
//             link="https://www.maiia.com/psychologue/33150-cenon/sanchez-marie"
//             text="Prendre rendez-vous"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LastSectionWithCTA;
