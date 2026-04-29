import GestionWebm from "../../assets/icons/gestion1.webm";
import GestionMp4 from "../../assets/icons/gestion1.mp4";
import ReunionWebm from "../../assets/icons/reunion1.webm";
import ReunionMp4 from "../../assets/icons/reunion1.mp4";
import ChatWebm from "../../assets/icons/chats1.webm";
import ChatMp4 from "../../assets/icons/chats1.mp4";
import ManagerWebm from "../../assets/icons/manager1.webm";
import ManagerMp4 from "../../assets/icons/manager1.mp4";
import EdicionWebm from "../../assets/icons/edicion.webm";
import EdicionMp4 from "../../assets/icons/edicion.mp4";
import GifVideo from "../GifVideo/GifVideo";
import { useTranslation } from "react-i18next";

function Services() {
  const [t] = useTranslation("global");
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
          <GifVideo webm={GestionWebm} mp4={GestionMp4} alt="telefono icono" width={148} height={148} />
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
          <GifVideo webm={ChatWebm} mp4={ChatMp4} alt="chat icono" width={148} height={148} />
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
          <GifVideo webm={EdicionWebm} mp4={EdicionMp4} alt="edicion icono" width={148} height={148} />
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
          <GifVideo webm={ReunionWebm} mp4={ReunionMp4} alt="reunion icono" width={148} height={148} />
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
          <GifVideo webm={ManagerWebm} mp4={ManagerMp4} alt="manager icono" width={148} height={148} />
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
