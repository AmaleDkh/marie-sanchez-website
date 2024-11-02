function TitleAndText({ number, title, text }) {
  return (
    <div className="title-and-text">
      {number ? <span className="title-and-text__number">{number}</span> : null}
      <h4 className="title-and-text__title">{title}</h4>
      <p className="title-and-text__paragraph">{text}</p>
    </div>
  );
}

export default TitleAndText;
