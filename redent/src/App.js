import logo from "../src/image/logo.png";
import "./App.css";
import photo from "./image/2.jpg";
import photo3 from "./image/3.jpg";
import photo4 from "./image/4.jpg";
import photo5 from "./image/5.jpg";
import photo6 from "./image/6.jpg";
import photo7 from "./image/7.jpg";
import photo8 from "./image/8.jpg";

import photo10 from "./image/12.jpg";
import caries from "./image/pic6.jpeg";
import implant from "./image/pic7.jpg";
import crown from "./image/pic10.jpg";
import cast from "./image/pic4.jpeg";
import surgery from "./image/pic13.jpg";
import cleaning from "./image/pic14.jpg";
import therapy from "./image/icon6.png";
import clean from "./image/icon3.png";
import surg from "./image/icon4.png";
import casts from "./image/icon5.png";
import imp from "./image/icon7.png";
import other from "./image/icon.png";
import pulpitis from "./image/icon1.png";


function App() {
  return (
    <body class="page">
      <header class="header">
        <img class="header__logo" src={logo} alt="Логотип" />
        <ul class="header__items">
          <li class="header__item">
            <a href="tel:+73812633310"></a>тел. 63-33-10
          </li>
          <li class="header__item">г. Омск ул. Пригородная 23/2</li>
        </ul>
        <ul class="header__items">
          <li class="header__item">пн-пт 10:00 - 19:00</li>
          <li class="header__item">сб 10:00 - 15:00</li>
        </ul>
        <a href="tel:+73812633310" class="header__btn">Записаться на прием</a>
      </header>
      <section className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">О клинике</li>
          <li className="nav__menu-item">Услуги</li>
          <li className="nav__menu-item">Стоимость услуг</li>
          <li className="nav__menu-item">Отзывы</li>
          <li className="nav__menu-item">Контакты</li>
        </ul>
      </section>
      <main class="content">
        <section class="about">
          <h2 class="section__title section__title_about">ReDent</h2>
          <div class="about__img"></div>
          <h3 class="section__subtitle">С заботой о Вашей улыбке</h3>
          <p class="section__text">
            Стоматологическая клиника Redent – это качественное и доступное
            лечение зубов. Комфорт, безопасность и отсутствие боли – это не
            просто часть нашей работы, это наша идеология. В нашей
            стоматологической клинике вы получите целый спектр услуг от
            высококвалифицированных специалистов: стоматолога - терапевта,
            ортопеда, имплантолога и хирурга. Стоматологическая клиника Redent ,
            здоровье Ваших зубов!
          </p>
          <p class="section__text">
            Наши врачи - стоматологи регулярно проходят обучение на базе
            новейших технологий. Стоматологическая клиника Redent идет в ногу с
            мировыми тенденциями и применяет новейшие методики и технологии.
            Опытные врачи - стоматологи подбирают наиболее подходящий метод
            лечения, имплантации или протезирования, как с точки зрения
            эффективности и надежности, так и исходя из финансовой возможности
            пациента.
          </p>
          <p class="section__text">
            Мы установили действительно привлекательные цены, чтобы абсолютно
            все смогли получить качественное лечение, протезирование и
            имплантацию недорого! Стоматологическую клинику Redent пациенты
            рекомендуют своим друзьям и родственникам. Большая часть пациентов
            приходят к нам именно по рекомендации близких и знакомых, что
            собственно и является основным показателем доверия.
          </p>
        </section>
        <section class="photo-grid">
          <h2 class="section__title">Фото</h2>
          <div class="photo-grid_container">
            <img
              class="photo-grid__item"
              src={photo}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo3}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo4}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo5}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo6}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo7}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo8}
              alt="фото стоматологии"
            ></img>
            <img
              class="photo-grid__item"
              src={photo10}
              alt="фото стоматологии"
            ></img>

          </div>
        </section>
        <section class="service">
          <h2 class="section__title">Услуги</h2>
          <div class="service__item">
            <img class="service__img" src={caries} alt="имплантация"></img>
            <ul class="service__list">
              <h3 class="service__subtitle">Террапия(лечение)</h3>
              <li class="service__list-item">
                <span class="service__list-item_span">Кариес</span> – поражение
                и разрушение зубной эмали.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">Пульпит</span> –
                воспаление зубного нерва из-за развития глубокого кариеса.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">Периодонтит</span> –
                воспаление тканей, окружающих зуб.
              </li>
            </ul>
          </div>
          <div class="service__item">
            <img class="service__img" src={implant} alt="кариес"></img>
            <ul class="service__list">
              <h3 class="service__subtitle">Имплантация </h3>
              <li class="service__list-item">
                <span class="service__list-item_span">
                  Одномоментная имплантация
                </span>{" "}
                - хирург удаляет зуб, сразу вживляет имплант.
              </li>
              <li class="service__list-item ">
                <span class="service__list-item_span">All-on-4</span> - при
                полном отсутствии зубов рекомендуется к проведению дентальная
                имплантация «Все на 4-х». Это имплантация челюсти,
                протезирование всего зубного ряда на 4-х имплантах.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">
                  Двухэтапная имплантация
                </span>{" "}
                - коронка устанавливается после полного приживления и
                стабилизации имплантов, через 3-6 месяцев.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">Cинус-лифтинг</span> -
                наращивание костной ткани в области жевательных зубов верхней
                челюсти.
              </li>
            </ul>
          </div>
          <div class="service__item">
            <div>
              <img class="service__img" src={crown} alt="ортопедия"></img>
              <img class="service__img" src={cast} alt="слепки"></img>
            </div>
            <ul class="service__list">
              <h3 class="service__subtitle">Ортопедия (протезирование) </h3>
              <li class="service__list-item">
                <span class="service__list-item_span">
                  Металлокерамическая коронка
                </span>
                - в ее основе металлический каркас, покрытый слоем из керамики,
                оттенок которой подобран под цвет зубов.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">
                  Безметалловые коронки
                </span>
                - за счет отсутствия металлического каркаса такие протезы
                превосходно имитируют структуру и цвет натуральной эмали.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">Виниры</span> - накладки
                на фронтальную (видимую) поверхность зубов, призванные скрыть
                визуальные дефекты эмали
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">Съемный протез </span>
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">
                  Бюгельное протезирование
                </span>
                Главное отличие бюгельного протеза от обычного в том, что
                искусственные зубы крепятся не к пластмассовой пластинке,
                которая занимает определенное место во рту, а к тонкой
                металлической дуге – бюгелю.
              </li>
              <li class="service__list-item">
                <span class="service__list-item_span">
                  Коронка на импланте{" "}
                </span>{" "}
                изготавливается из диоксида циркония.
              </li>
            </ul>
          </div>
          <div class="service__item">
            <img class="service__img" src={surgery} alt="ортопедия"></img>
            <ul class="service__list">
              <h3 class="service__subtitle">Хирургия</h3>
              <li class="service__list-item">
                Удаление зубов разной степени сложности
              </li>
            </ul>
          </div>
          <div class="service__item">
            <img class="service__img" src={cleaning} alt="ортопедия"></img>
            <ul class="service__list">
              <h3 class="service__subtitle">Профессиональная чистка зубов</h3>
              <li class="service__list-item">
                Удаление твердого зубного камня при помощи ультразвук
              </li>
              <li class="service__list-item">
                Полировка зубов дентальной профессиональной пастой
              </li>
              <li class="service__list-item"></li>
            </ul>
          </div>
        </section>
        <section class="priсe">
          <h2 class="section__title">Прайс</h2>

          <ul class="price__list">
            <li class="price__list-item">

              <p calss="price__name"><img class="price__img" src={therapy} alt="лечение"></img>
                Лечение кариеса (пломба на жевательной поверхности)
              </p>
              <p class="price__value"> 3 600 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">
                Лечение кариеса (пломба на контактной поверхности)
              </p>
              <p class="price__value"> 3 800 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">
                Лечение кариеса (реставрация фронтального зуба)
              </p>
              <p class="price__value"> 4 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name"><img class="price__img" src={pulpitis} alt="лечение"></img>Лечение пульпита: одноканальный зуб</p>
              <p class="price__value"> от 6 100 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Лечение пульпита: двухканальный зуб</p>
              <p class="price__value"> от 7 200 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Лечение пульпита: трехканальный зуб</p>
              <p class="price__value"> от 8 600 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Оказание разовой помощи при острой боли</p>
              <p class="price__value"> 2000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name"><img class="price__img" src={clean} alt="лечение"></img> УЗ чистка зубного камня (вся челюсть)</p>
              <p class="price__value"> 2 500 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">УЗ чистка зубного камня - 1 ед.</p>
              <p class="price__value"> 120 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name"><img class="price__img" src={surg} alt="лечение"></img> Удаление зуба 3-й степени подвижности</p>
              <p class="price__value"> 1 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Удаление зуба 1-й степени сложности</p>
              <p class="price__value"> 1 500 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Удаление зуба 2-й степени сложности</p>
              <p class="price__value"> 2 500 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Удаление зуба 3-й степени сложности</p>
              <p class="price__value"> 5 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name"><img class="price__img" src={casts} alt="лечение"></img> Металлокерамическая коронка</p>
              <p class="price__value"> 6 500 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Цельнолитая коронка</p>
              <p class="price__value"> 4 500 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Безметалловая коронка (ZrO2 E-max)</p>
              <p class="price__value"> 13 500 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Виниры E.max (+wax up) - 1 ед. </p>
              <p class="price__value"> 20 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Съемный пластмассовый протез </p>
              <p class="price__value"> 14 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Бюгельное протезирование </p>
              <p class="price__value"> 25 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name"><img class="price__img" src={imp} alt="лечение"></img> Коронка на импланте (полная анатомия, диоксид циркония) </p>
              <p class="price__value"> 20 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Коронка на импланте (циркониевый абатмент) </p>
              <p class="price__value"> 25 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Установка импланта Dentium (под ключ)</p>
              <p class="price__value"> 23 000 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name"><img class="price__img" src={other} alt="лечение"></img> Обезболивание (анестезия)</p>
              <p class="price__value"> 600 ₽</p>
            </li>
            <li class="price__list-item">
              <p calss="price__name">Прицельный снимок</p>
              <p class="price__value"> 300 ₽</p>
            </li>
          </ul>
        </section>

        <section class="reviews">
        <h2 class="section__title">Отзывы</h2>
        <p class="section__text"> Здесь должны быть отзывы</p>
        
          </section>
        <section class="contacts">
          <h2 class="section__title">Контакты</h2>
          <p class="section__text"> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "РЕДЕНТ"</p>
          <p class="section__text">ИНН 5501270102</p>
          <p class="section__text">КПП	550101001</p>
          <p class="section__text">ОГРН 1215500006743</p>
          <p class="section__text">Юридический адрес: Россия, 644077, г. Омск, ул. Пригородная, дом 23, кор. 2, пом. 10</p>
          <p class="section__text">Фактический адрес: Россия, 644077, г. Омск, ул. Пригородная, дом 23, кор. 2, пом. 10</p>
          <p class="section__text">Номер лицензии: Л041-01165-55/00152933</p>
          <p class="section__text"></p>
          <a class="section__text"
            href="http://2gis.ru/omsk/firm/70000001059729449/center/73.25758695602418,55.02396323184466/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
          >
            Посмотреть на карте Омска
          </a>

        </section>

      </main>
      <footer class="footer">
        <img class="header__logo" src={logo} alt="Логотип" />
        <ul class="header__items">
          <li class="header__item">
            <a href="tel:+73812633310"></a>тел. 63-33-10
          </li>
          <li class="header__item">г. Омск ул. Пригородная 23/2</li>
        </ul>
        <ul class="header__items">
          <li class="header__item">пн-пт 10:00 - 19:00</li>
          <li class="header__item">сб 10:00 - 15:00</li>
        </ul>
        <a href="tel:+73812633310" class="header__btn">Записаться на прием</a>
      </footer>
    </body>
  );
}
{
  /* https://colorscheme.ru/#3r11Tw0w0w0w0  */
}
export default App;
