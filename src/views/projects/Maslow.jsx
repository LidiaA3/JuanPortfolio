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
            <img src="src/assets/img/maslow/maslow1.jpg" alt="" />
            <span className="project__img-container--caption">
              Identificador completo, con un isotipo que puede funcionar por
              separado
            </span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">El proyecto</div>
              <div className="h5 project-info__subtitle">
                Una marca con trasfondo social
              </div>
            </div>
            <div className="project-info__description">
              Este proyecto, ubicado dentro de la moda urbana, no es una marca
              de camisetas al uso. Es más bien un soporte de expresión para
              artistas, un soporte en el que reivindicar sus principios, y a su
              vez, por su puesto, una medio de expresión también, a través de la
              identificación, para un determinado grupo de jóvenes con unas
              inquietudes y valores determinados.
            </div>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/maslow/maslow2.jpg" alt="" />
            <span className="project__img-container--caption">
              Diferentes versiones del identificador
            </span>
          </div>
          <div className="project-info">
            <div className="project-info__titles">
              <div className="h4 project-info__title">El público</div>
              <div className="h5 project-info__subtitle">
                La música como juego
              </div>
            </div>
            <div className="project-info__description">
              Se trata de jóvenes urbanitas, aunque, muy conectados con la
              naturaleza, y que reivindican el retorno a este vínculo natural.
              Esta reivindicación, va de la mano de su necesidad por una
              sociedad que frene un poco el ritmo, y que vuelva a tener el
              bienestar emocional entre sus prioridades. De ahí el juego de
              palabras utilizando el nombre del célebre psicólogo Abraham
              Maslow, que a su vez contiene dentro del propio nombre las letras
              del adjetivo "lento", ("slow") en inglés.
            </div>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/maslow/maslow3.jpg" alt="" />
            <span className="project__img-container--caption">
              Aplicación de la identidad en un producto de papelería
            </span>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/maslow/maslow4.jpg" alt="" />
            <span className="project__img-container--caption">
              Aplicación de la identidad en un producto de Merchandising
            </span>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/maslow/maslow5.jpg" alt="" />
            <span className="project__img-container--caption">
              Aplicación de la identidad en un producto de Merchandising
            </span>
          </div>
          <div className="project__img-container">
            <img src="src/assets/img/maslow/maslow6.jpg" alt="" />
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
