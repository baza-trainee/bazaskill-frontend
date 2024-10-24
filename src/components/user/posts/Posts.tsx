'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { getPosts } from '@/api/posts';
import { constants } from '@/constants';

import PostsCarousel from './PostsSwiper';

const DynamicPost = dynamic(
  () => import('@/components/admin/posts/Post'),
  {
    loading: () => null,
  },
);

function Posts() {
  const t = useTranslations('Main.articles');

  const { data } = useQuery({
    queryKey: [constants.posts.FETCH_POSTS],
    queryFn: getPosts,
  });

  return (
    <section className="container py-[60px]">
      <h2 className="mb-[50px] text-center font-tahoma text-2xl font-bold tracking-[1.08px] text-white lg:text-[40px]">
        {t('title')}
      </h2>
      <div className="flex flex-wrap justify-center gap-[80px]">
        {data?.length
          ? data?.slice(0, 3).map((post) => {
            return (
              <DynamicPost
                key={post.id}
                {...post}
                isAdmin={false}
              />
            );
          })
          : null}
      </div>
      {data && <PostsCarousel data={data} />}
    </section>
  );
}

export default Posts;
