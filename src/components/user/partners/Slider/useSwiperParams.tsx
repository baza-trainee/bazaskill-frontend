import { useEffect, useState } from 'react';

const useSwiperParams = () => {
  const [swiperParams, setSwiperParams] = useState({
    spaceBetween: 24,
    imageWidth: 302,
    imageHeight: 135,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 320 && windowWidth < 420) {
        setSwiperParams({
          spaceBetween: 0,
          imageWidth: 280,
          imageHeight: 84,
        });
      } else if (windowWidth >= 420 && windowWidth < 768) {
        setSwiperParams({
          spaceBetween: 0,
          imageWidth: 380,
          imageHeight: 135,
        });
      } else if (windowWidth >= 768 && windowWidth < 1280) {
        setSwiperParams({
          spaceBetween: 24,
          imageWidth: 190,
          imageHeight: 86,
        });
      } else if (
        windowWidth >= 1280 &&
        windowWidth < 1368
      ) {
        setSwiperParams({
          spaceBetween: 40,
          imageWidth: 302,
          imageHeight: 135,
        });
      } else if (
        windowWidth >= 1368 &&
        windowWidth < 1440
      ) {
        setSwiperParams({
          spaceBetween: 50,
          imageWidth: 302,
          imageHeight: 135,
        });
      } else if (
        windowWidth >= 1440 &&
        windowWidth < 1536
      ) {
        setSwiperParams({
          spaceBetween: 50,
          imageWidth: 302,
          imageHeight: 135,
        });
      } else if (
        windowWidth >= 1536 &&
        windowWidth < 1920
      ) {
        setSwiperParams({
          spaceBetween: 84,
          imageWidth: 324,
          imageHeight: 153,
        });
      } else if (windowWidth >= 1920) {
        setSwiperParams({
          spaceBetween: 215,
          imageWidth: 340,
          imageHeight: 152,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return swiperParams;
};

export default useSwiperParams;
