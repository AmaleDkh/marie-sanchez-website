// Data
import educationList from '../../assets/datas/educationList.json';

function EducationList() {
  return (
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
  );
}

export default EducationList;
