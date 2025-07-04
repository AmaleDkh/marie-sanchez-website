// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import TherapeuticApproach, {
  ApproachProps,
} from '../TherapeuticApproach/TherapeuticApproach';

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

function TherapeuticApproaches({ approaches }: ApproachesProps) {
  return (
    <div className="approaches-container">
      <SectionTitle
        title="Différentes approches"
        textAlignVersion="center"
        colorVersion="dark-green"
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
