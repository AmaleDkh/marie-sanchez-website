// Components
import Subtitle from '../Subtitle/Subtitle';
import ExperienceList from '../ExperienceList/ExperienceList';
import ImageContainer from '../ImageContainer/ImageContainer';

// Image
import OfficeDecoration3 from '../../assets/images/office-decoration3.webp';

function ExperienceBlock() {
  return (
    <ul className="experience-container">
      <div className="experience-container__content">
        <ImageContainer
          src={OfficeDecoration3}
          alt="Image d'une chaise et de décoration"
        />

        <div className="experience-container__content__texts">
          <Subtitle text="Expériences professionnelles" />
          <ExperienceList />
        </div>
      </div>
    </ul>
  );
}

export default ExperienceBlock;
