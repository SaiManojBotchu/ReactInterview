import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import lazyLoad from './lazyLoad';

const Home = lazyLoad('Home');
const About = lazyLoad('About', true);

function Example3() {
  return (
    <>
      <h1>Example3: Route based code splitting</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function HomeLayout() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Suspense fallback='Loading..'>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Example3;

// const Home = lazy(() => import('./Home'));
// const About = lazy(() =>
//   import('./About').then(module => {
//     return { default: module.About };
//   })
// );

// const About = lazy(async () => {
//   const module = await import('./About');
//   return { default: module.About };
// });
