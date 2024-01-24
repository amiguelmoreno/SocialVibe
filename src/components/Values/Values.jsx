import FlexLogo from "../../assets/icons/flexibilidad1.gif";
import ComLogo from "../../assets/icons/compromiso1.gif";
import PrivLogo from "../../assets/icons/privacidad1.gif";
import TransLogo from "../../assets/icons/transparencia1.gif";
import ConfLogo from "../../assets/icons/confianza1.gif";
import { useTranslation } from "react-i18next";

function Values() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="values-section">
      <h2
        className="h2-prueba"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2000"
      >
        {t("valores.titulo")}
      </h2>
      <p data-aos="fade-up" data-aos-once="true">
        {t("valores.introduction")}
      </p>

      <div className="logos">
        <div
          className="value"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={ConfLogo} alt="Confianza Logo" />
          <h3>{t("valores.confianza")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1600"
          data-aos-once="true"
        >
          <img src={ComLogo} alt="Compromiso logo" />
          <h3>{t("valores.compromiso")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
          data-aos-once="true"
        >
          <img src={FlexLogo} alt="Flexibilidad logo" />
          <h3>{t("valores.flexibilidad")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          <img src={PrivLogo} alt="Privacidad logo" />
          <h3>{t("valores.privacidad")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1900"
          data-aos-once="true"
        >
          <img src={TransLogo} alt="Transparencia logo" />
          <h3>{t("valores.transparencia")}</h3>
        </div>
      </div>
    </div>
  );
}

export default Values;
