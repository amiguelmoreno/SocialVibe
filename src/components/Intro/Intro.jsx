import { useEffect } from "react";

const logo = "/sv-logo1.webp";

function Intro() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const intro = document.querySelector(".intro");
      if (intro) intro.style.transform = "translateY(-100vh)";
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="intro">
      <img className="logo" src={logo} alt="logo Social Vibe" width={445} height={137} />
    </div>
  );
}

export default Intro;
