import { useEffect } from 'react';

/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './toast.css';

/* Import constants */
import { MESSAGES } from '../constants/message';

const Toast = ({ message, name, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={`toast ${name}`}>{message}</div>;
};

Toast.propTypes = {
  message: PropTypes.oneOf(Object.values(MESSAGES)),
  name: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
