// https://youtu.be/EZil2OTyB4w?si=7ohPl6cX3ZPE6hBT
import React, { useState } from 'react';

function Counter(props) {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(st => st + 1);
  };

  return <div>{props.render(state, increment)}</div>;
}

export default Counter;
