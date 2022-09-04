function handleEditAvatarClick() {

}

function handleEditProfileClick() {

}

function handleAddPlaceClick() {

}

function Main() {
  return (
    <main className="content">
      <section className="profile center">
        <div className="profile__info">
          <div className="profile__edit-wrapper">
            <button type="button" className="profile__overlay"></button>
            <img src="<%=require('./images/image.jpg')%>" alt="аватар" className="profile__avatar" />
          </div>
          <div className="profile__wrapper">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button aria-label="edit" type="button" className="button profile__button-edit"></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button aria-label="add" className="button profile__button-add"></button>
      </section>

      <section className="cards center">
        <ul className="cards__items">

        </ul>
      </section>

    </main>
  )
}

export default Main;