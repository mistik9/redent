import "./Navigation.css"
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
    return(
        <div>
        <nav className="nav">
        <div className={isMenuOpen ? "nav__list nav__list_hide " : "nav__list"}>
          <AnchorLink href="#about" className="nav__list-item">
            О клинике
          </AnchorLink>
          <AnchorLink href="#photo" className="nav__list-item">
            Фото
          </AnchorLink>
          <AnchorLink href="#service" className="nav__list-item">
            Услуги
          </AnchorLink>
          <AnchorLink href="#price" className="nav__list-item">
            Стоимость услуг
          </AnchorLink>
          <AnchorLink href="#reviews" className="nav__list-item">
            Отзывы
          </AnchorLink>
          <AnchorLink href="#contacts" className="nav__list-item">
            Контакты
          </AnchorLink>
        </div>
      </nav>
      <button
        className={isMenuOpen ? "nav__menu nav__menu_hide " : "nav__menu"}
        onClick={openMenu}
      >
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
      </button>
      </div>
    )
}
export default Navigation;