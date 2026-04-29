import { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Slogan from "./components/Slogan/Slogan";
import Introduction from "./components/Introduction/Introduction";
import "./css/style.css";
const Services = lazy(() => import("./components/Services/Services"));
const Values = lazy(() => import("./components/Values/Values"));
const Ocupamos = lazy(() => import("./components/Ocupamos/Ocupamos"));
const Admision = lazy(() => import("./components/Admision/Admision"));
const FaqSection = lazy(() => import("./components/FaqSection/FaqSection"));
const Form = lazy(() => import("./components/Form/Form"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  useEffect(() => {
    // Remove static pre-rendered intro once React is mounted
    const pre = document.getElementById("prerender-intro");
    if (pre) pre.remove();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("aos-pending");
            entry.target.classList.add("aos-animate");
            io.unobserve(entry.target);
          } else {
            // Off-screen: mark invisible so it can animate in when scrolled to
            entry.target.classList.add("aos-pending");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observeTree = (root) => {
      if (root.nodeType !== 1) return;
      if (root.hasAttribute("data-aos")) io.observe(root);
      root.querySelectorAll("[data-aos]").forEach((el) => io.observe(el));
    };

    observeTree(document.body);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach(({ addedNodes }) =>
        addedNodes.forEach((node) => observeTree(node))
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <div className="App">
      <Intro />
      <Header />
      <main>
        <Slogan />
        <Introduction />
        <Suspense>
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
