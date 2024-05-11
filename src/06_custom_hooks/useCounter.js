import { useState } from 'react';

function useCounter(initialValue) {
  const [state, setState] = useState(initialValue);

  const increment = () => {
    setState(st => st + 1);
  };

  return [state, increment];
}

export default useCounter;
