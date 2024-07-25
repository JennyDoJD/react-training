/* Import dependencies */
import PropTypes from 'prop-types';

/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';

/* Import CSS */
import './text.css';

const Text = ({
  variant = TEXT_VARIANTS.DEFAULT,
  size = COMPONENT_SIZES.DEFAULT,
  className = '',
  children,
}) => {
  return (
    <p className={`text-${variant} text-${variant}-${size} ${className}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(Object.values(TEXT_VARIANTS)),
  size: PropTypes.oneOf(Object.values(COMPONENT_SIZES)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
