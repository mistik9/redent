import caries from "../../image/pic17.webp";
import implant from "../../image/pic7.webp";
import crown from "../../image/pic15.webp";
import cast from "../../image/pic5.jpeg";
import surgery from "../../image/pic13.webp";
import cleaning from "../../image/pic16.webp";
import "./Service.css"

function Service() {
    return (
        <section className="service content__section " id="service">
            <h2 className="section__title">Услуги</h2>
            <div className="service__item">
                <img className="service__img" src={caries} alt="кариес"></img>
                <ul className="service__list">
                    <h3 className="service__subtitle">Терапия(лечение)</h3>
                    <li className="service__list-item">
                        <span className="service__list-item_span">Кариес</span> – поражение
                        и разрушение зубной эмали.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">Пульпит</span> –
                        воспаление зубного нерва из-за развития глубокого кариеса.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">Периодонтит</span> –
                        воспаление тканей, окружающих зуб.
                    </li>
                </ul>
            </div>
            <div className="service__item">
                <img className="service__img" src={implant} alt="имплантация"></img>
                <ul className="service__list">
                    <h3 className="service__subtitle">Имплантация </h3>
                    <li className="service__list-item">
                        <span className="service__list-item_span">
                            Одномоментная имплантация
                        </span>{" "}
                        - хирург удаляет зуб, сразу вживляет имплант.
                    </li>
                    <li className="service__list-item ">
                        <span className="service__list-item_span">All-on-4</span> - при
                        полном отсутствии зубов рекомендуется к проведению дентальная
                        имплантация «Все на 4-х». Это имплантация челюсти,
                        протезирование всего зубного ряда на 4-х имплантах.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">
                            Двухэтапная имплантация
                        </span>{" "}
                        - коронка устанавливается после полного приживления и
                        стабилизации имплантов, через 3-6 месяцев.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">Cинус-лифтинг</span> -
                        наращивание костной ткани в области жевательных зубов верхней
                        челюсти.
                    </li>
                </ul>
            </div>
            <div className="service__item">
                <div>
                    <img className="service__img" src={crown} alt="ортопедия"></img>
                    <img className="service__img" src={cast} alt="слепки"></img>
                </div>
                <ul className="service__list">
                    <h3 className="service__subtitle">Ортопедия (протезирование) </h3>
                    <li className="service__list-item">
                        <span className="service__list-item_span">
                            Металлокерамическая коронка
                        </span>
                        - в ее основе металлический каркас, покрытый слоем из керамики,
                        оттенок которой подобран под цвет зубов.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">
                            Безметалловые коронки
                        </span>
                        - за счет отсутствия металлического каркаса такие протезы
                        превосходно имитируют структуру и цвет натуральной эмали.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">Виниры</span> - накладки
                        на фронтальную (видимую) поверхность зубов, призванные скрыть
                        визуальные дефекты эмали
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">Съемный протез </span>
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">
                            Бюгельное протезирование -
                        </span>
                        главное отличие бюгельного протеза от обычного в том, что
                        искусственные зубы крепятся не к пластмассовой пластинке,
                        которая занимает определенное место во рту, а к тонкой
                        металлической дуге – бюгелю.
                    </li>
                    <li className="service__list-item">
                        <span className="service__list-item_span">
                            Коронка на импланте{" "}
                        </span>{" "}
                        изготавливается из диоксида циркония.
                    </li>
                </ul>
            </div>
            <div className="service__item">
                <img className="service__img" src={surgery} alt="хирургия"></img>
                <ul className="service__list">
                    <h3 className="service__subtitle">Хирургия</h3>
                    <li className="service__list-item">
                        Удаление зубов разной степени сложности
                    </li>
                </ul>
            </div>
            <div className="service__item">
                <img className="service__img" src={cleaning} alt="профгигиена"></img>
                <ul className="service__list">
                    <h3 className="service__subtitle">Профессиональная чистка зубов</h3>
                    <li className="service__list-item">
                        Удаление твердого зубного камня при помощи ультразвука
                    </li>
                    <li className="service__list-item">
                        Полировка зубов дентальной профессиональной пастой
                    </li>
                    <li className="service__list-item"></li>
                </ul>
            </div>
        </section>
    )
}
export default Service