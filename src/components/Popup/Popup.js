import React from "react";
import "./Popup.css";
import logo from "../../image/logoza-ru-hd.png";

function Popup({isOpen,  onClose }) {

  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <p className="popup__text">Поздравляем!</p>
        <p className="popup__text">Вы уже в шаге от красивых и здоровых зубов.</p>
        <p className="popup__text">И в этом Мы Вам поможем!</p>
        <img className="popup__logo" src={logo} alt="Логотип" />
         </div>
    </section>
  )
}

export default Popup;
