import { useEffect } from "react";
import logo from "../../assets/images/sv-logo1.webp";

function Intro() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const intro = document.querySelector(".intro");
      if (intro) intro.style.transform = "translateY(-100vh)";
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="intro">
      <img className="logo" src={logo} alt="logo Social Vibe" width={500} height={154} />
    </div>
  );
}

export default Intro;
