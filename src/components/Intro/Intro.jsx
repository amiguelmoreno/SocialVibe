import { useEffect } from "react";
import logo from "../../assets/images/sv-logo1.png";

function Intro() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      let intro = document.querySelector(".intro");
      intro.style.top = "-100vh";
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="intro">
      <img className="logo" src={logo} alt="logo Social Vibe" />
    </div>
  );
}

export default Intro;
