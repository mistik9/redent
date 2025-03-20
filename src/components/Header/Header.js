import logo from "../../image/logoza-ru-hd.svg";
import "./Header.css";
import call from "../../image/icons8-whatsapp-32.svg";
import whatsapp from "../../image/icons8-whatsapp-48.svg";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="header__logo" src={logo} alt="Логотип" />
      </a>
<Block />
    </header>
  );
}
export function Block() {
  return (
    <>
    <ul className="header__items">
    <li className="header__item">
      <a className="header__item_call-link" href="https://wa.me/79620583310?text=" target="_blank" rel="noreferrer">
        <img className="header__item_call" src={whatsapp} alt="иконка whatsapp"/>
      </a>
      <a className="header__item_call-link" href="tel:+79620583310" target="_blank" rel="noreferrer">
        +7(962)058-33-10
      </a>
    </li>
    <li className="header__item">
      <a className="header__item_call-link" href="tel:+73812633310" target="_blank" rel="noreferrer">
        <img className="header__item_call" src={call} alt="иконка трубки"/>

      </a>
      <a className="header__item_call-link" href="tel:+73812633310" target="_blank" rel="noreferrer"> тел. 63-33-10</a>
    </li>
  </ul>
  <ul className="header__items header__items_duty">
    <li className="header__item">пн-пт 10:00 - 19:00</li>
    <li className="header__item">сб 10:00 - 17:00</li>
  </ul>
  <a href="tel:+73812633310" className="header__btn">
    Запись на прием
  </a>
  </>
  )
}
export default Header;
