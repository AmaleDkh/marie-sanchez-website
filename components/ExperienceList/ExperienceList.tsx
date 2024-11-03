// Data
import experienceList from '../../assets/datas/experienceList.json';

function ExperienceList() {
  return (
    <div className="experience-container__list">
      {experienceList.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="experience-container__list__item"
        >
          <div className="experience-container__list__item__experience">
            <div className="experience-container__list__item__experience__name">
              {item.experience}
            </div>
            <div className="experience-container__list__item__experience__location">
              {item.location}
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default ExperienceList;
