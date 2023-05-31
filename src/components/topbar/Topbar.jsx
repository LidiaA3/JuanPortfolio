import { Link } from "react-router-dom";
import "./Topbar.scss";

function Topbar(props) {
  return (
    <>
      <div className="topbar h6">
        {/* <div className="topbar__nav"> */}
        <Link>Contacto</Link>
        <Link to={props.url}>{props.link}</Link>
        {/* </div> */}
      </div>
    </>
  );
}

export default Topbar;
