// React element
import { useState } from 'react';

// Data
import frequentlyAskedQuestions from '../../assets/datas/frequently-asked-questions.json';

// Font Awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Questions() {
  const [isAnswerIndexVisible, setIsAnswerIndexVisible] = useState(null);

  const toggleAnswerIndex = (index) => {
    if (isAnswerIndexVisible === index) {
      setIsAnswerIndexVisible(null);
    } else {
      setIsAnswerIndexVisible(index);
    }
  };

  return (
    <div>
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
  );
}

export default Questions;
