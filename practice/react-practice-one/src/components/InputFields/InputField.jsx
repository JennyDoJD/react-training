/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './inputField.css';

const InputField = ({ type }) => {
  return <input type={type} className="input-container" />;
};

InputField.propTypes = {
  type: PropTypes.oneOf(['search', 'number', 'text']).isRequired,
};

export default InputField;
