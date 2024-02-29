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
// import Project from "./views/projects/Maslow";
// import Personalportfolio from "./views/projects/personalportfolio";
// import Maslow from "./views/projects/Maslow";
import Modelproject from "./views/projects/Modelproject";
import Maslow from "./views/projects/Maslow";
import Jazzing from "./views/projects/Jazzing";
import Effect from "./components/effect/effect";
import Effectright from "./components/effect/Effectright";
import Infografia from "./views/projects/Infografia";
import Ilustraciones from "./views/projects/Ilustraciones";
function App() {
  return (
    <>
      <main className="text-default">
        <Effect />
        <Effectright />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/modelproject" element={<Modelproject />} />
          <Route path="/jazzing" element={<Jazzing />} />
          <Route path="/maslow" element={<Maslow />} />
          <Route path="/infografia" element={<Infografia />} />
          <Route path="/ilustraciones" element={<Ilustraciones />} />

          {/* <Route path="/project" element={<Project />} /> */}
          {/* <Route path="/personalportfolio" element={<Personalportfolio />} /> */}
          {/* <Route path="/maslow" element={<Maslow />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
