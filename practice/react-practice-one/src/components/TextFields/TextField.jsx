/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './textField.css';

const TextField = ({
  id,
  type,
  value,
  onBlur,
  onChange,
  errorMessage,
  placeholder = '',
}) => {
  return (
    <div className="input-overlay">
      <input
        className={`input-content ${errorMessage ? 'input-error' : ''}`}
        type={type}
        id={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['search', 'number', 'text']).isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default TextField;
