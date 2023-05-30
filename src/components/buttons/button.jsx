import "./buttons.scss";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <>
      <button className="btn h4">
        <Link to={props.url}>{props.text}</Link>
      </button>
      ;
    </>
  );
}
export default Button;
