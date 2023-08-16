import photo from "./image/2.jpg";
import photo3 from "./image/3.jpg";
import photo4 from "./image/4.jpg";
import photo5 from "./image/5.jpg";
import photo6 from "./image/6.jpg";
import photo7 from "./image/7.jpg";
import photo8 from "./image/8.jpg";
import photo10 from "./image/12.jpg";

function Photo() {
    return (
        <section className="photo-grid content__section" id="photo">
            <h2 className="section__title">Фото</h2>
            <div className="photo-grid_container">
                <img
                    className="photo-grid__item"
                    src={photo}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo3}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo4}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo5}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo6}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo7}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo8}
                    alt="фото стоматологии"
                ></img>
                <img
                    className="photo-grid__item"
                    src={photo10}
                    alt="фото стоматологии"
                ></img>

            </div>
        </section>
    )
}
export default Photo