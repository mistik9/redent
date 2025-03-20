import "./Navigation.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navigation({ isMenuOpen, openMenu, closeMenu }) {




  return (
    // <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //   <Tabs
    //     aria-label="nav tabs example"
    //     role="navigation"
    //     centered
    //     indicatorColor="secondary"
    //   >
    //     <Tab label="О клинике" href="#about" />
    //     <Tab label="Фото" href="#photo" />
    //     <Tab label="Услуги" href="#service" />
    //     <Tab label="Стоимость услуг" href="#price" />
    //     <Tab label="Отзывы" href="#reviews" />
    //     <Tab label="Контакты" href="#contacts" />

    //   </Tabs>
    // </Box>

    <nav className="nav">
      <div className={!isMenuOpen ? "nav__list nav__list_hide  " : "nav__list"}>
        <button className="nav__close" type="button" onClick={closeMenu}></button>
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
      <button
        className={isMenuOpen ? "nav__menu nav__menu_hide " : "nav__menu"}
        onClick={openMenu}
      >
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
        <span className="nav__menu-line"></span>
      </button>
    </nav>

  )
}
export default Navigation;