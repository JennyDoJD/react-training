/* Import CSS */
import './progress.css';

const Progress = () => {
  return (
    <div className="progress">
      <div className="progress-loading"></div>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Progress;
