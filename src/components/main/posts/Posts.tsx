import { dummyPosts } from './data';
import PostCard from './PostCard';
import PostsCarousel from './PostsSwiper';

const Posts = () => {
  return (
    <section className="container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-2xl font-bold tracking-[1.08px] text-white md:text-4xl">
        Статті та поради
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
