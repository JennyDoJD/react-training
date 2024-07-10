import './App.css';

function MyButton() {
  return <button className='App-btn'>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1 className='App-header'>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
