// React element
import { useRouter } from 'next/router';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Questions from '../Questions/Questions';

function FrequentlyAskedQuestions({ className }) {
  const router = useRouter();

  const isFAQPage = router.pathname === '/frequently-asked-questions';

  return (
    <section
      className={
        router.pathname === '/'
          ? 'frequently-asked-questions'
          : 'frequently-asked-questions--page-version'
      }
    >
      {!isFAQPage && (
        <SectionTitle
          title="QUESTIONS FRÉQUENTES"
          className="section-title centred"
        />
      )}

      <div className="frequently-asked-questions__content-container">
        <Questions />
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
