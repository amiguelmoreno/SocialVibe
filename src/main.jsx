import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_de from "./translations/de/global.json";
import global_fr from "./translations/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.navigator.language.startsWith("es")
    ? "es"
    : window.navigator.language.startsWith("fr")
    ? "fr"
    : window.navigator.language.startsWith("de")
    ? "de"
    : "en",
  resources: {
    es: { global: global_es },
    fr: { global: global_fr },
    de: { global: global_de },
    en: { global: global_en },
  },
});

console.log(window.navigator.language);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
