// Component
import Subtitle from '../Subtitle/Subtitle';

// Data
import educationList from '../../assets/datas/educationList.json';

function EducationList() {
  return (
    <ul className="education-container">
      <Subtitle text="Diplômes" />
      <div className="education-container__list">
        {educationList.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="education-container__list__item"
          >
            <div className="education-container__list__item__degree">
              <div className="education-container__list__item__degree__name">
                {item.degree}
              </div>
              <div className="education-container__list__item__degree__location">
                {item.location}
              </div>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
}

export default EducationList;
