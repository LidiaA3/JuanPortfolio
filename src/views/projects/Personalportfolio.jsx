import "./Personalportfolio.scss";
import "./Projects.scss";
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
            tools="Figma, Illustrator, Blender, Vs Code, Git"
            agency="Proyecto personal"
            client="Proyecto personal"
            year="2023"
            link="juantamarit.com"
          />
          <div class="project__header--intro">
            <span class="h5">Introducción</span>
            <p>
              Este proyecto se inició con el objetivo de mostrar mi trabajo. Se
              buscaba la originalidad y no tanto seguir las tendencias, para
              ello me inspiré en las interfaces de las películas de ciencia
              ficción. A continuación, se muestra el proceso que realicé, el
              cual ejemplifica, a grandes rasgos, mi proceso de diseño.
            </p>
          </div>
        </div>
        <div class="project__content">
          {/* <div className="project__image-container">
            <img src="src/assets/img/maslow_logo.jpg" alt="" />
          </div> */}

          <div class="project__content--goals">
            <span class="h5">
              Fase 1<span class="vertical-bar"> | </span>Entendiendo el problema
            </span>
            <p>
              La necesidad inicial consiste en tener una plataforma donde
              exponer y explicar mis proyectos. Parte del problema, sería
              conseguir llamar la atención dentro de un mercado laboral con
              bastante competencia.
            </p>
          </div>

          <div class="project__content--target">
            <span class="h5">
              Fase 2<span class="vertical-bar"> | </span>Elaborando una
              hipótesis o solución
            </span>
            <p>
              La solución es crear una página web a modo de portafolio, buscando
              un toque llamativo y original, lo cual transmite también la
              capacidad de plantear soluciones de diseño particularizadas, que
              puedan o no, seguir las tendencias estéticas del momento.
            </p>
          </div>
          {/* <User /> */}
          <div class="project__content--conclusion">
            <span class="h5">
              Fase 3<span class="vertical-bar"> | </span>Definiendo la
              estructura básica
            </span>
            <p>
              Llega el momento de dar forma al proyecto. Para ello, seguimos los
              siguientes pasos:
            </p>
            <p>
              <br></br>
              <b>3.1 Obtener y organizar el contenido</b>
              <p>
                Es necesario hacer un inventario del contenido. Esto nos
                permitirá empezar definir una AI (Arquitectura de información),
                que iremos construyendo ayudados de diferentes técnicas, como
                por ejemplo la de card sorting.
              </p>
            </p>
            <div class="project__img-container">
              <img src="src/assets/img/content-list.png" alt="" />
              <span class="project__img-container--caption">
                Utilizo las hojas de cálculo para visualizar todo el contenido
                que tendremos que organizar.
              </span>
            </div>
            <p>
              El sitemap, es uno de los resultados de este proceso de
              organización. Muestra la arquitectura que tendrá nuestro sitio.
              Para este caso, nuestro sitemap sería muy sencillo. El core de
              nuestro portafolio se podría resumir en el siguiente esquema:
            </p>
            <div class="project__img-container">
              <img src="src/assets/img/sitemap.png" alt="" />
              <span class="project__img-container--caption">
                Tendremos una página principal, una página, "Portafolio", donde
                se podrán ver categorizados todos los proyectos según la
                disciplina, y una subpágina por cada proyecto en particular.
              </span>
            </div>
            <p>
              Otra herramienta útil en este punto son los userflows, que nos
              permiten seguir puliendo la AI y sentar los cimientos de nuestro
              futuro diseño según unos objetivos predefinidos. Son muy
              importantes dado que nos ponen en la piel del usuario y nos
              permiten crear productos para que tanto este como nosotros, como
              diseñadores o negocios, alcancemos nuestros objetivos de la manera
              más fácil y rápida posible.
            </p>
            <div class="project__img-container">
              <img src="src/assets/img/userflow-bn.png" alt="" />
              <span class="project__img-container--caption">
                Diagrama de flujo que nos permite visualizar o crear el
                recorrido de un usuario desde que accede a nuestra web hasta que
                realiza la acción que buscamos.
              </span>
            </div>
            <b>3.2 Definir el esqueleto de nuestra web</b>
            <br></br>
            Se pasa a definir el "esqueleto" del portafolio una vez estructurado
            el contenido. En este punto se realizan wireframes como base para la
            maquetación de nuestro diseño.
            <div class="project__img-container" id="wireframes-img">
              <img src="src/assets/img/wireframes.jpg" alt="" />
              <span class="project__img-container--caption">
                Esbozos o wireframes iniciales de la estructura de la página
                principal.
              </span>
            </div>
          </div>
          <div class="">
            <span class="h5">Diseñando una solución</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eleifend, urna eu pellentesque blandit, nisl purus facilisis nisi,
              non rutrum nulla velit a orci. Mauris nec tortor at tellus dapibus
              eleifend vel ut velit. Donec vitae risus eget quam mollis
              ultrices. Vestibulum ac risus risus.
            </p>
          </div>
          <div class="">
            <span class="h5">Fase de desarrollo y comprobación</span>
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
