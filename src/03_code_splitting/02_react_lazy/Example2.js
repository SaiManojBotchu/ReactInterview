import React, { lazy, Suspense } from 'react';

// Simulate a delay in loading the LazyComponent
const LazyComponent = lazy(() => wait(2000).then(() => import('./LazyComponent')));
// const LazyComponent = lazy(() => import('./LazyComponent'));

function Example2() {
  return (
    <>
      <h1>Example2: React.lazy() </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export default Example2;
