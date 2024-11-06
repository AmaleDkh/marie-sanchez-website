// React element
import { useRouter } from 'next/router';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Questions from '../Questions/Questions';
import ImageContainer from '../ImageContainer/ImageContainer';

// Image
import OfficeDecoration from '../../assets/images/office-decoration9.webp';

function FrequentlyAskedQuestions({ className }) {
  const router = useRouter();

  const isFAQPage = router.pathname === '/frequently-asked-questions';

  return (
    <section className={`frequently-asked-questions ${className}`}>
      {!isFAQPage && <SectionTitle title="FOIRE AUX QUESTIONS" />}

      <div className="frequently-asked-questions__content-container">
        <div className="frequently-asked-questions__content-container__image-wrapper">
          <ImageContainer
            src={OfficeDecoration}
            alt="Image d'un meuble avec une plante, une lampe, des livres et qu'une horloge au-dessus"
          />
        </div>

        <Questions />
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
