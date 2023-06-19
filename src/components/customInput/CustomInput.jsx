import { PropTypes } from "prop-types";
import "./custominput.css";

const CustomInput = ({ type, ...otherProps }) => {
  return (
    <div className="input-container">
      <input type={type} className="input-box" {...otherProps} />
    </div>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
};
