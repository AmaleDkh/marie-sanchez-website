// React element
import { useState } from 'react';

// Next element
import Image from 'next/image';

// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Data
import frequentlyAskedQuestions from '../../assets/datas/frequently-asked-questions.json';

// Image
import officeDecoration from '../../assets/images/office-decoration3.webp';

// Font Awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function FrequentlyAskedQuestions({ className }) {
  const [isAnswerIndexVisible, setIsAnswerIndexVisible] = useState(null);

  const toggleAnswerIndex = (index) => {
    if (isAnswerIndexVisible === index) {
      setIsAnswerIndexVisible(null);
    } else {
      setIsAnswerIndexVisible(index);
    }
  };

  return (
    <section className={`frequently-asked-questions ${className}`}>
      <SectionTitle title="FOIRE AUX QUESTIONS" />
      <div className="frequently-asked-questions__content-container">
        <div className="frequently-asked-questions__content-container__item__image-container">
          <Image
            src={officeDecoration}
            alt="Photo d'une commode avec une lampe et des livres ainsi qu'une horloge au-dessus"
            className="frequently-asked-questions__content-container__item__image-container__image"
            width={450}
            height={550}
          />
        </div>

        <div className="frequently-asked-questions__content-container__item">
          {frequentlyAskedQuestions.map((item, index) => (
            <div
              key={index}
              className="frequently-asked-questions__content-container__item__elements-block"
            >
              <div className="frequently-asked-questions__content-container__item__elements-block__icon-question">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="frequently-asked-questions__content-container__item__elements-block__icon-question__icon"
                  size="2x"
                  onClick={() => toggleAnswerIndex(index)}
                />
                <div>{item.question}</div>
              </div>
              {isAnswerIndexVisible === index && (
                <div
                  className={`frequently-asked-questions__content-container__item__elements-block__answer ${isAnswerIndexVisible === index ? 'frequently-asked-questions__item__elements-block__answer--visible' : ''}`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
