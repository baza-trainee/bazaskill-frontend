import Image from "next/image"
import Link from "next/link"

const Post = ({ data: post }: { data: any }) => {
  return (
    <div className="flex items-center justify-center">
      <article
        className="flex flex-col-reverse sm+:flex-row justify-end items-start w-full overflow-hidden rounded-lg bg-black text-white shadow-lg"
        aria-labelledby={`post-title-${post.id}`}
        role="article"
      >
        <div className="flex w-full lg:w-1/2 flex-col justify-start sm+:justify-between p-6 min-h-[270px]">
          <header>
            <Link 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Read more about ${post.title}`}
            >
              <h3
                id={`post-title-${post.id}`}
                className="mb-4 text-2xl font-bold text-center"
              >
                {post.title}
              </h3>
            </Link>
          </header>
          <p className="text-sm line-clamp-[7] md:line-clamp-6" role="contentinfo">
            {post.text}
          </p>
        </div>
        <figure 
          className="relative w-full min-h-[200px] max-h-[280px] h-[60vw] md:max-h-[357x] 3xl:max-h-[466x] lg:w-1/2" 
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
  )
}

export default Post
