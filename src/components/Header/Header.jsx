import logo from "../../assets/images/sv-logo1.webp";
import servicioIcon from "../../assets/icons/servicios-menu.webp";
import faqIcon from "../../assets/icons/faq-menu.webp";
import contactoIcon from "../../assets/icons/contacto-menu.webp";

const homeIcon = "/sv.webp";
import { useTranslation } from "react-i18next";

function Header() {
  const [t] = useTranslation("global");
  return (
    <header>
      <div className="menu-desktop">
        <div className="logo">
          <img src={logo} alt="logo Social Vibe" width={445} height={137} />
        </div>
        <div className="index">
          <ul>
            <li><a href="#">{t("header.sections.inicio")}</a></li>
            <li><a href="#services">{t("header.sections.servicios")}</a></li>
            <li><a href="#faq">{t("header.sections.faq")}</a></li>
            <li><a href="#contacto">{t("header.sections.contacto")}</a></li>
          </ul>
        </div>
      </div>
      <div className="menu-mobile">
        <div className="icons">
          <ul>
            <li>
              <a href="#">
                <img
                  className="not-filter"
                  src={homeIcon}
                  alt="inicio"
                  width={59}
                  height={59}
                  fetchPriority="high"
                />
              </a>
            </li>
            <li>
              <a href="#services">
                <img src={servicioIcon} alt="servicios" width={45} height={45} />
              </a>
            </li>
            <li>
              <a href="#faq">
                <img src={faqIcon} alt="preguntas y respuestas" width={45} height={45} />
              </a>
            </li>
            <li>
              <a href="#contacto">
                <img
                  className="contacto"
                  src={contactoIcon}
                  alt="formulario de contacto"
                  width={45}
                  height={45}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
