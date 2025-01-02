'use client';

// React element
import { usePathname } from 'next/navigation';

// Components
import SectionTitle from '../SectionTitle/SectionTitle';
import Questions from '../Questions/Questions';

function FrequentlyAskedQuestions({ className }) {
  const router = usePathname();

  const isFAQPage = router === '/frequently-asked-questions';

  return (
    <section
      className={
        router === '/'
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
