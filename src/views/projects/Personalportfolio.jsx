import "./Personalportfolio.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import User from "../../components/User/user";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import Download from "../../components/icons/download/download";
import Mail from "../../components/icons/mail/mail";

function Personalportfolio() {
  return (
    <>
      <Topbar url="/portafolio" link="←Archivo" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">Portafolio personal</h2>
          <ProjectInfo
            role="Diseñador UI, Desarrollador"
            typology="Web"
            technologies="React.js"
            tools="Vs Code"
            agency="Proyecto personal"
            client="Proyecto personal"
            year="2023"
            link="juantamarit.com"
          />
          <div class="project__header--intro">
            <span class="h5">Introducción</span>
            <p>
              Este portafolio se diseñó con el objetivo de mostrar mi trabajo
              como diseñador y desarrollador. A nivel estético se buscó la
              originalidad esquivando las tendencias, y con la diferenciación
              como objetivo, y para ello me inspiré ligeramente en la ciencia
              ficción y el retrofuturismo. No obstante, el objetivo principal
              fue propiciar una buena usabilidad y experiencia al usuario. A
              continuación, se muestra el proceso que ha dado lugar a esta
              interfaz, el cual ejemplifica, a grandes rasgos, mi proceso de
              diseño en general, con el que abordaría cualquier proyecto.
            </p>
          </div>
        </div>
        <div class="project__content">
          <div className="project__image-container">
            <img src="src/assets/img/maslow_logo.jpg" alt="" />
          </div>

          <div class="project__content--goals">
            <span class="h5">Objetivos y requisitos</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet leo sed arcu rhoncus commodo. Donec ac semper libero, sit
              amet vestibulum dui. Quisque euismod sem at ligula suscipit, eget
              hendrerit ipsum convallis. Etiam non interdum ex. Maecenas sed
              velit ut enim tempus ultricies sed id elit.
            </p>
          </div>

          <div class="project__content--target">
            <span class="h5">Público objetivo</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              augue luctus, rhoncus urna sed, ultrices mi. Ut pulvinar convallis
              eros a sagittis. Suspendisse quis dui vitae ante tristique
              tincidunt vel at massa. Ut pretium aliquet consectetur. Quisque a
              scelerisque mauris. Phasellus tristique felis ut elit iaculis, vel
              rhoncus tellus bibendum.
            </p>
          </div>
          <User />
          <div class="project__content--conclusion">
            <span class="h5">Conclusiones</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eleifend, urna eu pellentesque blandit, nisl purus facilisis nisi,
              non rutrum nulla velit a orci. Mauris nec tortor at tellus dapibus
              eleifend vel ut velit. Donec vitae risus eget quam mollis
              ultrices. Vestibulum ac risus risus.
            </p>
          </div>
          <div class="project__nav">
            <Link className="h6">
              <span>←Anterior</span>
            </Link>
            <Link className="h6">
              <span>Siguiente→</span>
            </Link>
          </div>
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

export default Personalportfolio;
