import { useEffect, useState } from 'react';

function useSliderParams() {
  const [swiperParams, setSwiperParams] = useState({
    spaceBetween: 24,
    containerClass: 'container'
  });

  const [cardParams, setCardParams] = useState({
    imageWidth: 80,
    imageHeight: 80
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 320 && windowWidth < 420) {
        setSwiperParams({
          spaceBetween: 20,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 80,
          imageHeight: 80
        });
      } else if (windowWidth >= 420 && windowWidth < 768) {
        setSwiperParams({
          spaceBetween: 34,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 80,
          imageHeight: 80
        });
      } else if (windowWidth >= 768 && windowWidth < 1280) {
        setSwiperParams({
          spaceBetween: 40,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 80,
          imageHeight: 80
        });
      } else if (windowWidth >= 1280 && windowWidth < 1368) {
        setSwiperParams({
          spaceBetween: 50,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 112,
          imageHeight: 112
        });
      } else if (windowWidth >= 1368 && windowWidth < 1440) {
        setSwiperParams({
          spaceBetween: 30,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117
        });
      } else if (windowWidth >= 1440 && windowWidth < 1536) {
        setSwiperParams({
          spaceBetween: 40,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117
        });
      } else if (windowWidth >= 1536 && windowWidth < 1920) {
        setSwiperParams({
          spaceBetween: 50,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117
        });
      } else if (windowWidth >= 1920) {
        setSwiperParams({
          spaceBetween: 55,
          containerClass: 'mx-auto'
        });
        setCardParams({
          imageWidth: 117,
          imageHeight: 117
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { swiperParams, cardParams };
}

export default useSliderParams;
