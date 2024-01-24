import { useTranslation } from "react-i18next";

function Slogan() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="slogan">
      <div className="creating-connections">
        <div
          className="creating"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p>{t("slogan.primera-parte")}</p>
        </div>
        <div
          className="connections"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p>{t("slogan.segunda-parte")}</p>
        </div>
      </div>
      <div className="building-communitites">
        <div
          className="building"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p>{t("slogan.tercera-parte")}</p>
        </div>
        <div
          className="communitites"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p>{t("slogan.cuarta-parte")}</p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
