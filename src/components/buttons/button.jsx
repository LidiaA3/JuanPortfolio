import "./buttons.scss";

function Button(props) {
  return (
    <>
      <button className="btn h4">{props.text}</button>;
    </>
  );
}
export default Button;
