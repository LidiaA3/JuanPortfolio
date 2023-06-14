import "./buttons.scss";
import { Link } from "react-router-dom";
import Mail from "../icons/mail/mail";

function Button(props) {
  const { showIcon } = props;
  const { buttonType } = props;

  const btn = "btn";
  const h4 = "h4";

  const combinedClasses = `${btn} ${h4} ${buttonType}`;

  return (
    <>
      <button className={combinedClasses}>
        <Mail showIcon={showIcon} />
        <Link to={props.url}>{props.text}</Link>
      </button>
    </>
  );
}
export default Button;
