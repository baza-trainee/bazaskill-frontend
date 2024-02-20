import bgA from '/public/images/posts_main/posts-1.jpg';
import bgB from '/public/images/posts_main/posts-2.jpg';
import bgC from '/public/images/posts_main/posts-3.jpg';

import PostsCarousel from './PostsSwiper';
import { Post } from '@/types/posts';

const Posts = () => {
  const dummyPosts: Post[] = [
    {
      id: 1,
      date: '24.01.2024',
      img: bgA.src,
      link: 'https://www.google.com.ua/?hl=uk',
      heading: 'Як створити ідеальне резюме',
      text: 'Ефективне і якісне резюме — ваш провідник у світ професійного розвитку. І саме час з ним потоваришувати. Відсутність структури, помилки в оформленні і фрази-кліше забирають на себе дорогоцінні секунди і позбавляють шансу перейти до наступного етапу — співбесіди. Ми зібрали інструкції',
    },
    {
      id: 2,
      date: '24.01.2024',
      img: bgB.src,
      link: 'https://www.google.com.ua/?hl=uk',
      heading:
        '7 порад для привабливої самопрезентації на співбесіді',
      text: 'Вдала самопрезентація допоможе вам виділитися з-поміж інших, справити вигідне перше враження та «продати» себе як ідеального кандидата, що принесе максимум користі бізнесу. Якщо ваше резюме зацікавило роботодавця, наступний зростати кількісно. Їм потрібні айтівці, аби',
    },
    {
      id: 3,
      date: '24.01.2024',
      img: bgC.src,
      link: 'https://www.google.com.ua/?hl=uk',
      heading: 'Чому на IT-ринку стало багато джунів',
      text: 'Українська IT-індустрія — одна з небагатьох галузей економіки, яка здатна працювати практично на довоєнному рівні. Попри труднощі зі збереженням і пошуком нових замовників, IT-компанії продовжують зростати кількісно. Їм потрібні айтівці, аби зростати кількісно. Їм потрібні айтівці, аби',
    },
  ];

  return (
    <section className="container py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-2xl font-bold tracking-[1.08px] text-white md:text-4xl">
        Статті та поради
      </h3>
      <div className="flex justify-between">
        {dummyPosts.map((post) => {
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
                <p className="text-sm text-white md:line-clamp-4 xl:line-clamp-4">
                  {post.text}
                </p>
              </a>
            </article>
          );
        })}
      </div>
      <PostsCarousel dummyPosts={dummyPosts} />
    </section>
  );
};

export default Posts;
