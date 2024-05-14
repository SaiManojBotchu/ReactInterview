import React, { useState, useEffect } from 'react';

function HandleResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add a event listener, whenever browser resizes state updates
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
    </div>
  );
}

export default HandleResize;
