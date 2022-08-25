import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const options = { passive: true };
    const scroll = () => {
      const { scrollY } = window;
      console.log('scrollY', scrollY);
      setY(scrollY);
    };
    document.addEventListener('scroll', scroll, options);
    () => document.removeEventListener('scroll', scroll);
  }, []);
  return { y };
};

export default useScroll;
