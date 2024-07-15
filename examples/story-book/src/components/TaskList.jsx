import Task from './Task';
import PropTypes from 'prop-types';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox'></span>
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items' data-testid='loading' key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items' data-testid='empty' key={'empty'}>
        <div className='wrapper-message'>
          <p className='title-message'>You have no tasks</p>
          <p className='subtitle-message'>Sit back and relax</p>
        </div>
      </div>
    );
  }

  const taskInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className='list-items'>
      {taskInOrder.map((task) => (
        <Task key={task.id} task={task} {...events}></Task>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
  };

  TaskList.defaultProps = {
  loading: false,
  };
