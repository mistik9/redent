import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import Price from './components/Price/Price';
import Service from './components/Service/Service';
import Photo from './components/Photo/Photo';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollBtn/ScrollBtn';
import Navigation from './components/Navigation/Navigation';
import Popup from './components/Popup/Popup';
import { photos } from './utils/const';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  function openPopup() {
    setIsOpen(true);
  }
  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Navigation />
      <Popup isOpen={isOpen} onClose={closePopup} />
      <main className="content">
        <About />
        <Photo photos={photos} />
        <Service />
        <Price openPopup={openPopup} />
        <Reviews />
        <Contacts />
      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
