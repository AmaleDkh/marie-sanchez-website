// Component
import Subtitle from '../Subtitle/Subtitle';

// Data
import experienceList from '../../assets/datas/experienceList.json';

function ExperienceList() {
  return (
    <ul className="education-and-experience__container__experience-list">
      <Subtitle text="Expériences professionnelles" />
      <div className="education-and-experience__container__experience-list__list">
        {experienceList.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="education-and-experience__container__experience-list__item"
          >
            <div className="education-and-experience__container__experience-list__item__experience">
              <div className="education-and-experience__container__experience-list__item__experience__name">
                {item.experience}
              </div>
              <div className="education-and-experience__container__experience-list__item__experience__location">
                {item.location}
              </div>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
}

export default ExperienceList;
