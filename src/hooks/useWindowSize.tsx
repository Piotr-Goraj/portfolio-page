// hooks
import { useState, useEffect } from 'react';

export function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add listener for window resize event on component assembly
    window.addEventListener('resize', handleWindowResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowWidth;
}
