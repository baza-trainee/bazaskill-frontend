'use client';
import Container from '../Container';
import img from '../../../../public/img/testimonials_image.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonials_styles.css';

interface Testimonials {
  id: number;
  name: string;
  position: string;
  review: string;
  data: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonials[] = [
    {
      id: 1,
      name: 'Ірина',
      position: 'учасниця, QA',
      review:
        'Я останнім часом думаю про те, що на Базу варто було б прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ',
      data: 'травень, 2023',
      image: img.src,
    },
    {
      id: 2,
      name: 'Юлія',
      position: 'учасниця, Full Stack Developer',
      review:
        'Я останнім часом думаю про те, що на Базу варто було б прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ',
      data: 'червень, 2023',
      image: img.src,
    },
    {
      id: 3,
      name: 'Ольга',
      position: 'учасниця, UI/UX',
      review:
        'Я останнім часом думаю про те, що на Базу варто було б прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ',
      data: 'липень, 2023',
      image: img.src,
    },
  ];

  return (
    <section className="relaive container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-4xl font-bold tracking-[1.08px] text-white">
        Відгуки
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((item: Testimonials) => (
          <SwiperSlide key={item.id}>
            <div className="flex w-[88%] items-center justify-between 2xl:min-w-[1112px]">
              <div className="flex items-center gap-[18px]">
                <img
                  src={item.image}
                  alt={item.name}
                  width="122"
                  height="122"
                />
                <div className="text-start">
                  <h4 className="mb-[24px] font-tahoma text-2xl font-bold tracking-[.72px] text-white">
                    {item.name}
                  </h4>
                  <p className="font-open-sans text-xl font-normal tracking-[.4px] text-white">
                    {item.position}
                  </p>
                  <p className="font-open-sans text-sm font-normal text-white">
                    {item.data}
                  </p>
                </div>
              </div>
              <p className="w-[652px] text-start font-open-sans text-xl font-normal tracking-[.4px] text-white">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
