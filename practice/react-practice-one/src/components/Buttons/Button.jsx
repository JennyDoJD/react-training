/* Import dependencies */
import PropTypes from 'prop-types';

/* Import constants */
import { BUTTON_VARIANTS } from '../../constants';

/* Import CSS */
import './button.css';

const Button = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  icon,
  label,
  className = '',
  onClick,
}) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {icon && icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
