import React from 'react';
import withCounter from './withCounter';

function HoverCounter({ state, increment }) {
  return <p onMouseOver={increment}>Hovered {state} times</p>;
}

export default withCounter(HoverCounter);
