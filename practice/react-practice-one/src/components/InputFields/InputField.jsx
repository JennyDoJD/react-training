/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './inputField.css';

const InputField = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className="input-container" />
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(['search', 'number', 'text']).isRequired,
  placeholder: PropTypes.string,
};

export default InputField;
