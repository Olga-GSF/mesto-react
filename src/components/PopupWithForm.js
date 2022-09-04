function PopupWithForm() {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__content">
        <button aria-label="close" type="button" className="button popup__button-close"></button>
        <h3 className="popup__title">{title}</h3>
        <form name="infoedit" id="profileForm" action="submit" className="popup__form popup__form_place_edit" noValidate>
          <input id="name-input" name="userName" type="text" className="popup__input popup__input_name_firstname"
            placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error name-input-error"></span>
          <input id="description-input" name="description" type="text"
            className="popup__input popup__input_name_description" placeholder="Описание" required minLength="2"
            maxLength="200" />
          <span className="popup__input-error description-input-error"></span>
          <button type="submit" className="button popup__button-submit">{buttonText}</button>
        </form>
      </div>
    </div>

  )
}