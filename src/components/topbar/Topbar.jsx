import { Link } from "react-router-dom";
import "./Topbar.scss";

function Topbar() {
  return (
    <>
      <div className="topbar h6">
        <Link>Contacto</Link>
        <Link>Portafolio</Link>
      </div>
    </>
  );
}

export default Topbar;
