import './App.css';

function MyButton() {
  function handleClick() {
    alert('You click me!');
  }

  return (
    <button onClick={handleClick} className='primary-btn'>
      Click me
    </button>
  );
}

export default MyButton;
