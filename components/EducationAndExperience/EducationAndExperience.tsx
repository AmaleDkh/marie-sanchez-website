// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Datas
import educationList from '../../assets/datas/educationList.json';
import experienceList from '../../assets/datas/experienceList.json';

// Font Awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';

function EducationAndExperience() {
  return (
    <section className="education-and-experience">
      <SectionTitle title="MON PARCOURS" />

      <div className="education-and-experience__container">
        <ul className="education-and-experience__container__experience-list">
          <h3 className="education-and-experience__title">
            Expériences professionnelles
          </h3>
          <div className="education-and-experience__container__experience-list__list">
            {experienceList.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="education-and-experience__container__experience-list__item"
              >
                {/* <FontAwesomeIcon
                icon={faCircle}
                className="education-and-experience__container__experience-list__item__icon"
              />
              <div className="education-and-experience__container__experience-list__item__line"></div> */}

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

        <ul className="education-and-experience__container__education-list">
          <h3 className="education-and-experience__title">Diplômes</h3>
          <div className="education-and-experience__container__education-list__list">
            {educationList.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="education-and-experience__container__education-list__item"
              >
                {/* <FontAwesomeIcon
                icon={faCircle}
                className="education-and-experience__container__experience-list__item__icon"
              /> */}
                {/* <div className="education-and-experience__container__experience-list__item__line"></div> */}

                <div className="education-and-experience__container__education-list__item__degree">
                  <div className="education-and-experience__container__education-list__item__degree__name">
                    {item.degree}
                  </div>
                  <div className="education-and-experience__container__education-list__item__degree__location">
                    {item.location}
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}

export default EducationAndExperience;
