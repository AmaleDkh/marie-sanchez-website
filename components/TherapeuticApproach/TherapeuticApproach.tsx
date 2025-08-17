// React element
import { ReactNode } from 'react';

// Style
import './TherapeuticApproach.scss';

export interface ApproachProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  className?: string;
}

function TherapeuticApproach({
  title,
  description,
  icon,
  className = '',
}: ApproachProps) {
  return (
    <div className={`approach ${className}`}>
      <div className="approach__title-block">
        <h3 className="approach__title">{title}</h3>
      </div>

      {/* <div className="approach__main-content">
        {icon && <div className="approach__icon">{icon}</div>}
        <h3 className="approach__title">{title}</h3>
        <div className="approach__content">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div> */}

      {
        <div className="approach__content">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      }

      {/* <div>test</div> */}
    </div>
  );
}

export default TherapeuticApproach;

// function TherapeuticApproach({
//   title,
//   description,
//   icon,
//   className = '',
// }: ApproachProps) {
//   return (
//     <div className={`approach ${className}`}>
//       <div className="approach__main-content">
//         {icon && <div className="approach__icon">{icon}</div>}
//         <h3 className="approach__title">{title}</h3>
//         {/* <div className="approach__content">
//           {description.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div> */}
//       </div>

//       <div className="approach__content">
//         {description.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>

//       {/* <div>test</div> */}
//     </div>
//   );
// }

// export default TherapeuticApproach;
