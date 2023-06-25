import Topbar from "../../components/topbar/Topbar";
import Button from "../../components/buttons/button";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Portfolio.scss";
import Download from "../../components/icons/download/download";
import Mail from "../../components/icons/mail/mail";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <Topbar url="/home" link="←Home" />
      <main className="portfolio-main">
        <h2 className="h2">Portafolio</h2>

        <Dropdown />
        <section className="buttons-section">
          <span className="text-default">¿Has visto suficiente?</span>
          <div className="buttons">
            <Button
              buttonType="secondary"
              icon={<Download />}
              text="CV detallado"
            />
            <Button
              showIcon="show-icon"
              buttonType="primary"
              url="/portafolio"
              icon={<Mail color="" />}
              text="Contactar"
            />
          </div>
        </section>
      </main>
      <footer>
        <div className="portfolio__floor-container">
          <img
            className="portfolio__floor"
            src="/floor-mobile-optimized.svg"
            alt="decorative image"
          />
        </div>
      </footer>
    </>
  );
}

export default Portfolio;
