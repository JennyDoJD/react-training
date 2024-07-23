/* Import dependencies */
import PropTypes from 'prop-types';

/* Import constants*/
import { PROGRESS_TEXT } from '../constants';

/* Import CSS */
import './progress.css';

const Progress = ({ text = PROGRESS_TEXT.default }) => {
  return (
    <div className="progress">
      <div className="progress-loading"></div>
      <span className="visually-hidden">{text}</span>
    </div>
  );
};

Progress.propTypes = {
  text: PropTypes.oneOf(Object.values(PROGRESS_TEXT)),
};

export default Progress;
