function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-open'}`}>
      <div className="popup__content">
        <button aria-label="close" type="button" className="button popup__button-close" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form name={props.name} id="profileForm" action="#" className="popup__form popup__form_place_edit" noValidate>
          {props.children}
          <button type="submit" className="button popup__button-submit" disabled>{props.buttonText}</button>
        </form>
      </div>
    </div>

  )
}

export default PopupWithForm;