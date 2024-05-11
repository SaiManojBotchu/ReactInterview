import withCounter from "./withCounter";

function ClickCounter({ state, increment }) {
  return <button onClick={increment}>Clicked {state} times</button>;
}

export default withCounter(ClickCounter);
