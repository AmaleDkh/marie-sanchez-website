// Components
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import ExperienceBlock from '../ExperienceBlock/ExperienceBlock';
import EducationBlock from '../EducationBlock/EducationBlock';
import ImageBlock from '../ImageBlock/ImageBlock';
import Button from '../Button/Button';

// Image
import Plant4 from '../../assets/images/plant4.webp';

function EducationAndExperiencePageContent() {
  return (
    <div className="education-and-experience__page-version">
      <PageIntroduction text="Les grandes lignes de mon parcours" />
      <ExperienceBlock />
      <EducationBlock />
      <ImageBlock
        src={Plant4}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__smaller-version'}
      />
      <div className="education-and-experience__page-version__button-container">
        <Button
          link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
          text="Prendre rendez-vous"
          className={'button button__margin'}
        />
      </div>
    </div>
  );
}

export default EducationAndExperiencePageContent;
