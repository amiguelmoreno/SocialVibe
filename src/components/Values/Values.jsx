import FlexWebm from "../../assets/icons/flexibilidad1.webm";
import FlexMp4 from "../../assets/icons/flexibilidad1.mp4";
import ComWebm from "../../assets/icons/compromiso1.webm";
import ComMp4 from "../../assets/icons/compromiso1.mp4";
import PrivWebm from "../../assets/icons/privacidad1.webm";
import PrivMp4 from "../../assets/icons/privacidad1.mp4";
import TransWebm from "../../assets/icons/transparencia1.webm";
import TransMp4 from "../../assets/icons/transparencia1.mp4";
import ConfWebm from "../../assets/icons/confianza1.webm";
import ConfMp4 from "../../assets/icons/confianza1.mp4";
import GifVideo from "../GifVideo/GifVideo";
import { useTranslation } from "react-i18next";

function Values() {
  const [t] = useTranslation("global");
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
          <GifVideo webm={ConfWebm} mp4={ConfMp4} alt="Confianza Logo" width={119} height={119} />
          <h3>{t("valores.confianza")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1600"
          data-aos-once="true"
        >
          <GifVideo webm={ComWebm} mp4={ComMp4} alt="Compromiso logo" width={119} height={119} />
          <h3>{t("valores.compromiso")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
          data-aos-once="true"
        >
          <GifVideo webm={FlexWebm} mp4={FlexMp4} alt="Flexibilidad logo" width={119} height={119} />
          <h3>{t("valores.flexibilidad")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          <GifVideo webm={PrivWebm} mp4={PrivMp4} alt="Privacidad logo" width={119} height={119} />
          <h3>{t("valores.privacidad")}</h3>
        </div>
        <div
          className="value"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1900"
          data-aos-once="true"
        >
          <GifVideo webm={TransWebm} mp4={TransMp4} alt="Transparencia logo" width={119} height={119} />
          <h3>{t("valores.transparencia")}</h3>
        </div>
      </div>
    </div>
  );
}

export default Values;
