'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { getPosts } from '@/api/posts';
import Slider from '@/components/shared/slider/Slider';
import { constants } from '@/constants';

import Post from './Post';

function Posts() {
  const t = useTranslations('Main.articles');

  const { data: posts } = useQuery({
    queryKey: [constants.posts.FETCH_POSTS],
    queryFn: getPosts
  });

  return (
    <section
      className="container py-12 md:py-[60px] lg:py-[100px]"
      aria-labelledby="articles-title"
    >
      {posts && (
        <Slider
          data={posts}
          Component={Post}
          title={t('title')}
          titleClassName="md:text-start"
          aria-label="Articles Slider"
          nextElName="nextPosts"
          prevElName="prevPosts"
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 64
            }
          }}
        />
      )}
    </section>
  );
}

export default Posts;
