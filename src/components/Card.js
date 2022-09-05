function Card(props) {
  return (
    <div className="card">
      <img src={props.card.link} alt={props.card.name} onClick={function handleClick() { props.onCardClick(props.card) }} className="card__image" />
      <button type="button" aria-label="del" className="button card__button-delete"></button>
      <div className="card__title-wrap">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" aria-label="like" className="button card__button-like"></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;