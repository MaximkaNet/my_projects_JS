import MathUtils from "../../utils/math-utils";
import './Answear.css';
const Answear = (props) => {
  const result = MathUtils.findHypotenuse(+props.a, +props.b);
  return (
    <div className='container'>
      The answear is <b>{result}</b>
    </div>
  );
}

export default Answear;