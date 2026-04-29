import { useTranslation } from "react-i18next";

function Slogan() {
  const [t] = useTranslation("global");
  return (
    <div className="slogan">
      <div className="creating-connections">
        <div className="creating slogan-anim" style={{ animationDelay: "0.65s" }}>
          <p>{t("slogan.primera-parte")}</p>
        </div>
        <div className="connections slogan-anim" style={{ animationDelay: "0.75s" }}>
          <p>{t("slogan.segunda-parte")}</p>
        </div>
      </div>
      <div className="building-communitites">
        <div className="building slogan-anim" style={{ animationDelay: "0.85s" }}>
          <p>{t("slogan.tercera-parte")}</p>
        </div>
        <div className="communitites slogan-anim" style={{ animationDelay: "0.95s" }}>
          <p>{t("slogan.cuarta-parte")}</p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
