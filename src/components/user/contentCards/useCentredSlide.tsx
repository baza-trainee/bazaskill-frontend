import { useState, useEffect } from 'react';

interface CentredSlidesState {
  centeredSlides: boolean;
}

const useCentredSlides = (): CentredSlidesState => {
  const [centeredSlides, setCenteredSlides] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 320 && windowWidth < 420) {
        setCenteredSlides(true);
      } else {
        setCenteredSlides(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return { centeredSlides }; // Corrected property name
};

export default useCentredSlides;
