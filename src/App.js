import React from "react";
import "./App.css";
import Header from "./Header";
import Reviews from "./Reviews";
import Price from "./Price";
import Service from "./Service";
import Photo from "./Photo";
import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import ScrollButton from "./ScrollBtn";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {

  return (
    <div className="page">
      <Header />
      <nav className="nav">
        <div className="nav__menu" >
          <AnchorLink href='#about' className="nav__menu-item">О клинике</AnchorLink>
          <AnchorLink href='#photo' className="nav__menu-item">Фото</AnchorLink>
          <AnchorLink href='#service' className="nav__menu-item">Услуги</AnchorLink>
          <AnchorLink href='#price' className="nav__menu-item">Стоимость услуг</AnchorLink>
          <AnchorLink href='#reviews' className="nav__menu-item">Отзывы</AnchorLink>
          <AnchorLink href='#contacts' className="nav__menu-item">Контакты</AnchorLink>
        </div>
      </nav>
      <main className="content">

        <About />
        <Photo />
        <Service />
        <Price />
        <Reviews />
        <Contacts />
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}

export default App;


