'use client';

// React and Next elements
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// Font Awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Data
import frequentlyAskedQuestions from '../../assets/datas/frequently-asked-questions.json';

function Questions() {
  const [isAnswerIndexVisible, setIsAnswerIndexVisible] = useState(null);

  const router = usePathname();

  const toggleAnswerIndex = (index) => {
    if (isAnswerIndexVisible === index) {
      setIsAnswerIndexVisible(null);
    } else {
      setIsAnswerIndexVisible(index);
    }
  };

  return (
    <>
      {router === '/' ? (
        <div className="collapse-container">
          <div className="collapse-container__cards">
            {frequentlyAskedQuestions.map((item, index) => (
              <div key={index} className="collapse-container__cards__card">
                <div
                  className="collapse-container__cards__card__question"
                  onClick={() => toggleAnswerIndex(index)}
                >
                  <p className="collapse-container__cards__card__question__name">
                    {item.question}
                  </p>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className={`collapse-container__cards__icon ${isAnswerIndexVisible === index ? 'angle-down' : ''}`}
                  />
                </div>

                <div
                  className={`collapse-container__content ${isAnswerIndexVisible === index ? 'expanded' : 'closed'}`}
                >
                  {isAnswerIndexVisible === index && (
                    <div className="frequently-asked-questions__content-container__item__elements-block__answer">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="collapse-container__page-version">
          <div className="collapse-container__page-version__cards">
            {frequentlyAskedQuestions.map((item, index) => (
              <div
                key={index}
                className="collapse-container__page-version__cards__card"
              >
                <div
                  className="collapse-container__page-version__cards__card__question"
                  onClick={() => toggleAnswerIndex(index)}
                >
                  <p className="collapse-container__page-version__cards__card__question__name">
                    {item.question}
                  </p>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className={`collapse-container__page-version__cards__card__question__icon ${isAnswerIndexVisible === index ? 'angle-down' : ''}`}
                  />
                </div>

                <div
                  className={`collapse-container__page-version__content ${isAnswerIndexVisible === index ? 'expanded' : 'closed'}`}
                >
                  {isAnswerIndexVisible === index && (
                    <div className="frequently-asked-questions__content-container__item__elements-block__answer--page-version">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Questions;
