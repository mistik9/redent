import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Price from "./components/Price/Price";
import Service from "./components/Service/Service";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollBtn/ScrollBtn";
import Navigation from "./components/Navigation/Navigation";
import { photos } from "./components/utils/const";
console.log(photos)


function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  function openMenu() {
    setIsMenuOpen(true)
  }
  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className="page">
      <Header />
     <Navigation closeMenu={closeMenu} openMenu={openMenu} isMenuOpen={isMenuOpen}/>
    
      <main className="content">
        <About />
        <Photo photos={photos}/>
        <Service />
        <Price />
        <Reviews />
        <Contacts />

      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
