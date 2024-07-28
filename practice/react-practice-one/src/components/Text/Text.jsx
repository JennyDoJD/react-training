/* Import dependencies */
import PropTypes from 'prop-types';

/* Import constants */
import { COMPONENT_SIZES, LABELS, TEXT_VARIANTS } from '../../constants';

/* Import CSS */
import './text.css';

const Text = ({
  variant = TEXT_VARIANTS.PRIMARY,
  size = COMPONENT_SIZES.DEFAULT,
  type = LABELS.DEFAULT,
  className = '',
  children,
}) => {
  return (
    <p
      className={`text-${variant} text-${type}-${size} text-${type} ${className}`}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(Object.values(TEXT_VARIANTS)),
  size: PropTypes.oneOf(Object.values(COMPONENT_SIZES)),
  type: PropTypes.oneOf(Object.values(LABELS)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
