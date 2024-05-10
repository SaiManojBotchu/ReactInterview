import { lazy } from 'react';

function lazyLoad(fileName, isNamed) {
  return lazy(() => {
    const promise = import(`./${fileName}`);
    if (isNamed) {
      return promise.then(module => ({ default: module[fileName] }));
    }
    return promise;
  });
}

export default lazyLoad;
