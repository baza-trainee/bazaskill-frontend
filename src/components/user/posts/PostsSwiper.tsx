'use client';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { IPost } from '@/types/posts';

import 'swiper/css';
import 'swiper/css/pagination';

import './posts-swiper.css';

function PostsCarousel({ data }: { data: IPost[] }) {
  return (
    <Swiper
      simulateTouch={true}
      touchRatio={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      className="posts-swiper"
    >
      {data.map((post) => {

        return (
          <SwiperSlide key={post.id}>
            <article className="mx-auto flex flex-col-reverse lg:flex-row justify-start items-start h-[600px] lg:h-[336px] w-[350px] sm:w-[500px] xl:w-[592px] 4xl:w-[500px] overflow-hidden rounded-lg bg-black text-white shadow-lg">
              <div className="flex w-full lg:w-1/2 flex-col justify-between p-6 min-h-[300px]">
                <div className='relative'>
                  <a
                    href={post.link}
                    target="_blank"
                    className=""
                  >
                    <h2 className="mb-4 text-2xl font-bold text-center">{post.title}</h2>
                  </a>
                  <p className="text-sm">{post.text}</p>
                </div>
              </div>
              <div
                className="relative w-full min-h-[336px] lg:w-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image_url})` }}
              >
              </div>

            
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PostsCarousel;
