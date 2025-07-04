'use client';

// React elements
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Component
import SectionTitle from '../SectionTitle/SectionTitle';

// Style
import './FrequentlyAskedQuestions.scss';

// Data
import FrequentlyAskedQuestionsData from '../../assets/datas/frequently-asked-questions.json';

export interface FAQItem {
  question: string;
  answer: string;
}

function FrequentlyAskedQuestions({}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <SectionTitle
        title="Questions fréquentes"
        textAlignVersion="center"
        colorVersion="dark-green"
      />

      <div className="faq">
        {FrequentlyAskedQuestionsData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <div className="faq-item__header">
              <p className="faq-item__question">{item.question}</p>
              <ChevronDown
                className={`faq-item__icon ${openIndex === index ? 'faq-item__icon--open' : ''}`}
                size={24}
              />
            </div>
            <div
              className={`faq-item__answer-wrapper ${openIndex === index ? 'faq-item__answer-wrapper--open' : ''}`}
            >
              <p className="faq-item__answer">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;

// import React from 'react';
// import SectionTitle from '../SectionTitle/SectionTitle';
// import './FrequentlyAskedQuestions.scss';

// import FrequentlyAskedQuestionsPage from '../../app/frequently-asked-questions/page';

// export interface FAQItem {
//   question: string;
//   answer: string;
// }

// interface FAQProps {
//   items: FAQItem[];
// }

// function FrequentlyAskedQuestions() {
//   return (
//     <div className="faq-container">
//       <SectionTitle
//         title="Questions fréquentes"
//         className="section-title centred"
//       />

//       <div className="faq">
//         {FrequentlyAskedQuestionsData.map((item, index) => (
//           <div key={index} className="faq-item">
//             <h3 className="faq-item__question">{item.question}</h3>
//             <p className="faq-item__answer">{item.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FrequentlyAskedQuestions;

// 'use client';

// // React element
// import { usePathname } from 'next/navigation';

// // Components
// import SectionTitle from '../SectionTitle/SectionTitle';
// import Questions from '../Questions/Questions';

// function FrequentlyAskedQuestions({ className }) {
//   const pathname = usePathname();

//   // const isFAQPage = router === '/frequently-asked-questions';
//   const isHomepage = pathname === '/';

//   return (
//     <section
//       className={
//         isHomepage
//           ? 'frequently-asked-questions'
//           : 'frequently-asked-questions--page-version'
//       }
//     >
//       {isHomepage && (
//         <SectionTitle
//           title="Questions fréquentes"
//           // className={className}
//           className="section-title centred"
//         />
//       )}

//       <div className="frequently-asked-questions__content-container">
//         <Questions />
//       </div>
//     </section>
//   );
// }

// export default FrequentlyAskedQuestions;
