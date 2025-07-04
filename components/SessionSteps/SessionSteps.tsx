// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Session, { SessionProps } from '../Session/Session';

// Style
import './SessionSteps.scss';

interface SessionStepsProps {
  sessions: SessionProps[];
}

function SessionSteps({ sessions }: SessionStepsProps) {
  return (
    <section className="session-steps">
      <SectionTitle
        title="Déroulé d'une consultation"
        textAlignVersion="center"
        colorVersion="dark-green"
      />

      {sessions.map((session, index) => (
        <Session
          key={index}
          title={session.title}
          duration={session.duration}
          paragraph={session.paragraph}
          number={index + 1}
        />
      ))}
    </section>
  );
}

export default SessionSteps;
