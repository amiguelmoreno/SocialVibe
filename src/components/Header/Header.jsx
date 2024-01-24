import logo from "../../assets/images/sv-logo1.png";
import homeIcon from "../../assets/images/sv.png";
import servicioIcon from "../../assets/icons/servicios-menu.png";
import faqIcon from "../../assets/icons/faq-menu.png";
import contactoIcon from "../../assets/icons/contacto-menu.png";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global");
  return (
    <header>
      <div className="menu-desktop">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="index">
          <ul>
            <a href="#">{t("header.sections.inicio")}</a>
            <a href="#services">{t("header.sections.servicios")}</a>
            <a href="#faq">{t("header.sections.faq")}</a>
            <a href="#contacto">{t("header.sections.contacto")}</a>
          </ul>
        </div>
      </div>
      <div className="menu-mobile">
        <div className="icons">
          <ul>
            <a href="#">
              <img className="not-filter" src={homeIcon} alt="casa icono" />
            </a>
            <a href="#services">
              <img src={servicioIcon} alt="servicios icono" />
            </a>
            <a href="#faq">
              <img src={faqIcon} alt="preguntas y respuestas icono" />
            </a>
            <a href="#contacto">
              <img
                className="contacto"
                src={contactoIcon}
                alt="formulario icono"
              />
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
