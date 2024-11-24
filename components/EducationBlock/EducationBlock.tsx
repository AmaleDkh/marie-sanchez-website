// Components
import Subtitle from '../Subtitle/Subtitle';
import EducationList from '../EducationList/EducationList';
import ImageContainer from '../ImageContainer/ImageContainer';

// Image
import OfficeDecoration8 from '../../assets/images/office-decoration8.webp';

function EducationBlock() {
  return (
    <ul className="education-container">
      <div className="education-container__content">
        <div className="experience-container__content__texts">
          <Subtitle text="Diplômes" />
          <EducationList />
        </div>

        <ImageContainer
          src={OfficeDecoration8}
          alt="Image d'une chaise et de décoration"
        />
      </div>
    </ul>
  );
}

export default EducationBlock;
