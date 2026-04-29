import FlechaWebm from "../../assets/icons/flecha.webm";
import FlechaMp4 from "../../assets/icons/flecha.mp4";
import GifVideo from "../GifVideo/GifVideo";
import { useTranslation } from "react-i18next";

function Form() {
  const [t] = useTranslation("global");
  return (
    <div id="contacto" className="form-section section">
      <div className="call" data-aos="fade-up" data-aos-once="true">
        <h3>
          {t("formulario.h3-1")} <br />
          {t("formulario.h3-2")}
        </h3>
        <GifVideo webm={FlechaWebm} mp4={FlechaMp4} alt="" width={89} height={89} />
      </div>

      <div className="form" data-aos="fade-up" data-aos-once="true">
        <form
          action="https://formsubmit.co/socialvibe.info@gmail.com"
          method="POST"
        >
          <div
            className="form-part"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <input
              name="name"
              type="text"
              id="name"
              placeholder={t("formulario.nombre")}
              required
            />
          </div>
          <div
            className="form-part"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <input
              name="apellido"
              type="text"
              id="apellido"
              placeholder={t("formulario.apellidos")}
              required
            />
          </div>
          <div
            className="form-part"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <input
              name="correo"
              type="email"
              id="email"
              placeholder={t("formulario.correo")}
              required
            />
          </div>
          <div
            className="form-part"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <input
              name="telefono"
              type="tel"
              id="tel"
              placeholder={t("formulario.telefono")}
              required
            />
          </div>
          <div
            className="form-part"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <textarea
              id="mensaje"
              name="mensaje"
              rows="3"
              placeholder={t("formulario.mensaje")}
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://socialvibeagency.netlify.app/thanks.html"
          />
          <input type="hidden" name="_captcha" value="true" />
          <button type="submit">{t("formulario.enviar")}</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
