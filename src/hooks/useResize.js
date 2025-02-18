import { useEffect, useState } from 'react';

const useResize = value => {
  const [width, setWidth] = useState(window.innerWidth < value);

  useEffect(() => {
    const handleResize = () => {
      return setWidth(window.innerWidth < value);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [value]);
  return width;
};

export default useResize;
