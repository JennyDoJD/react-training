import { useState } from 'react';

function withHover(WrappedComponent) {
  return function (props) {
    const [isHovered, setHovered] = useState(false);

    function handleMouseEnter() {
      setHovered(true);
    }

    function handleMouseLeave() {
      setHovered(false);
    }

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} isHovered={isHovered}></WrappedComponent>
      </div>
    );
  };
}

const TextComponent = ({ text, isHovered }) => {
  return (
    <>
      <p style={{ backgroundColor: isHovered ? 'blue' : 'white' }}>{text}</p>
    </>
  );
};

const InputComponent = ({ type, isHovered }) => {
  return (
    <input
      type={type}
      style={{ backgroundColor: isHovered ? 'blue' : 'white' }}
    ></input>
  );
};

const TextComponentWithHover = withHover(TextComponent);
const InputComponentWithHover = withHover(InputComponent);

const App = () => {
  return (
    <div className='App'>
      <TextComponentWithHover
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.'
      ></TextComponentWithHover>

      <InputComponentWithHover type='text'></InputComponentWithHover>
    </div>
  );
};

export default App;
