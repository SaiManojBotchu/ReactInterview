import useCounter from './useCounter';

function ClickCounter() {
  const [state, increment] = useCounter(0);

  return <button onClick={increment}>Clicked {state} times</button>;
}

export default ClickCounter;
