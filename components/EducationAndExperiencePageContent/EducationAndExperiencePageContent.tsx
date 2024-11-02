// Components
import ImageBlock from '../ImageBlock/ImageBlock';
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';
import Button from '../Button/Button';

// Image
import Plant4 from '../../assets/images/plant4.webp';

function EducationAndExperiencePageContent() {
  return (
    <div className="education-and-experience__page-version">
      <PageIntroduction text="Les grandes lignes de mon parcours" />
      <EducationAndExperience className="education-and-experience__page-content" />
      <ImageBlock
        src={Plant4}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__smaller-version'}
      />
      <Button
        link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
        text="Prendre rendez-vous"
        className={'button button__margin'}
      />
    </div>
  );
}

export default EducationAndExperiencePageContent;
