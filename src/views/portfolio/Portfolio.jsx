import Topbar from "../../components/topbar/Topbar";
import Button from "../../components/buttons/button";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <>
      <Topbar url="/home" link="Home" />
      <main className="portfolio-main">
        <h2 className="h2">Portafolio</h2>

        <Dropdown />
        <section></section>
        <section className="buttons-section">
          <span className="text-default">¿Quieres saber más?</span>
          <Button text="CV detallado" />
          <Button url="/portafolio" text="Portafolio" />
        </section>
      </main>
      <footer>
        <div className="portfolio__floor-container">
          <img
            className="portfolio__floor"
            src="/public/floor-mobile-optimized.svg"
            alt="decorative image"
          />
        </div>
      </footer>
    </>
  );
}

export default Portfolio;
