import GestionIcon from "../../assets/icons/gestion1.gif";
import ReunionIcon from "../../assets/icons/reunion1.gif";
import ChatIcon from "../../assets/icons/chats1.gif";
import ManagerIcon from "../../assets/icons/manager1.gif";
import EdicionIcon from "../../assets/icons/edicion.gif";
import { useTranslation } from "react-i18next";

function Services() {
  const [t, i18n] = useTranslation("global");
  return (
    <div id="services" className="services section">
      <h2
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
      >
        {t("services.titulo")}
      </h2>

      <div className="container">
        <div
          className="service"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2000"
        >
          <img src={GestionIcon} alt="telefono icono" />
          <div>
            <h3>{t("services.primer-servicio.titulo")}</h3>
            <p>{t("services.primer-servicio.descripcion")}</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img src={ChatIcon} alt="chat icono" />
          <div>
            <h3>{t("services.segundo-servicio.titulo")}</h3>
            <p>{t("services.segundo-servicio.descripcion")}</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img src={EdicionIcon} alt="edicion icono" />
          <div>
            <h3>{t("services.cuarto-servicio.titulo")}</h3>
            <p>{t("services.cuarto-servicio.descripcion")}</p>
            <p>{t("services.cuarto-servicio.descripcion-2")}</p>
          </div>
        </div>
        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img src={ReunionIcon} alt="reunion icono" />
          <div>
            <h3>{t("services.tercer-servicio.titulo")}</h3>
            <p>{t("services.tercer-servicio.descripcion")}</p>
            <p>{t("services.tercer-servicio.descripcion-2")}</p>
          </div>
        </div>

        <div
          className="service"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img src={ManagerIcon} alt="manager icono" />
          <div>
            <h3>{t("services.quinto-servicio.titulo")}</h3>
            <p>{t("services.quinto-servicio.descripcion")}</p>
            <p>{t("services.quinto-servicio.descripcion-2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
