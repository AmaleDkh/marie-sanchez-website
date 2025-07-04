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
      {icon && <div className="approach__icon">{icon}</div>}
      <h3 className="approach__title">{title}</h3>
      <div className="approach__content">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default TherapeuticApproach;
