import { Link } from "react-router-dom";
import "./Topbar.scss";
import Mail from "../icons/mail/mail";
function Topbar(props) {
  return (
    <>
      <div className="topbar h6">
        {/* <div className="topbar__nav"> */}
        <Link>
          <Mail />
          Contacto
        </Link>
        <Link to={props.url}>{props.link}</Link>
        {/* </div> */}
      </div>
    </>
  );
}

export default Topbar;
