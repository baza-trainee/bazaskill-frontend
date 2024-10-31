import { FC, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';

type SliderProps = {
  data: any;
  showArrows?: boolean;
  slidesToView?: number;
  title?: string;
  Component: FC<{ data: any, index?: number }>;
};

const Slider: FC<SliderProps> = ({ data, Component, showArrows=true, slidesToView, title }) => {
  const sliderRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setSlidesPerView(2);
    }
    if (isTabletOrMobile) {
      setSlidesPerView(1);
    }
  }, [isDesktopOrLaptop, isTabletOrMobile]);

  const handlePrev = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slideNext();
    }
  };

  return (
    <div className="my-8 flex flex-col w-full items-center justify-center ">
     {showArrows &&  <nav
        className="mx-auto mt-4 flex w-full items-center justify-between mb-10 text-white pr-4"
        aria-label="Slider navigation"
      >
        {title &&  <h2
        className="text-center font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:text-[40px]"
      >
        {title}
      </h2>}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            aria-controls="slider"
            className="cursor-pointer"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            aria-controls="slider"
            className="cursor-pointer"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </nav>}
      <Swiper
        id="slider"
        className="relative flex w-full items-center pb-9"
        spaceBetween={10}
        slidesPerView={slidesToView ? slidesToView : slidesPerView}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          (sliderRef.current as any) = swiper;
        }}
      >
        {data.map((item:any, i:number) => (
          <SwiperSlide key={i}>
            <Component data={item} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
