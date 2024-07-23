/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './progress.css';

const Progress = ({ text = 'Loading...' }) => {
  return (
    <div className="progress">
      <div className="progress-loading"></div>
      <span className="visually-hidden">{text}</span>
    </div>
  );
};

Progress.propTypes = {
  text: PropTypes.string,
};

export default Progress;
