/* Import dependencies */
import PropTypes from 'prop-types';
import { useEffect } from 'react';

/* Import CSS */
import './toast.css';

/* Import constants */
import { TOAST_TYPES, MESSAGES } from '../../constants';

const Toast = ({ message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={`toast ${type}`}>{message}</div>;
};

Toast.propTypes = {
  message: PropTypes.oneOf(Object.values(MESSAGES)),
  type: PropTypes.oneOf(Object.values(TOAST_TYPES)),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
