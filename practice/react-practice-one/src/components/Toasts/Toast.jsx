import { useEffect } from 'react';

/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './toast.css';

const Toast = ({ message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={`toast ${type}`}>{message}</div>;
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
