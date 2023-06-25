import "./buttons.scss";
import { Link } from "react-router-dom";
import Download from "../icons/download/download";

function Button(props) {
  const { buttonType } = props;

  const btn = "btn";
  const h4 = "h4";

  const combinedClasses = `${btn} ${h4} ${buttonType}`;

  return (
    <>
      {" "}
      <Link to={props.url}>
        <button className={combinedClasses}>
          {props.icon}
          {props.text}
        </button>
      </Link>
    </>
  );
}
export default Button;
