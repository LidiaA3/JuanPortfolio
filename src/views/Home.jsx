import Topbar from "../components/topbar/Topbar";
import Skill from "../components/skills/Skill";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <section className="hero-section">
          <div className="hero-section__main-text">
            <span className="h1">Juan Tamarit</span>
            <span className="text-default hero-section__profession-text">
              diseñador UX/UI
              <br />
              diseñador gráfico
              <br />
              desarrollador web
            </span>
            <span className="hero-section__credits text-small">
              Diseño y desarrollo: <br />
              Juan Tamarit
              <br />
              Framework:
              <br />
              React.js
            </span>
          </div>
        </section>
        <section className="bio-section">
          <p>
            Soy una persona apasionada, amante del aprendizaje y del crecimiento
            constante. Mi historial académico es bastante singular, me formé
            como pianista de jazz antes de meterme de lleno en el diseño
            gráfico, el diseño UX/UI y el desarrollo. Este bagaje me ha
            permitido obtener valiosas habilidades como: capacidad de trabajo en
            equipo, capacidad de escucha, creatividad, proactividad, o
            pensamiento lateral, entre otras. Como diseñador y desarrollador,
            estoy muy interesado en la usabilidad, puesto que es el factor
            diferenciador entre un diseño “bonito” y un diseño realmente
            valioso. Y en definitiva, es a esto a lo que quiero aspirar, a
            aportar valor. Para ello, estoy deseoso de poder trabajar con un
            buen equipo de creativos y/o desarrolladores, así que espero que te
            guste mi trabajo y encajar en tu equipo. ¡Gracias por tu tiempo!
          </p>
        </section>
        <section className="skills-section">
          <div className="skills-section__knowledges-container">
            <span className="h3">Conocimientos</span>
            <div className="skills-section__skills-group--knowledge">
              <Skill type="straight" text="Ejemplo texto largo" />
              <Skill type="rounded" text="texto corto" />
              <Skill type="straight" text="Ejemplo texto largo" />
              <Skill type="rounded" text="texto corto" />
            </div>
          </div>
          <div className="skills-section__tools-container">
            <span className="h3">Herramientas</span>
            <div className="skills-section__skills-group--knowledge">
              <Skill type="straight" text="Ejemplo texto largo" />
              <Skill type="rounded" text="texto corto" />
              <Skill type="straight" text="Ejemplo texto largo" />
              <Skill type="rounded" text="texto corto" />
            </div>
          </div>
          <div className="skills-section__technologies-container">
            <span className="h3">Tecnologías</span>
            <div className="skills-section__skills-group--knowledge">
              <Skill type="straight" text="Ejemplo texto largo" />
              <Skill type="rounded" text="texto corto" />
              <Skill type="straight" text="Ejemplo texto largo" />
              <Skill type="rounded" text="texto corto" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
