import "./Maslow.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import User from "../../components/User/user";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import Download from "../../components/icons/download/download";
import Mail from "../../components/icons/mail/mail";

function Maslow() {
  return (
    <>
      <Topbar url="/portafolio" link="←Archivo" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">Website para Maslow</h2>
          <ProjectInfo
            role="Diseñador gráfico, UI, Desarrollador"
            typology="Web, Identidad Corporativa"
            technologies="Wordpress, Php"
            tools="Figma, Vs Code, Mamp, Git"
            agency="Profesional independiente"
            client="Maslow"
            year="2023"
            link="No disponible"
          />
          <div class="project__header--intro">
            <span class="h5">Introducción</span>
            <p>
              Este proyecto consistió en la realización de una plataforma a
              medio camino entre blog divulgativo y comercio electrónico, para
              la marca de moda urbana Maslow, de la cual también se realizó la
              identidad corporativa. Por una serie de condicionantes temporales
              y económicos, los esfuerzos se concentraron en realizar un buen
              diseño de identidad, de interfaz web y en el correcto
              funcionamiento de esta para que fuese funcional y autogestionable
              por el cliente, para lo cual creamos una plantilla de wordpress
              desde cero.
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

export default Maslow;
