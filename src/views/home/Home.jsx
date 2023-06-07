import Topbar from "../../components/topbar/Topbar";
import Skill from "../../components/skills/Skill";
import Button from "../../components/buttons/button";
import "./Home.scss";
import "../../scss/_images.scss";
import Credits from "../../components/credits/Credits";
import Cube from "../../components/Cube/Cube";
import Sphere from "../../components/Sphere/Sphere";
export default function Home() {
  return (
    <>
      <Topbar url="/portafolio" link="Portafolio" />
      <main className="home-main">
        <section className="hero-section">
          {/* <Cube /> */}
          {/* <Cubeb /> */}
          <Cube />
          <Sphere />
          <div className="hero-section__main-text">
            <span className="h1">Juan Tamarit</span>
            <div>
              <h2 className="text-default hero-section__profession-text">
                diseñador UX/UI
              </h2>
              <h2 className="text-default hero-section__profession-text">
                diseñador gráfico
              </h2>
              <h2 className="text-default hero-section__profession-text">
                desarrollador web
              </h2>
            </div>
          </div>
          <Credits />
          <div className="hero-section__floor-container">
            <img
              className="hero-section__floor"
              src="/floor-mobile-optimized.svg"
              alt="decorative image"
            />
          </div>
        </section>
        <section className="content-section">
          <section className="bio-section">
            <p>
              Soy una persona <b>apasionada</b>, amante del <b>aprendizaje</b> y
              del crecimiento constante. Mi historial académico es bastante
              singular, me formé como pianista de jazz antes de meterme de lleno
              en el diseño gráfico, el diseño UX/UI y el desarrollo.
            </p>
            <br />
            <p>
              Este bagaje me ha permitido obtener valiosas habilidades como:
              capacidad de trabajo en <b>equipo</b>, capacidad de <b>escucha</b>
              , <b>creatividad</b>, <b>proactividad</b>, o{" "}
              <b>pensamiento lateral</b>, entre otras.
            </p>
            <br />
            <p>
              Como diseñador y desarrollador, estoy muy interesado en la{" "}
              <b>usabilidad</b>, puesto que es el factor diferenciador entre un
              diseño “bonito” y un diseño realmente valioso.
            </p>
            <br />
            <p>
              Y en definitiva, es a esto a lo que quiero aspirar, a aportar{" "}
              <b>valor</b>. Para ello, estoy deseoso de poder trabajar con un
              buen equipo de creativos y/o desarrolladores, así que espero que
              te guste mi trabajo y encajar en tu equipo.
            </p>
            <br />
            <p>¡Gracias por tu tiempo!</p>
          </section>
          <section className="skills-section">
            <div className="skills-section__knowledges-container">
              <span className="h3">Conocimientos</span>
              <div className="skills-section__skills-group--knowledges">
                <Skill type="straight" text="Ejemplo texto" />
                <Skill type="rounded" text="texto corto" />
                <Skill type="straight" text="Ejemplo texto largo" />
                <Skill type="rounded" text="texto corto" />
              </div>
            </div>
            <div className="skills-section__tools-container">
              <span className="h3">Herramientas</span>
              <div className="skills-section__skills-group--tools">
                <Skill type="straight" text="Ejemplo texto largo" />
                <Skill type="rounded" text="texto corto" />
                <Skill type="straight" text="Bla Bla" />
                <Skill type="rounded" text="texto corto pero no" />
              </div>
            </div>
            <div className="skills-section__technologies-container">
              <span className="h3">Tecnologías</span>
              <div className="skills-section__skills-group--Technologies">
                <Skill type="straight" text="Ejemplo" />
                <Skill type="rounded" text="texto corto" />
                <Skill type="straight" text="Ejemplo bla bla" />
                <Skill type="rounded" text="texto corto pero no" />
              </div>
            </div>
          </section>
          <section className="buttons-section">
            <span className="text-default">¿Quieres saber más?</span>
            <Button text="CV detallado" />
            <Button url="/portafolio" text="Portafolio" />
          </section>
        </section>
      </main>
    </>
  );
}
