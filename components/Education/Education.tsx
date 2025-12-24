// Next elements
import Image, { StaticImageData } from 'next/image';

// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Style
import './Education.scss';

// Data
import educationList from '../../assets/datas/educationList.json';

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

interface EducationProps {
  items?: EducationItem[];
  title?: string;
  className?: string;
  image?: string | StaticImageData;
  imagePosition?: 'left' | 'right';
}

function Education({ image, imagePosition = 'left' }: EducationProps) {
  return (
    <div className="education-container margin-section">
      <div className="education-container__content">
     
      <div
        className={`education-wrapper ${image ? `education-wrapper--with-image education-wrapper--image-${imagePosition}` : ''}`}
      >
        {image && imagePosition === 'left' && (
          <div className="education-image">
            <Image src={image} alt="Formation" />
          </div>
        )}
        <div className="education">
          <SectionTitle
            title="Mes diplômes"
            textAlignVersion="center"
          />

          <div className="education-list">
          {educationList.map((item, index) => (
            <div key={index} className="education__item">
              {/* <div className="education__date">{item.year}</div> */}
              <div className="education__content">
                {/* <h3>{item.degree}</h3> */}
                <p className="education__degree">{item.degree}</p>
                <p className="education__institution">{item.institution}</p>
                {/* <p className="education__description">{item.description}</p> */}
              </div>
            </div>
          ))}

          </div>

          
        </div>
        {image && imagePosition === 'right' && (
          <div className="education-image">
            <Image src={image} alt="Formation" />
          </div>
        )}
      </div>
      </div>
  
    </div>
  );
}

export default Education;
