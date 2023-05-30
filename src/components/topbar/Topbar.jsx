import { Link } from "react-router-dom";
import "./Topbar.scss";

function Topbar(props) {
  return (
    <>
      <div className="topbar h6">
        <Link>Contacto</Link>
        <Link to={props.url}>{props.link}</Link>
      </div>
    </>
  );
}

export default Topbar;
