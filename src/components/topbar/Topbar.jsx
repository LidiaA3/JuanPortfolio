import { Link } from "react-router-dom";
import "./Topbar.scss";
import Mail from "../icons/mail/mail";
// import "src/scss/_variables.scss";

function Topbar(props) {
  return (
    <>
      <div className="topbar h6">
        {/* <div className="topbar__nav"> */}
        <Link>
          <Mail color="#2d00f6" />
          Contacto
        </Link>
        <Link to={props.url}>{props.link}</Link>
        {/* </div> */}
      </div>
    </>
  );
}

export default Topbar;
