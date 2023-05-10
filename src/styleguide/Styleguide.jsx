// import Nav from "../styleguide/nav";
import Button from "../components/buttons/button";
import Nav from "./Nav";
import "./Styleguide.scss";

function Styleguide() {
  return (
    <>
      <h1 className="styleguide">Hola, soy la Styleguide</h1>
      <Nav />
      <section className="colors">
        <div className="colors__grayscale">
          <div className="color__gray-light">gray-light</div>
          <div className="color__gray">gray</div>
          <div className="color__gray-dark">gray-dark</div>
        </div>
        <div className="colors__blue">
          <div className="color__blue-light">blue-light</div>
          <div className="color__blue">blue</div>
          <div className="color__blue-dark">blue-dark</div>
        </div>
        <div className="colors__green">
          <div className="color__green-light">green-light</div>
          <div className="color__green">green</div>
          <div className="color__green-dark">green-dark</div>
        </div>
      </section>
      <section className="headers-section">
        <h1>Esto sería un ecabezado h1</h1>
        <h2>Esto sería un ecabezado h2</h2>
        <h3>Esto sería un ecabezado h3</h3>
        <h4>Esto sería un ecabezado h4</h4>
        <h5>Esto sería un ecabezado h5</h5>
        <h6>Esto sería un ecabezado h6</h6>
        <Button />
      </section>
    </>
  );
}

export default Styleguide;
