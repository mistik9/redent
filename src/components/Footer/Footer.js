import "./Footer.css";
import { AppButton, AppContacts, AppLogo, AppSchedule } from "../Header/Header";

function Footer() {
  return (
    <footer className="footer" id="footer">
          <AppLogo />
      <AppContacts />
      <AppSchedule />
      <AppButton href="tel:+73812633310">Запись на прием</AppButton>
    </footer>
  )
}
export default Footer 