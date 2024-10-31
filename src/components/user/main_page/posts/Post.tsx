import Image from "next/image"

const Post = ({ data: post }: { data: any }) => {
  return (
    <article
      className="mx-auto flex flex-col-reverse lg:flex-row justify-start items-start
      h-[600px] lg:h-[336px] w-[350px] md:w-[500px] xl:w-[592px] 5xl:w-[773px]
      overflow-hidden rounded-lg bg-black text-white shadow-lg"
      aria-labelledby={`post-title-${post.id}`}
      role="article"
    >
      <div className="flex w-full lg:w-1/2 flex-col justify-between p-6 min-h-[300px]">
        <header>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read more about ${post.title}`}
          >
            <h2
              id={`post-title-${post.id}`}
              className="mb-4 text-2xl font-bold text-center"
            >
              {post.title}
            </h2>
          </a>
        </header>
        <p className="text-sm" role="contentinfo">
          {post.text}
        </p>
      </div>
      <figure className="relative w-full min-h-[336px] lg:w-1/2" role="img" aria-label={`Image representing ${post.title}`}>
        <Image
          src={post.image_url}
          alt={`Image representing ${post.title}`}
          layout="fill"
          objectFit="cover"
          className="bg-muted"
        />
      </figure>
    </article>
  )
}

export default Post
