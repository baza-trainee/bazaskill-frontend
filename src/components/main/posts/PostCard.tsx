import React from 'react';
import { Post } from '@/types/posts';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article
      key={post.id}
      className="relative hidden h-[320px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92] md:flex md:w-[217px] xl:w-[358px] 5xl:h-[336px] 5xl:w-[464px]"
    >
      <div
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url(${post.img})`,
        }}
      ></div>
      <p className="z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white">
        {post.date}
      </p>
      <a
        href={post.link}
        target="_blank"
        className="z-10 h-[69%] bg-black p-6 md:p-3 xl:p-6"
      >
        <h4 className="pb-6 text-center text-xl font-semibold text-white md:pb-4 md:text-base xl:pb-6 xl:text-xl">
          {post.heading}
        </h4>
        <p className="text-lg text-white md:line-clamp-4 xl:line-clamp-4">
          {post.text}
        </p>
      </a>
    </article>
  );
};

export default PostCard;
