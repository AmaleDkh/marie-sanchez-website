// Style
import './Session.scss';

export interface SessionProps {
  title: string;
  duration?: string;
  paragraph: string;
  number?: number;
}

function Session({ title, duration, paragraph, number }: SessionProps) {
  return (
    <div className="session">
      {number && <div className="session__number">{number}</div>}
      <div className="session__content">
        <div className="session__header">
          <h3 className="session__title">{title}</h3>
          <span className="session__duration">{duration}</span>
        </div>
        <p className="session__description">{paragraph}</p>
      </div>
    </div>
  );
}

export default Session;
