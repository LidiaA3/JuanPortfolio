import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";
// Scss metido aquí en vez de en la raíz
import Home from "./views/Home";
import Contact from "./views/Contact";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <header>
        <Topbar />
        <h1>Project Gamma</h1>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
