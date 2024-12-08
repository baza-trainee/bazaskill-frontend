import Image from 'next/image';
import Link from 'next/link';

const Post = ({ data: post }: { data: any }) => {
  return (
    <div className="flex items-center justify-center">
      <article
        className="flex w-full flex-col-reverse items-start justify-end overflow-hidden rounded-lg bg-black text-white shadow-lg sm+:flex-row"
        aria-labelledby={`post-title-${post.id}`}
        role="article"
      >
        <div className="flex min-h-[270px] w-full flex-col justify-start p-6 sm+:justify-between lg:w-1/2">
          <header>
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${post.title}`}
            >
              <h3 id={`post-title-${post.id}`} className="mb-4 text-center text-2xl font-bold">
                {post.title}
              </h3>
            </Link>
          </header>
          <p className="line-clamp-[7] text-sm md:line-clamp-6" role="contentinfo">
            {post.text}
          </p>
        </div>
        <figure
          className="relative h-[60vw] max-h-[280px] min-h-[200px] w-full md:max-h-[357x] lg:w-1/2 3xl:max-h-[466x]"
          role="img"
          aria-label={`Image representing ${post.title}`}
        >
          <Image
            src={post.image_url}
            alt={`Image representing ${post.title}`}
            fill
            sizes="100%"
            className="object-cover"
          />
        </figure>
      </article>
    </div>
  );
};

export default Post;
