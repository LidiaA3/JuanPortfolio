import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/global.scss";
// Scss metido aquí en vez de en la raíz
import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import Styleguide from "./styleguide/Styleguide";
import Topbar from "./components/topbar/Topbar";
import IconHead from "./components/icons/IconHead";
import Portfolio from "./views/portfolio/Portfolio";

function App() {
  return (
    <>
      <header>
        {/* <Topbar /> */}
        {/* <h1>
          Project Gamma 
          <div className="green">
          <IconHead size="" className=""/>
          </div>
        </h1> */}
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/styleguide">Styleguide</Link> */}
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/portafolio" element={<Portfolio />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
