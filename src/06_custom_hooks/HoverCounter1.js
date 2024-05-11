import useCounter from './useCounter';

function HoverCounter() {
  const [state, increment] = useCounter(0);

  return <p onMouseOver={increment}>Hovered {state} times</p>;
}

export default HoverCounter;
