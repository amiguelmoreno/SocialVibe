import { useEffect } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Slogan from "./components/Slogan/Slogan";
import Introduction from "./components/Introduction/Introduction";
import Services from "./components/Services/Services";
import Values from "./components/Values/Values";
import Ocupamos from "./components/Ocupamos/Ocupamos";
import Admision from "./components/Admision/Admision";
import FaqSection from "./components/FaqSection/FaqSection";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./css/style.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Intro />
      <Header />
      <main>
        <Slogan />
        <Introduction />
        <Services />
        <Values />
        <Ocupamos />
        <Admision />
        <FaqSection />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
