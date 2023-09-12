import "./Photo.css";
import React from "react";
import FsLightbox from "fslightbox-react";


function Photo({ photos }) {
    const [toggler, setToggler] = React.useState(false);
    const lightBoxSoure = photos.map((photo, key) => photo.link.href )
    console.log(lightBoxSoure)

    return (
        <section className="photo-grid content__section" id="photo">
            <h2 className="section__title">Фото</h2>
            <div className="photo-grid_container">
                <FsLightbox
                    toggler={toggler}
                    sources={lightBoxSoure}
                />
                {photos.map((photo, key) =>
                    <>
                        <button className="photo-grid__btn" onClick={() => setToggler(!toggler)} >
                            <img className="photo-grid__item" src={photo.link} key={photo.link} alt={photo.name}
                            />
                        </button>
                    </>
                )}
            </div>
        </section>
    )
}
export default Photo