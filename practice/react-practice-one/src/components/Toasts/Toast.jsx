/* Import dependencies */
import PropTypes from 'prop-types';
import { useEffect } from 'react';

/* Import CSS */
import './toast.css';

/* Import constants */
import { STATUS, MESSAGES } from '../../constants';

const Toast = ({ message, name, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={`toast ${name}`}>{message}</div>;
};

Toast.propTypes = {
  message: PropTypes.oneOf(Object.values(MESSAGES)),
  name: PropTypes.oneOf(Object.values(STATUS)),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
