// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import TherapeuticApproach, {
  ApproachProps,
} from '../TherapeuticApproach/TherapeuticApproach';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

// Style
import './TherapeuticApproaches.scss';

// interface TherapeuticApproachesProps {
//   approaches: ApproachProps[];
// }

interface ApproachesProps {
  approaches: ApproachProps[];
  title?: string;
  className?: string;
}

// function TherapeuticApproaches({ approaches }: ApproachesProps) {
//   return (
//     <div className="approaches-container padding-section">
//       <div className="approaches-container__text">
//         <SectionTitle
//           title="Différentes approches"
//           // textAlignVersion="center"
//         />

//         <div className="approach__title">
//           {approaches.map((approach, index) => (
//             // <TherapeuticApproach
//             //   key={index}
//             //   title={approach.title}
//             //   description={approach.description}
//             //   icon={approach.icon}
//             //   className="approaches__item"
//             // />
//             <h3>{approach.title}</h3>
//           ))}
//         </div>

//         <div className="approaches">
//           {approaches.map((approach, index) => (
//             // <TherapeuticApproach
//             //   key={index}
//             //   title={approach.title}
//             //   description={approach.description}
//             //   icon={approach.icon}
//             //   className="approaches__item"
//             // />
//             <p>{approach.description}</p>
//           ))}
//         </div>
//       </div>

//       <SecondaryButton text="Découvrir les approches" link="/consultations" />
//     </div>
//   );
// }

function TherapeuticApproaches({ approaches }: ApproachesProps) {
  return (
    <div className="approaches-container padding-section">
      <div className="approaches-container__text">
        <SectionTitle
          title="Différentes approches"
          // textAlignVersion="center"
        />
        <div className="approaches">
          {approaches.map((approach, index) => (
            <TherapeuticApproach
              key={index}
              title={approach.title}
              description={approach.description}
              icon={approach.icon}
              className="approaches__item"
            />
          ))}
        </div>
      </div>

      <SecondaryButton text="Découvrir les approches" link="/consultations" />
    </div>
  );
}

// function TherapeuticApproaches({ approaches }: TherapeuticApproachesProps) {
//   return (
//     <div className="approaches">
//       <SectionTitle
//         title="Déroulé d'une consultation"
//         className="section-title centred"
//       />

//       {approaches.map((approach, index) => (
//         <TherapeuticApproach
//           key={index}
//           title={approach.title}
//           description={approach.description}
//           icon={approach.icon}
//           className="approaches__item"
//         />
//       ))}
//     </div>
//   );
// }

export default TherapeuticApproaches;
