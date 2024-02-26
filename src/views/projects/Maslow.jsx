import "./Modelproject.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import User from "../../components/User/user";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import Download from "../../components/icons/download/download";
import Mail from "../../components/icons/mail/mail";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import db from "../../firebase";
import { useEffect } from "react";

function Maslow() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Topbar url="/portafolio" link="←Proyectos" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">
            <span className="project-number">01 </span>Maslow
          </h2>
          <ProjectInfo
            role="Diseñador gráfico"
            typology="Identidad, Naming"
            technologies="<Empty>"
            tools="Illustrator, Photoshop"
            agency="Proyecto Personal"
            client="Proyecto Personal"
            year="2023"
            link="<Empty>"
          />
          <div className="project__header--intro">
            {/* <span className="h5">Introducción</span> */}
            <p className="h5">
              Amplio proyecto de identidad para esta marca de moda urbana que
              incluyó la creación del nombre, el manual de marca e inclusive una
              pequeña campaña publicitaria.
            </p>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img-container">
            <img src="src/assets/img/jazzing1.jpg" alt="" />
            <span className="project__img-container--caption">
              Logotipo creado a partir de la tipografía Poppins, emulando
              bloques de construcción
            </span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">Concepto</div>
              <div className="h5 project-info__subtitle">
                La música como juego
              </div>
            </div>
            <div className="project-info__description">
              Aprovechando que este es un festival caracterizado por dar cabida
              a un público infantil, me serví de la connotación que tiene en
              inglés el verbo “play”, de "play music” (tocar música). En esta
              lengua, cuando se refieren a tocar o interpretar música, utilizan
              esta expresión, se mantiene la connotación añadida de “jugar” que
              en castellano no existe. Sirviéndome de este concepto y simulando
              el típico juego de construcción, creé las letras del logotipo, y
              así pude expresar el carácter cercano y divertido que se quería
              transmitir. A su vez, esto permitió que estuvieran representadas
              en el logo, las tres vertientes del festival a través de los
              colores; la vertiente pedagógica (representada por el azul), la
              vertiente de festival al uso, donde se programan conciertos
              (representada por el rojo) y la vertiente de las jam sessions
              (representada por el verde). Este código de colores dio pie a
              posteriori a crear tres vías comunicativas en función del tipo de
              evento que se quisiese anunciar.
            </div>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/jazzing2.jpg" alt="" />
            <span className="project__img-container--caption">
              Diferentes versiones del identificador
            </span>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/jazzing3.jpg" alt="" />
            <span className="project__img-container--caption">
              Aplicación de la identidad en un producto de papelería
            </span>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/jazzing4.jpg" alt="" />
            <span className="project__img-container--caption">
              Aplicación de la identidad en un producto de Merchandising
            </span>
          </div>

          {/* BOTONES DE NAVEGACIÓN ENTRE PROYECTOS */}
          {/* <div className="project__nav">
            <Link to="/portafolio" className="h6">
              <span>←Anterior</span>
            </Link>
            <Link to="/maslow" onClick={scrollToTop} className="h6">
              <span>Siguiente→</span>
            </Link>
          </div> */}

          <section className="buttons-section">
            <span className="text-default">¿Has visto suficiente?</span>
            <div className="buttons">
              <Button
                icon={<Download />}
                buttonType="secondary"
                text="CV detallado"
              />
              <Button
                buttonType="primary"
                url="/portafolio"
                icon={<Mail />}
                text="Contactar"
                showIcon="show-icon"
              />
            </div>
            <Link to="/home" className="text-default project__home-link">
              <span className="project__home-link-arrow">←</span>Volver a la
              Home
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Maslow;
