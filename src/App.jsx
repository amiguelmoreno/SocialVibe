import { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Slogan from "./components/Slogan/Slogan";
import "./css/style.css";

const Introduction = lazy(() => import("./components/Introduction/Introduction"));
const Services = lazy(() => import("./components/Services/Services"));
const Values = lazy(() => import("./components/Values/Values"));
const Ocupamos = lazy(() => import("./components/Ocupamos/Ocupamos"));
const Admision = lazy(() => import("./components/Admision/Admision"));
const FaqSection = lazy(() => import("./components/FaqSection/FaqSection"));
const Form = lazy(() => import("./components/Form/Form"));
const Footer = lazy(() => import("./components/Footer/Footer"));

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
        <Suspense>
          <Introduction />
          <Services />
          <Values />
          <Ocupamos />
          <Admision />
          <FaqSection />
          <Form />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
