import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
        AOS.init({
            // opciones de configuración de AOS aquí
        });
    }, []);

    return (
        <div className="App">
            {/*  <div className="construction">
                <h1>Página en construcción</h1>
                <p>Vuelve más tarde 😉</p>
            </div> */}
            <Intro></Intro>
            <Header></Header>
            <Slogan></Slogan>
            <Introduction></Introduction>
            <Services></Services>
            <Values></Values>
            <Ocupamos></Ocupamos>
            <Admision></Admision>
            <FaqSection></FaqSection>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
}

export default App;
