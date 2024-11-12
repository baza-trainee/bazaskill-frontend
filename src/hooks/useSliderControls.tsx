import type { RefObject } from 'react';
import { useCallback } from 'react';

import type { SwiperRef } from 'swiper/react';

function useSliderControls(sliderRef: RefObject<SwiperRef>) {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, [sliderRef]);

  return { handlePrev, handleNext };
}

export default useSliderControls;
