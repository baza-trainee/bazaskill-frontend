import bgA from '../../../../public/images/posts_main/posts-1.jpg';
import bgB from '../../../../public/images/posts_main/posts-2.jpg';
import bgC from '../../../../public/images/posts_main/posts-3.jpg';

interface Post {
  id: number;
  date: string;
  img: string;
  heading: string;
  link: string;
}

const Posts = () => {
  const dummyPosts: Post[] = [
    {
      id: 1,
      date: '24.01.2024',
      img: bgA.src,
      link: 'https://www.google.com.ua/?hl=uk',
      heading:
        'Про оптимізацію швидкості завантаження веб-сайтів',
    },
    {
      id: 2,
      date: '24.01.2024',
      img: bgB.src,
      link: 'https://www.google.com.ua/?hl=uk',
      heading: 'Твій продукт в інтернеті',
    },
    {
      id: 3,
      date: '24.01.2024',
      img: bgC.src,
      link: 'https://www.google.com.ua/?hl=uk',
      heading:
        'Про оптимізацію швидкості завантаження веб-сайтів',
    },
  ];

  return (
    <section className="container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-4xl font-bold tracking-[1.08px] text-white">
        Статті та поради
      </h3>
      <div className="flex justify-between">
        {dummyPosts.map((post) => {
          return (
            <article
              key={post.id}
              className="relative flex h-[321px] w-[358px] flex-col justify-between overflow-hidden rounded-md "
            >
              <div
                className="absolute left-0 top-0 h-full w-full bg-cover bg-center grayscale"
                style={{
                  backgroundImage: `url(${post.img})`,
                }}
              ></div>
              <p className="z-10 w-[108px] rounded-br-lg bg-dateBlack p-2 text-center text-white">
                {post.date}
              </p>
              <a
                href={post.link}
                target="_blank"
                className="main-gradient z-10 p-2.5"
              >
                <h4 className="text-center leading-relaxed text-black">
                  {post.heading}
                </h4>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
