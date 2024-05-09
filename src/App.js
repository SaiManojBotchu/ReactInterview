// import Controlled from './01_controlled_vs_uncontrolled/Controlled';
// import Uncontrolled from './01_controlled_vs_uncontrolled/Uncontrolled';
import MyComponent from './02_error_boundary/MyComponent';
import ErrorBoundary from './02_error_boundary/ErrorBoundary';

function App() {
  return (
    <div className='App'>
      {/* <Controlled />
      <Uncontrolled /> */}

      {/* CRA shows error overlay even after using error boundaries in dev */}
      <ErrorBoundary msg='Something went wrong'>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
