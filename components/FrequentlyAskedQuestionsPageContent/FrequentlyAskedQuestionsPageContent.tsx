// Components
import PageIntroduction from '../PageIntroduction/PageIntroduction';
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import ImageBlock from '../ImageBlock/ImageBlock';
import Button from '../Button/Button';

// Image
import Plant3 from '../../assets/images/plant3.webp';

function FrequentlyAskedQuestionsPageContent() {
  return (
    <div className="frequently-asked-questions__page-content">
      <PageIntroduction text="Des réponses à vos interrogations" />
      <FrequentlyAskedQuestions
        className={'frequently-asked-questions__page-version'}
      />
      <p className="frequently-asked-questions__page-content__paragraph">
        Pour toute autre information complémentaire, n'hésitez pas à me
        contacter.
      </p>
      <ImageBlock
        src={Plant3}
        alt="Image avec des feuilles, représentant la nature"
        className={
          'image-block-container image-block-container__smaller-version image-block-container__smaller-version__margin-top'
        }
      />
      <div className="frequently-asked-questions__page-content__button-container">
        <Button
          link="https://www.doctolib.fr/psychologue/cenon/marie-sanchez-cenon?pid=practice-624466"
          text="Prendre rendez-vous"
          className={'button button__margin'}
        />
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestionsPageContent;
