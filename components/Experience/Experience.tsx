// Next elements
import Image, { StaticImageData } from 'next/image';

// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Style
import './Experience.scss';

// Data
import experienceList from '../../assets/datas/experienceList.json';

interface ExperienceItem {
  period: string;
  title: string;
  location: string;
  description: string;
}

interface ExperienceProps {
  items?: ExperienceItem[];
  title?: string;
  className?: string;
  image?: string | StaticImageData;
  imagePosition?: 'left' | 'right';
}

function Experience({
  items,
  className = 'text-center',
  image,
  imagePosition = 'right',
}: ExperienceProps) {
  return (
    <div className="experience-container">
      <SectionTitle
        title="Mon expérience"
        colorVersion="dark-green"
        textAlignVersion="center"
      />
      <div
        className={`experience-wrapper ${image ? `experience-wrapper--with-image experience-wrapper--image-${imagePosition}` : ''}`}
      >
        {image && imagePosition === 'left' && (
          <div className="experience-image">
            <Image src={image} alt="Expérience professionnelle" />
          </div>
        )}
        <div className="experience">
          {experienceList.map((item, index) => (
            <div key={index} className="experience__item">
              {/* <div className="experience__period">{item.year}</div> */}
              <div className="experience__content">
                <h3>{item.title}</h3>
                <p className="experience__location">{item.location}</p>
                {/* <p className="experience__description">{item.description}</p> */}
              </div>
            </div>
          ))}
        </div>
        {image && imagePosition === 'right' && (
          <div className="experience-image">
            <Image src={image} alt="Expérience professionnelle" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
