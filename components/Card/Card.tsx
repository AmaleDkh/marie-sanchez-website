function Card({ title, text1, text2 }) {
  return (
    <div className="card">
      <div className="card__item">
        <div className="card__item__title">{title}</div>
        <p className="card__item__paragraph">{text1}</p>
        {text2 && <p className="card__item__paragraph">{text2}</p>}
      </div>
      <div className="card__square"></div>
    </div>
  );
}

export default Card;
