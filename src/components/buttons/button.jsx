import "./buttons.scss";
import { Link } from "react-router-dom";
import Download from "../icons/download/download";

function Button(props) {
  const { buttonType } = props;

  const btn = "btn";
  const h4 = "h4";

  const combinedClasses = `${btn} ${h4} ${buttonType}`;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {" "}
      <Link to={props.url} onClick={scrollToTop}>
        <button className={combinedClasses}>
          {props.icon}
          {props.text}
        </button>
      </Link>
    </>
  );
}
export default Button;
