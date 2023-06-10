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
import Project from "./views/project/Project";

function App() {
  return (
    <>
      <main className="text-default">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
