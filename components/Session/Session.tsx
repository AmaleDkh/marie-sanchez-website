function Session({ title, duration, paragraph }) {
  return (
    <li className="duration-prices__page__content__texts__list__item">
      <h4 className="duration-prices__page__content__texts__list__item__title">
        {title}
      </h4>
      <p className="duration-prices__page__content__texts__list__item__duration">
        {duration}
      </p>
      <p className="duration-prices__page__content__texts__list__item__paragraph">
        {paragraph}
      </p>
    </li>
  );
}

export default Session;
