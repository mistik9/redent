import logo from '../../image/logoza-ru-hd.svg';
import './Header.css';
import call from '../../image/icons8-whatsapp-32.svg';
import whatsapp from '../../image/icons8-whatsapp-48.svg';

/**
 * Универсальный компонент логотипа (можно использовать и в футере)
 */
export function AppLogo({ className = '' }) {
  return (
    <a href="#" className={`app-logo${className ? ' ' + className : ''}`}>
      <img className="app-logo__img" src={logo} alt="Логотип" />
    </a>
  );
}

/**
 * Универсальный компонент списка контактов (можно использовать и в футере)
 */
export function AppContacts({ className = '' }) {
  return (
    <ul className={`app-contacts${className ? ' ' + className : ''}`}>
      <li className="app-contacts__item">
        <a className="app-contacts__link" href="https://wa.me/79620583310?text=" target="_blank" rel="noreferrer">
          <img className="app-contacts__icon app-contacts__icon--whatsapp" src={whatsapp} alt="иконка whatsapp" />
          +7(962)058-33-10
        </a>
      </li>
      <li className="app-contacts__item">
        <a className="app-contacts__link" href="tel:+73812633310" target="_blank" rel="noreferrer">
          <img className="app-contacts__icon app-contacts__icon--call" src={call} alt="иконка трубки" />
          тел. 63-33-10
        </a>
      </li>
            <li className="app-contacts__item">
          <a className="app-contacts__link" href="mailto:info@myredent.ru">info@myredent.ru</a>
   
       
      </li>
    </ul>
  );
}

/**
 * Универсальный компонент расписания (можно использовать и в футере)
 */
export function AppSchedule({ className = '' }) {
  return (
    <ul className={`app-schedule${className ? ' ' + className : ''}`}>
      <li className="app-schedule__item">г.Омск ул.Пригородная 23/2</li>
      <li className="app-schedule__item">пн-пт 10:00 - 19:00</li>
      <li className="app-schedule__item">сб 10:00 - 17:00</li>
    </ul>
  );
}



/**
 * Универсальная кнопка (можно использовать и в футере)
 */
export function AppButton({ children, className = '', ...props }) {
  return (
    <a {...props} className={`app-btn${className ? ' ' + className : ''}`}>
      {children}
    </a>
  );
}

/**
 * Header-компонент
 */
function Header() {
  return (
    <header className="app-header">
      <AppLogo />
      <AppContacts />
      <AppSchedule />
      <AppButton href="tel:+73812633310">Запись на прием</AppButton>
    </header>
  );
}

export default Header;
