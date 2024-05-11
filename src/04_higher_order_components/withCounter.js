// https://youtu.be/B6aNv8nkUSw?si=X5Qii3OYoM7tkdTH
import { useState } from 'react';

// Eg: const IronMan = withSuit(TonyStark)
function withCounter(WrappedComponent) {
  function WithCounter() {
    const [state, setState] = useState(0);
    const increment = () => {
      setState(st => st + 1);
    };
    return <WrappedComponent state={state} increment={increment} />;
  }

  return WithCounter;
}

export default withCounter;
