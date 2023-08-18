import therapy from "../../image/icon6.png";
import clean from "../../image/icon3.png";
import surg from "../../image/icon4.png";
import casts from "../../image/icon5.png";
import imp from "../../image/icon7.png";
import other from "../../image/icon.png";
import pulpitis from "../../image/icon1.png";
import "./Price.css";

function Price() {
    return (
        <section className="priсe content__section " id="price">
        <h2 className="section__title">Прайс</h2>

        <ul className="price__list">
          <li className="price__list-item">

            <p calss="price__name"><img className="price__img" src={therapy} alt="лечение"></img>
              Лечение кариеса (пломба на жевательной поверхности)
            </p>
            <p className="price__value"> 3 600₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">
              Лечение кариеса (пломба на контактной поверхности)
            </p>
            <p className="price__value"> 3 800₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">
              Лечение кариеса (реставрация фронтального зуба)
            </p>
            <p className="price__value"> 4 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name"><img className="price__img" src={pulpitis} alt="лечение"></img>Лечение пульпита: одноканальный зуб</p>
            <p className="price__value"> от 6 100₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Лечение пульпита: двухканальный зуб</p>
            <p className="price__value"> от 7 200₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Лечение пульпита: трехканальный зуб</p>
            <p className="price__value"> от 8 600₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Оказание разовой помощи при острой боли</p>
            <p className="price__value"> 2000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name"><img className="price__img" src={clean} alt="лечение"></img> УЗ чистка зубного камня </p>
            <p className="price__value"> 2 500₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">УЗ чистка зубного камня - 1 ед.</p>
            <p className="price__value"> 120₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name"><img className="price__img" src={surg} alt="лечение"></img> Удаление зуба 3-й степени подвижности</p>
            <p className="price__value"> 1 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Удаление зуба 1-й степени сложности</p>
            <p className="price__value"> 1 500₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Удаление зуба 2-й степени сложности</p>
            <p className="price__value"> 2 500₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Удаление зуба 3-й степени сложности</p>
            <p className="price__value"> 5 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name"><img className="price__img" src={casts} alt="лечение"></img> Металлокерамическая коронка</p>
            <p className="price__value"> 6 500₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Цельнолитая коронка</p>
            <p className="price__value"> 4 500₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Безметалловая коронка (ZrO2 E-max)</p>
            <p className="price__value"> 13 500₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Виниры E.max (+wax up) - 1 ед. </p>
            <p className="price__value"> 20 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Съемный пластмассовый протез </p>
            <p className="price__value"> 14 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Бюгельное протезирование </p>
            <p className="price__value"> 25 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name"><img className="price__img" src={imp} alt="лечение"></img> Коронка на импланте (полная анатомия, диоксид циркония) </p>
            <p className="price__value"> 20 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Коронка на импланте (циркониевый абатмент) </p>
            <p className="price__value"> 25 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Установка импланта Dentium (под ключ)</p>
            <p className="price__value"> 23 000₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name"><img className="price__img" src={other} alt="лечение"></img> Обезболивание (анестезия)</p>
            <p className="price__value"> 600₽</p>
          </li>
          <li className="price__list-item">
            <p calss="price__name">Прицельный снимок</p>
            <p className="price__value"> 300₽</p>
          </li>
        </ul>
      </section>
    )
}

export default Price