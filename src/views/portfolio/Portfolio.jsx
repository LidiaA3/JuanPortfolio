import Topbar from "../../components/topbar/Topbar";
import Button from "../../components/buttons/button";

function Portfolio() {
  return (
    <>
      <Topbar url="/home" link="Home" />
      <main>
        <section></section>
        <section className="buttons-section">
          <span className="text-default">¿Quieres saber más?</span>
          <Button text="CV detallado" />
          <Button url="/portafolio" text="Portafolio" />
        </section>
      </main>
    </>
  );
}

export default Portfolio;
