import Topbar from "../../components/topbar/Topbar";
import Skill from "../../components/skills/Skill";
import Button from "../../components/buttons/button";
import "./Home.scss";
import "../../scss/_images.scss";
import Credits from "../../components/credits/Credits";

export default function Home() {
  return (
    <>
      <Topbar url="/portafolio" link="Portafolio" />
      <main className="home-main">
        <section className="hero-section">
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
              src="/public/floor-mobile-optimized.svg"
              alt="decorative image"
            />
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
        <section className="buttons-section">
          <span className="text-default">¿Quieres saber más?</span>
          <Button text="CV detallado" />
          <Button url="/portafolio" text="Portafolio" />
        </section>
      </main>
    </>
  );
}
