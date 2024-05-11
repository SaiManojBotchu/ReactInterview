import React from 'react';
// import Counter from './05_render_props/Counter';
// import ClickCounter from './04_higher_order_components/ClickCounter';
// import HoverCounter from './04_higher_order_components/HoverCounter';
import ClickCounter1 from './06_custom_hooks/ClickCounter1';
import HoverCounter1 from './06_custom_hooks/HoverCounter1';

function App1() {
  return (
    <div>
      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <Counter
        render={(state, increment) => (
          <ClickCounter state={state} increment={increment} />
        )}
      />
      <Counter
        render={(state, increment) => (
          <HoverCounter state={state} increment={increment} />
        )}
      /> */}

      <ClickCounter1 />
      <HoverCounter1 />
    </div>
  );
}

export default App1;
