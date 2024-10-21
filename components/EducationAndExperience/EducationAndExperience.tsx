// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Datas
import educationList from '../../assets/datas/educationList.json';
import experienceList from '../../assets/datas/experienceList.json';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function EducationAndExperience() {
  return (
    <section className="education-and-experience">
      <SectionTitle title="FORMATIONS & EXPÉRIENCES" />

      <div className="education-and-experience__container">
        <ul className="education-and-experienc__containere__education-list">
          {educationList.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="education-and-experience__container__education-list__item"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="education-and-experience__container__experience-list__item__icon"
              />
              <div className="education-and-experience__container__experience-list__item__line"></div>
              <div>{item.degree}</div>
            </li>
          ))}
        </ul>

        <ul className="education-and-experience__container__experience-list">
          {experienceList.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="education-and-experience__container__experience-list__item"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="education-and-experience__container__experience-list__item__icon"
              />
              <div className="education-and-experience__container__experience-list__item__line"></div>
              <div>{item.experience}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default EducationAndExperience;
