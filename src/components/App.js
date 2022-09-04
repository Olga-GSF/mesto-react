import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      <div className="page center">

        <Header />

        <Main />

        <Footer />

        <div className="popup popup_type_edit-profile">
          <div className="popup__content">
            <button aria-label="close" type="button" className="button popup__button-close"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form name="infoedit" id="profileForm" action="submit" className="popup__form popup__form_place_edit" noValidate>
              <input id="name-input" name="userName" type="text" className="popup__input popup__input_name_firstname"
                placeholder="Имя" required minLength="2" maxLength="40" />
              <span className="popup__input-error name-input-error"></span>
              <input id="description-input" name="description" type="text"
                className="popup__input popup__input_name_description" placeholder="Описание" required minLength="2"
                maxLength="200" />
              <span className="popup__input-error description-input-error"></span>
              <button type="submit" className="button popup__button-submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_add-card">
          <div className="popup__content">
            <button aria-label="close" type="button" className="button popup__button-close"></button>
            <h3 className="popup__title">Новое место</h3>
            <form name="infocard" id="cardForm" action="submit" className="popup__form popup__form_place_add" noValidate>
              <input id="place-input" name="name" type="text" className="popup__input popup__input_name_place"
                placeholder="Название" required minLength="2" maxLength="30" />
              <span className="popup__input-error place-input-error"></span>
              <input id="link-input" name="link" type="url" className="popup__input popup__input_name_link"
                placeholder="Ссылка на картинку" required />
              <span className="popup__input-error link-input-error"></span>
              <button type="submit" className="button popup__button-submit">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_big-image">
          <div className="popup__content popup__content_optionally_bigimage">
            <figure className="popup__image-container">
              <img src="#" alt="наименование места" className="popup__big-image" />
              <figcaption className="popup__image-title"></figcaption>
            </figure>
            <button aria-label="close" type="button" className="button popup__button-close"></button>
          </div>
        </div>

        <div className="popup popup_type_renew-avatar">
          <div className="popup__content popup__content_optionally_renew">
            <button aria-label="close" type="button" className="button popup__button-close"></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <form name="infoava" id="renewForm" action="submit" className="popup__form popup__form_place_renew" noValidate>
              <input id="avatar-input" name="avatar" type="url" className="popup__input popup__input_name_avatar"
                placeholder="Ссылка на картинку" required />
              <span className="popup__input-error avatar-input-error"></span>
              <button type="submit" className="button popup__button-submit popup__button-submit_type_renew">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_sure">
          <div className="popup__content popup__content_optionally_sure">
            <button aria-label="close" type="button" className="button popup__button-close"></button>
            <h3 className="popup__title">Вы уверены?</h3>
            <form className="popup__form popup__form_place_sure" id="sureForm">
              <button type="submit" className="button popup__button-submit popup__button-submit_type_sure">Да</button>
            </form>
          </div>
        </div>

        <template id="card-template">
          <div className="card">
            <img src="#" alt="наименование места" className="card__image" />
            <button type="button" aria-label="del" className="button card__button-delete"></button>
            <div className="card__title-wrap">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button type="button" aria-label="like" className="button card__button-like"></button>
                <p className="card__like-number"></p>
              </div>
            </div>
          </div>
        </template>

      </div>

    </div>
  );
}

export default App;
