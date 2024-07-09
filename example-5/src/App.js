import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyButton;
