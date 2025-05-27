import { useState } from "react";
import "./Navigation.css"
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navigation({ }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


   function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }



  return (


    <nav className="nav">
      <div className={!isMenuOpen ? "nav__list nav__list_hide  " : "nav__list"}>
       
        <AnchorLink href="#about" className="nav__list-item" onClick={closeMenu}>
          О клинике
        </AnchorLink>
        <AnchorLink href="#photo" className="nav__list-item" onClick={closeMenu}>
          Фото
        </AnchorLink>
        <AnchorLink href="#service" className="nav__list-item" onClick={closeMenu}>
          Услуги
        </AnchorLink>
        <AnchorLink href="#price" className="nav__list-item"   onClick={closeMenu}>
          Стоимость услуг
        </AnchorLink>
        <AnchorLink href="#reviews" className="nav__list-item" onClick={closeMenu}>
          Отзывы
        </AnchorLink>
        <AnchorLink href="#contacts" className="nav__list-item" onClick={closeMenu}>
          Контакты
        </AnchorLink>
      </div>
      <button
        className={isMenuOpen ? "nav__menu nav__menu_open " : "nav__menu"}
        onClick={toggleMenu}
      >
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
      </button>
    </nav>

  )
}
export default Navigation;