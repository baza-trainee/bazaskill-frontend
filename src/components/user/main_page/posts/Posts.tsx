'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { getPosts } from '@/api/posts';
import { constants } from '@/constants';

import Post from './Post';
import Slider from '@/components/shared/slider/Slider';

function Posts() {
  const t = useTranslations('Main.articles');

  const { data: posts } = useQuery({
    queryKey: [constants.posts.FETCH_POSTS],
    queryFn: getPosts,
  });

  return (
    <section
      className="container py-[60px]"
      aria-labelledby="articles-title"
    >
      {/* <h2
        id="articles-title"
        className="mb-[50px] text-center font-tahoma text-2xl 
        font-bold tracking-[1.08px] text-white lg:text-[40px]"
      >
        {t('title')}
      </h2> */}
      {posts && (
        <Slider
          data={posts}
          Component={Post}
          title={t('title')}
          aria-label="Articles Slider"
          nextElName="nextPosts"
          prevElName="prevPosts"
          breakpoints={{
            1280: {
              slidesPerView: 2,
            }
          }}
        />
      )}
    </section>
  );
}

export default Posts;
