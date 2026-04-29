import MujerOcupada from "../../assets/images/mujer-ocupada.webp";
import { useTranslation } from "react-i18next";

function Ocupamos() {
  const [t] = useTranslation("global");
  return (
    <div className="ocupamos">
      <h2
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {t("ocupamos.titulo")}
      </h2>
      <div className="content">
        <div className="parrafos">
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {t("ocupamos.primer-parrafo")}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {t("ocupamos.segundo-parrafo")}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            {t("ocupamos.tercer-parrafo")}
          </p>
        </div>
        <img
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="2000"
          src={MujerOcupada}
          alt="mujer trabajando"
          width={626}
          height={431}
        />
      </div>
    </div>
  );
}

export default Ocupamos;
