import "./Skills.scss";
import "../../scss/global.scss";

function Skill(props) {
  return (
    <>
      <span className={`skill ${props.type} text-default`}>{props.text}</span>
    </>
  );
}
export default Skill;
