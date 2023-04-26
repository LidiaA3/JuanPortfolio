// import Nav from "../styleguide/nav";
import Button from "../components/buttons/button";
import Nav from "./Nav";
import "./Styleguide.scss";

function Styleguide() {
  return (
    <>
      <h1 className="styleguide">Hola, soy la Styleguide</h1>
      <Nav />
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
