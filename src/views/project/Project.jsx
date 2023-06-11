import "./Project.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";

function Project() {
  return (
    <>
      <Topbar url="/portafolio" link="Portafolio" />
      <main className="project-main">
        <h2 className="h2">Website para Maslow</h2>
        <ProjectInfo />
        <div class="project__description">
          <div class="project__description--intro">
            <span class="h5">Introducción</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vehicula varius convallis. Integer vitae turpis quam. Vestibulum
              condimentum, ipsum sed lacinia fermentum, est eros consequat urna,
              sed congue libero enim sed odio. Maecenas accumsan, velit id
              hendrerit bibendum, erat diam eleifend elit, eu convallis dui
              lacus a ante.
            </p>
          </div>

          <div className="project__image-container">
            <img src="src/assets/img/maslow_logo.jpg" alt="" />
          </div>

          <div class="project__description--goals">
            <span class="h5">Objetivos y requisitos</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet leo sed arcu rhoncus commodo. Donec ac semper libero, sit
              amet vestibulum dui. Quisque euismod sem at ligula suscipit, eget
              hendrerit ipsum convallis. Etiam non interdum ex. Maecenas sed
              velit ut enim tempus ultricies sed id elit.
            </p>
          </div>

          <div class="project__description--target">
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

          <div class="project__description--conclusion">
            <span class="h5">Conclusiones</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eleifend, urna eu pellentesque blandit, nisl purus facilisis nisi,
              non rutrum nulla velit a orci. Mauris nec tortor at tellus dapibus
              eleifend vel ut velit. Donec vitae risus eget quam mollis
              ultrices. Vestibulum ac risus risus.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
