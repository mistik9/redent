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


function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function openMenu() {
    setIsMenuOpen(true)
  }

  return (
    <div className="page">
      <Header openMenu={openMenu} isMenuOpen={isMenuOpen}/>
     
      <main className="content">
        <About />
        <Photo />
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
