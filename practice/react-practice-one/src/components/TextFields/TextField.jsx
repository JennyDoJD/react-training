/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './textField.css';

const TextField = ({ type }) => {
  return <input type={type} className="input-overlay" />;
};

TextField.propTypes = {
  type: PropTypes.oneOf(['search', 'number', 'text']).isRequired,
};

export default TextField;
