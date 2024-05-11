import React from 'react';
import Counter from './05_render_props/Counter';
import ClickCounter from './04_higher_order_components/ClickCounter';
import HoverCounter from './04_higher_order_components/HoverCounter';

function App1() {
  return (
    <div>
      {/* <ClickCounter />
      <HoverCounter /> */}

      <Counter
        render={(state, increment) => (
          <ClickCounter state={state} increment={increment} />
        )}
      />
      <Counter
        render={(state, increment) => (
          <HoverCounter state={state} increment={increment} />
        )}
      />
    </div>
  );
}

export default App1;
