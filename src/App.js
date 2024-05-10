// import Controlled from './01_controlled_vs_uncontrolled/Controlled';
// import Uncontrolled from './01_controlled_vs_uncontrolled/Uncontrolled';
// import MyComponent from './02_error_boundary/MyComponent';
// import ErrorBoundary from './02_error_boundary/ErrorBoundary';
import Example1 from './03_code_splitting/01_basic/Example1';
import Example2 from './03_code_splitting/02_react_lazy/Example2';
import Example3 from './03_code_splitting/03_route_based/Example3';

function App() {
  return (
    <div className='App'>
      {/* <Controlled />
      <Uncontrolled /> */}

      {/* CRA shows error overlay even after using error boundaries in dev */}
      {/* <ErrorBoundary msg='Something went wrong'>
        <MyComponent />
      </ErrorBoundary> */}

      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

export default App;
