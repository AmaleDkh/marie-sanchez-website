// Components
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import FrequentlyAskedQuestionsPageContent from '../../components/FrequentlyAskedQuestionsPageContent/FrequentlyAskedQuestionsPageContent';

// Image
import Nature3 from '../../assets/images/nature3.webp';

// Style
import '../../assets/styles/Global.scss';
import '../../assets/styles/Fonts.scss';

function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <ImageBlock
        src={Nature3}
        alt="Image avec des feuilles, représentant la nature"
        className={'image-block-container__higher-version'}
      />
      <FrequentlyAskedQuestionsPageContent />
    </>
  );
}

export default FrequentlyAskedQuestionsPage;