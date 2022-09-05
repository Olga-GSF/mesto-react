import { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getUserData(),

      api.getInitialCards(),
    ])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);

        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile center">
        <div className="profile__info">
          <div className="profile__edit-wrapper">
            <button type="button" className="profile__overlay" onClick={props.onRenewAvatar}></button>
            <img src={userAvatar} alt="аватар" className="profile__avatar" />
          </div>
          <div className="profile__wrapper">
            <h1 className="profile__title">{userName}</h1>
            <button aria-label="edit" type="button" className="button profile__button-edit" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button aria-label="add" className="button profile__button-add" onClick={props.onAddCard}></button>
      </section>

      <section className="cards center">
        <ul className="cards__items">
          {
            cards.map((card) => (
              <Card card={card} key={card._id} onCardClick={props.onCardClick} />
            ))
          }
        </ul>
      </section>

    </main>
  )
}

export default Main;