import DatosIcon from "../../assets/icons/datos1.gif";
import ReunionIcon from "../../assets/icons/reunion-admision1.gif";
import FamiliaIcon from "../../assets/icons/familia1.gif";
import FlechaImg from "../../assets/images/flecha-admision.png";

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
            <img className="flecha1" src={FlechaImg} alt="flecha" />
            <img className="flecha2" src={FlechaImg} alt="flecha" />
            <div className="pasos">
                <div
                    className="paso paso1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >
                    <img src={DatosIcon} alt="carta icono" />
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
                    <img src={ReunionIcon} alt="chat icono" />
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
                    <img src={FamiliaIcon} alt="personas icono" />
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
