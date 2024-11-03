// Next element
import { useRouter } from 'next/router';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import ExperienceBlock from '../ExperienceBlock/ExperienceBlock';
import EducationBlock from '../EducationBlock/EducationBlock';

function EducationAndExperience({ className }) {
  const router = useRouter();

  const isEducationAndExperiencePage =
    router.pathname === '/education-and-experience';

  return (
    <section className={`education-and-experience ${className}`}>
      {!isEducationAndExperiencePage && <SectionTitle title="MON PARCOURS" />}

      <div className="education-and-experience__container">
        <ExperienceBlock />
        <EducationBlock />
      </div>
    </section>
  );
}

export default EducationAndExperience;
