/* Import CSS */
import './progress.css';

const CircularProgress = () => {
  return (
    <div className="progress">
      <div className="progress-loading"></div>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default CircularProgress;
