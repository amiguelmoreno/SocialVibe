import { useTranslation } from "react-i18next";
import { useState } from "react";
import Faq from "./Faq";

function FaqSection() {
  const [t, i18n] = useTranslation("global");
  const [faqs, setfaqs] = useState([
    {
      question: t("faq.preguntas.pregunta-1"),
      answer: t("faq.preguntas.respuesta-1"),
      open: true,
    },
    {
      question: t("faq.preguntas.pregunta-2"),
      answer: t("faq.preguntas.respuesta-2"),
      open: false,
    },
    {
      question: t("faq.preguntas.pregunta-3"),
      answer: t("faq.preguntas.respuesta-3"),
      open: false,
    },
    {
      question: t("faq.preguntas.pregunta-4"),
      answer: t("faq.preguntas.respuesta-4"),
      open: false,
    },
    {
      question: t("faq.preguntas.pregunta-5"),
      answer: t("faq.preguntas.respuesta-5"),
      open: false,
    },
    {
      question: t("faq.preguntas.pregunta-6"),
      answer: t("faq.preguntas.respuesta-6"),
      open: false,
    },
    {
      question: t("faq.preguntas.pregunta-7"),
      answer: t("faq.preguntas.respuesta-7"),
      open: false,
    },
    {
      question: t("faq.preguntas.pregunta-8"),
      answer: t("faq.preguntas.respuesta-8"),
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div id="faq" className="faqs section">
      <h2 data-aos="fade-up" data-aos-once="true">
        {t("faq.titulo")}
      </h2>
      <p>{t("faq.introduction")}</p>
      <div>
        {faqs.map((faq, i) => (
          <Faq faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
