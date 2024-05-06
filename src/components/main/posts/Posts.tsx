'use client';

import PostsCarousel from './PostsSwiper';
import { useTranslations } from 'next-intl';

import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getPosts } from '@/api/posts';

import Post from '@/components/admin/posts/Post';

const Posts = () => {
  const t = useTranslations('Main.articles');

  const { data } = useQuery({
    queryKey: [constants.posts.FETCH_POSTS],
    queryFn: getPosts,
  });

  return (
    <section className="container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-2xl font-bold tracking-[1.08px] text-white lg:text-[40px]">
        {t('title')}
      </h3>
      <div className="flex flex-wrap justify-between gap-10">
        {data
          ?.reverse()
          .slice(0, 3)
          .map((post) => {
            return (
              <Post
                key={post.id}
                {...post}
                isAdmin={false}
              />
            );
          })}
      </div>
      {data && <PostsCarousel data={data} />}
    </section>
  );
};

export default Posts;
