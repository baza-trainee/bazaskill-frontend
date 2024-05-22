import { RefObject, useCallback } from 'react';
import { SwiperRef } from 'swiper/react';

const useSliderControls = (
  sliderRef: RefObject<SwiperRef>
) => {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, [sliderRef]);

  return { handlePrev, handleNext };
};

export default useSliderControls;
