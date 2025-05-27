import './Photo.css';
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function Photo({ photos }) {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);
  const lightBoxSoure = photos.map((photo, key) => photo.link.href);
  // Открыть нужное фото по индексу
  function openLightbox(index) {
    setSlide(index + 1); // FsLightbox использует индексацию с 1
    setToggler((prev) => !prev);
  }

  return (
    <section className="photo-grid content__section" id="photo">
      <h2 className="section__title">Фото</h2>
      <div className="photo-grid_container">
        <FsLightbox toggler={toggler} sources={lightBoxSoure} slide={slide}/>
        {photos.map((photo, key) => (
          <button key={key} className="photo-grid__btn" onClick={() => openLightbox(key)}>
            <img className="photo-grid__item" src={photo.link} key={photo.link} alt={photo.name} />
          </button>
        ))}
      </div>
    </section>
  );
}
export default Photo;
