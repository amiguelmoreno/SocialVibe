import { useTranslation } from "react-i18next";

function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <footer>
      <p>{t("footer.descripcion")}</p>
    </footer>
  );
}

export default Footer;
