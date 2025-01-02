'use client';

// Next element
import { usePathname } from 'next/navigation';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import ExperienceBlock from '../ExperienceBlock/ExperienceBlock';
import EducationBlock from '../EducationBlock/EducationBlock';

function EducationAndExperience({ className }) {
  const router = usePathname();

  const isEducationAndExperiencePage = router === '/education-and-experience';

  return (
    <section
      className={`education-and-experience education-and-experience__not-displayed ${className}`}
    >
      {!isEducationAndExperiencePage && (
        <SectionTitle title="MON PARCOURS" className="section-title centred" />
      )}

      <div className="education-and-experience__container">
        <ExperienceBlock />
        <EducationBlock />
      </div>
    </section>
  );
}

export default EducationAndExperience;
