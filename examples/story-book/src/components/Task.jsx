export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className='list-item ${state}'>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className='checkbox'
      >
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        ></input>
        <span
          className='checkbox-custom'
          onClick={() => onArchiveTask(id)}
        ></span>
      </label>

      <label htmlFor={`title-${id}`} aria-label={title} className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          id={`title-${id}`}
          placeholder='Input title'
        ></input>
      </label>
      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`}></span>
        </button>
      )}
    </div>
  );
}
