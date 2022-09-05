import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import { useState } from 'react';

function App() {

  const [renewAvatarPopup, renewAvatarPopupOpen] = useState(false);
  const [editProfilePopup, editProfilePopupOpen] = useState(false);
  const [addCardPopup, addCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    renewAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    editProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    addCardPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    renewAvatarPopupOpen(false)
    editProfilePopupOpen(false)
    addCardPopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="App">

      <div className="page center">

        <Header />

        <Main onRenewAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddCard={handleAddPlaceClick} onCardClick={handleCardClick} />

        <Footer />

        <PopupWithForm name="popup popup_type_edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={editProfilePopup} onClose={closeAllPopups}>
          <div className="popup__content">
            <input id="name-input" name="userName" type="text" className="popup__input popup__input_name_firstname"
              placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
            <input id="description-input" name="description" type="text"
              className="popup__input popup__input_name_description" placeholder="Описание" required minLength="2"
              maxLength="200" />
            <span className="popup__input-error description-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm name="popup popup_type_add-card" title="Новое место" buttonText="Создать" isOpen={addCardPopup} onClose={closeAllPopups}>
          <div className="popup__content">
            <input id="place-input" name="name" type="text" className="popup__input popup__input_name_place"
              placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__input-error place-input-error"></span>
            <input id="link-input" name="link" type="url" className="popup__input popup__input_name_link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm name="popup popup_type_renew-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={renewAvatarPopup} onClose={closeAllPopups}>
          <div className="popup__content">
            <input id="avatar-input" name="avatar" type="url" className="popup__input popup__input_name_avatar"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithImage onClose={closeAllPopups} card={selectedCard} />

        <div className="popup popup_type_sure">
          <div className="popup__content popup__content_optionally_sure">
            <button aria-label="close" type="button" className="button popup__button-close"></button>
            <h3 className="popup__title">Вы уверены?</h3>
            <form className="popup__form popup__form_place_sure" id="sureForm">
              <button type="submit" className="button popup__button-submit popup__button-submit_type_sure">Да</button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
