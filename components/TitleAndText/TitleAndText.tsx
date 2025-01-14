function TitleAndText({ number, title, text, textAlignVersion }) {
  return (
    <div className={`title-and-text ${textAlignVersion}`}>
      {number && <span className="title-and-text__number">{number}</span>}
      <h4 className="title-and-text__title">{title}</h4>
      <p className="title-and-text__paragraph">{text}</p>
    </div>
  );
}

export default TitleAndText;
