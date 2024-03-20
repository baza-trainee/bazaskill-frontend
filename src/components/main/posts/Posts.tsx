'use client';
import { dummyPosts } from './data';
import PostCard from './PostCard';
import PostsCarousel from './PostsSwiper';
import { useTranslations } from 'next-intl';

const Posts = () => {
  const t = useTranslations('Main.articles');
  return (
    <section className="container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-2xl font-bold tracking-[1.08px] text-white lg:text-[40px]">
        {t('title')}
      </h3>
      <div className="flex justify-between">
        {dummyPosts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
      <PostsCarousel dummyPosts={dummyPosts} />
    </section>
  );
};

export default Posts;
