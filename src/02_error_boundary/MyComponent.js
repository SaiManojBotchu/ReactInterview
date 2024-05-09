import { useState } from 'react';

function MyComponent() {
  const [num, setNum] = useState(0);

  if (num === 5) {
    // Simulate an error
    throw new Error('Crashed');
  }

  return <button onClick={() => setNum(num + 1)}>Count - {num}</button>;
}

export default MyComponent;
