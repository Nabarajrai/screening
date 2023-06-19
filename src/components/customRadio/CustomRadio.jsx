import { PropTypes } from "prop-types";
import "./customRadio.css";

const CustomRadio = ({ type, ...otherProps }) => {
  return (
    <div className="radio-button-container">
      <label className="radio-container">
        <input type={type} {...otherProps} className="radio-input" />
        <span className="radio-checkmark"></span>
      </label>
    </div>
  );
};

export default CustomRadio;

CustomRadio.propTypes = {
  type: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
};
