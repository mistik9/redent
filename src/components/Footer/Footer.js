import logo from "../../image/logo.png";
import "./Footer.css"

function Footer() {
    return(
        <footer className="footer">
          <a href="#">
        <img className="header__logo" src={logo} alt="Логотип" />
        </a>
        <ul className="header__items">
          <li className="header__item">
            <a href="tel:+73812633310"></a>тел. 63-33-10
          </li>
          <li className="header__item">г. Омск ул. Пригородная 23/2</li>
        </ul>
        <ul className="header__items">
          <li className="header__item">пн-пт 10:00 - 19:00</li>
          <li className="header__item">сб 10:00 - 15:00</li>
        </ul>
        <a href="tel:+73812633310" className="header__btn">Запись на прием</a>
      </footer>
    )
}
export default Footer