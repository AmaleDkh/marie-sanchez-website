import React from 'react';
import './ApproachesSection.scss';

function ApproachesSection() {
  const approaches = [
    {
      title: 'Thérapie cognitivo-comportementales (TCC)',
      description:
        'Pour identifier et transformer les pensées et comportements qui vous limitent au quotidien.',
      variant: 'default',
    },
    {
      title: "Thérapie par l'acceptation et l'engagement (ACT)",
      description:
        'Pour accueillir vos émotions difficiles et vivre pleinement, plutôt que de les éviter.',
      variant: 'default',
    },
    {
      title: 'Thérapie des schémas',
      description:
        'Pour prendre conscience de vos schémas inconscients et mieux comprendre ce qui influence vos comportements.',
      variant: 'default',
    },
  ];
  // const approaches = [
  //   {
  //     title: 'Thérapie cognitivo-comportementales (TCC)',
  //     description:
  //       'Les TCC sont une approche structurée visant à identifier et à modifier les pensées et comportements négatifs.',
  //     variant: 'default',
  //   },
  //   {
  //     title: "Thérapie par l'acceptation et l'engagement (ACT)",
  //     description:
  //       "L'ACT encourage la pleine conscience et l'acceptation des émotions difficiles, plutôt que leur évitement.",
  //     variant: 'default',
  //   },
  //   {
  //     title: 'Thérapie des schémas',
  //     description:
  //       "La thérapie des schémas explore les pensées inconscientes développés depuis l'enfance, qui influencent vos comportements actuels.",
  //     variant: 'default',
  //   },
  // ];

  return (
    <section className="approaches-section margin-section">
      <div className="approaches-section__container">
        <h2 className="approaches-section__title">Différentes approches</h2>

        <div className="approaches-section__grid">
          {approaches.map((approach, index) => (
            <div key={index} className="approaches-section__card">
              <div
                className={`approaches-section__card-header approaches-section__card-header--${approach.variant}`}
              >
                <h3 className="approaches-section__card-title">
                  {approach.title}
                </h3>

                <p className="approaches-section__card-description">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachesSection;

// import React from 'react';
// import './ApproachesSection.scss';

// function ApproachesSection() {
//   const approaches = [
//     {
//       title: 'Thérapie cognitivo-comportementales (TCC)',
//       description:
//         'Les TCC sont une approche structurée visant à identifier et à modifier les pensées et comportements négatifs.',
//       variant: 'default',
//     },
//     {
//       title: "Thérapie par l'acceptation et l'engagement (ACT)",
//       description:
//         "L'ACT encourage la pleine conscience et l'acceptation des émotions difficiles, plutôt que leur évitement.",
//       variant: 'default',
//     },
//     {
//       title: 'Thérapie des schémas',
//       description:
//         "La thérapie des schémas explore les pensées inconscientes développés depuis l'enfance, qui influencent vos comportements actuels.",
//       variant: 'default',
//     },
//   ];

//   return (
//     <section className="approaches-section margin-section">
//       <div className="approaches-section__container">
//         <h2 className="approaches-section__title">Différentes approches</h2>

//         <div className="approaches-section__grid">
//           {approaches.map((approach, index) => (
//             <div key={index} className="approaches-section__card">
//               <div
//                 className={`approaches-section__card-header approaches-section__card-header--${approach.variant}`}
//               >
//                 <h3 className="approaches-section__card-title">
//                   {approach.title}
//                 </h3>
//               </div>
//               <p className="approaches-section__card-description">
//                 {approach.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ApproachesSection;
