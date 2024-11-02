// React and Next elements
import { useRouter } from 'next/router';
import Image from 'next/image';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Questions from '../Questions/Questions';

// Image
import officeDecoration from '../../assets/images/office-decoration3.webp';

function FrequentlyAskedQuestions({ className }) {
  const router = useRouter();

  const isFAQPage = router.pathname === '/frequently-asked-questions';

  return (
    <section className={`frequently-asked-questions ${className}`}>
      {!isFAQPage && <SectionTitle title="FOIRE AUX QUESTIONS" />}

      <div className="frequently-asked-questions__content-container">
        <div className="frequently-asked-questions__content-container__item__image-container">
          <Image
            src={officeDecoration}
            alt="Image d'un meuble avec une plante, une lampe, des livres et qu'une horloge au-dessus"
            className="frequently-asked-questions__content-container__item__image-container__image"
            width={450}
            height={550}
          />
        </div>

        <Questions />
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
