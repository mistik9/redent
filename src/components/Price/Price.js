import therapy from "../../image/icon6.png";
import clean from "../../image/icon3.png";
import surg from "../../image/icon4.png";
import casts from "../../image/icon5.png";
import imp from "../../image/icon7.png";
import other from "../../image/icon.png";
import pulpitis from "../../image/icon1.png";
import {
  price_therapy,
  price_pulpitis,
  price_surgury,
  price_casts,
  price_implant,
  price_other,
} from "../../utils/const";
import React from "react";
import "./Price.css";

function Price() {
  const [easter, setEaster] = React.useState(therapy);

  function onTherapyClick() {
    setEaster(clean);
  }

  return (
    <section className="priсe content__section " id="price">
      <h2 className="section__title">Стоимость услуг</h2>
      <ul className="price__list">
        <img
          className="price__img"
          src={easter}
          alt="лечение"
          onClick={onTherapyClick}
        />
        {price_therapy.map((i) => (
          <li className="price__list-item" key={i.name}>
            <p calss="price__name">{i.name}</p>
            <p className="price__value"> {i.cost}</p>
          </li>
        ))}
        <img className="price__img" src={pulpitis} alt="пульпит"></img>
        {price_pulpitis.map((i) => (
          <li className="price__list-item" key={i.name}>
            <p calss="price__name">{i.name}</p>
            <p className="price__value"> {i.cost}</p>
          </li>
        ))}
        <img className="price__img" src={surg} alt="хирургия"></img>
        {price_surgury.map((i) => (
          <li className="price__list-item" key={i.name}>
            <p calss="price__name">{i.name}</p>
            <p className="price__value"> {i.cost}</p>
          </li>
        ))}
        <img className="price__img" src={casts} alt="протезирование"></img>
        {price_casts.map((i) => (
          <li className="price__list-item" key={i.name}>
            <p calss="price__name">{i.name}</p>
            <p className="price__value"> {i.cost}</p>
          </li>
        ))}
        <img className="price__img" src={imp} alt="импланты"></img>
        {price_implant.map((i) => (
          <li className="price__list-item" key={i.name}>
            <p calss="price__name">{i.name}</p>
            <p className="price__value"> {i.cost}</p>
          </li>
        ))}
        <img className="price__img" src={other} alt="другое"></img>
        {price_other.map((i) => (
          <li className="price__list-item" key={i.name}>
            <p calss="price__name">{i.name}</p>
            <p className="price__value"> {i.cost}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Price;
