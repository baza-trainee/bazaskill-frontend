'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './posts-swiper.css';

import { Post } from '@/types/posts';

function PostsCarousel({
  dummyPosts,
}: {
  dummyPosts: Post[];
}) {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="posts-swiper md:!hidden"
    >
      {dummyPosts.map((post) => {
        return (
          <SwiperSlide key={post.id}>
            <article
              key={post.id}
              className="relative h-[320px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92]"
            >
              <div
                className="absolute left-0 top-0 h-full w-full bg-cover bg-center grayscale"
                style={{
                  backgroundImage: `url(${post.img})`,
                }}
              ></div>
              <p className="absolute left-0 top-0 z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white">
                {post.date}
              </p>
              <a
                href={post.link}
                target="_blank"
                className="absolute bottom-0 left-0 z-10 block h-[69%] bg-black p-6"
              >
                <h4 className=" overflow-hidden pb-6 text-center text-xl font-semibold text-white">
                  {post.heading}
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
