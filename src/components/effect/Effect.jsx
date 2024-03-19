import "./effects.scss";
import "../../scss/global.scss";

function Effect(props) {
  return (
    <>
      <div className="smoke">
        <div className="fig-1">
          <div className="fig-1_mask"></div>
          <div className="fig-1_mask-2"></div>
          <img src="src/components/effect/Smoke-1.png" alt="" />
        </div>{" "}
      </div>
    </>
  );
}
export default Effect;
