import { useTranslation } from "react-i18next";

function Introduction() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="introduction">
            <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                {t("introduction.h1")}
            </h1>

            <div
                className="start-line"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                &nbsp;
            </div>
            <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                {t("introduction.primer-parrafo")}
            </p>
            <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                {t("introduction.segundo-parrafo")}
            </p>
            <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                {t("introduction.tercer-parrafo")}
            </p>
            <div
                className="end-line"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                &nbsp;
            </div>
        </div>
    );
}

export default Introduction;
