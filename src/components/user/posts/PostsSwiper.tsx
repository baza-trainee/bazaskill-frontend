'use client';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { IPost } from '@/types/posts';

import { formatDate } from '@/components/admin/posts/dateHelper';

import 'swiper/css';
import 'swiper/css/pagination';

import './posts-swiper.css';

function PostsCarousel({ data }: { data: IPost[] }) {
  return (
    <Swiper
      slidesPerView="auto"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      spaceBetween={25}
      className="posts-swiper md:!hidden"
    >
      {data.map((post) => {
        const creationDate = formatDate(post.created_at);

        return (
          <SwiperSlide key={post.id}>
            <article
              key={post.id}
              className="relative mx-auto h-[320px] max-w-[442px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92]"
            >
              <div className="relative">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="h-[150px] w-full object-cover grayscale"
                />
                <p className="absolute left-0 top-0 z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white">
                  {creationDate}
                </p>
              </div>
              <p className="absolute left-0 top-0 z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white">
                {creationDate}
              </p>
              <a
                href={post.link}
                target="_blank"
                className="absolute inset-x-0 bottom-0 z-10 block h-[69%] bg-black p-6"
              >
                <h4 className=" overflow-hidden pb-6 text-center text-xl font-semibold text-white">
                  {post.title}
                </h4>
                <p className="line-clamp-5 text-sm text-white">
                  {post.text}
                </p>
              </a>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PostsCarousel;
