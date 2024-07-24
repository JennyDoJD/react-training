/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './textField.css';

const TextField = ({ id, type, value, onBlur, onChange }) => {
  return (
    <input
      className="input-overlay"
      type={type}
      id={id}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['search', 'number', 'text']).isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default TextField;
