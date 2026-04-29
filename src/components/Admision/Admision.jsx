import DatosWebm from "../../assets/icons/datos1.webm";
import DatosMp4 from "../../assets/icons/datos1.mp4";
import ReunionWebm from "../../assets/icons/reunion-admision1.webm";
import ReunionMp4 from "../../assets/icons/reunion-admision1.mp4";
import FamiliaWebm from "../../assets/icons/familia1.webm";
import FamiliaMp4 from "../../assets/icons/familia1.mp4";
import FlechaImg from "../../assets/images/flecha-admision.webp";
import GifVideo from "../GifVideo/GifVideo";

function Admision() {
  return (
    <div className="admision">
      <h2
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        ¿Cómo trabajo con vosotros?
      </h2>
      <img className="flecha1" src={FlechaImg} alt="flecha" width={512} height={512} />
      <img className="flecha2" src={FlechaImg} alt="flecha" width={512} height={512} />
      <div className="pasos">
        <div
          className="paso paso1"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <GifVideo webm={DatosWebm} mp4={DatosMp4} alt="carta icono" width={119} height={119} />
          <h3>Envíanos tus datos</h3>
          <p>
            Rellena el formulario pulsando{" "}
            <a href="#contacto">aquí</a>. Una vez tengamos tu
            información de contacto, sabremos que estás interesad@ y
            te responderemos lo más rápido posible para organizar
            una reunión.
          </p>
        </div>
        <div
          className="paso paso2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <GifVideo webm={ReunionWebm} mp4={ReunionMp4} alt="chat icono" width={119} height={119} />
          <h3>Reunión</h3>
          <p>
            Organizaremos un día y una hora que a ambas partes les
            venga bien para tener una reunión por videollamada con
            el objetivo de informarte en detalle, aclarar dudas y
            charlar un rato para conocernos.
          </p>
          <p>
            Para nosotros la confianza y cercanía son valores
            esenciales. En la reunión también decidirás si quieres
            seguir adelante y firmar el contrato del que también
            hablaremos
          </p>
        </div>
        <div
          className="paso paso3"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <GifVideo webm={FamiliaWebm} mp4={FamiliaMp4} alt="personas icono" width={119} height={119} />
          <h3>Ya formas parte de nuestra familia</h3>
          <p>
            Ante todo, gracias por la confianza, ya puedes
            relajarte, a partir de ahora nosotros nos encargamos de
            la parte aburrida. Ve y dile a todo el mundo que eres
            una modelo profesional, tienes a una agencia de
            marketing trabajando para ti, ahora estás a otro nivel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admision;
