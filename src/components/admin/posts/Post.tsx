import { useState } from 'react';
import Link from 'next/link';

import { IPost } from '@/types/posts';
import { formatDate } from './dateHelper';
import { constants } from '@/constants';
import SuccessAlert from '../alerts/SuccessAlert';

import { deletePosts } from '@/api/posts';
import {
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';

const Post = ({
  id,
  title,
  link,
  created_at,
  text,
  image_url,
  isAdmin,
}: IPost) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const creationDate = formatDate(created_at);

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePosts,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [constants.posts.FETCH_POSTS],
      });
    },
  });

  return (
    <article className="relative hidden h-[336px] w-[442px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92] md:flex md:w-[217px] xl:w-[358px] 5xl:h-[336px] 5xl:w-[464px]">
      <div
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      ></div>
      <p className="z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white">
        {creationDate}
      </p>
      <a
        href={link}
        target="_blank"
        className="z-10 h-[69%] bg-black p-6 md:p-3 xl:p-6"
      >
        <h4 className="pb-6 text-center text-xl font-semibold text-white md:pb-4 md:text-base xl:pb-6 xl:text-xl">
          {title}
        </h4>
        <p className="text-lg text-white md:line-clamp-4 xl:line-clamp-4">
          {text}
        </p>
      </a>
      {isAdmin && (
        <div className="absolute bottom-[24px] right-[24px] z-10 flex gap-[32px]">
          <button
            className="flex h-[32px] w-[32px] items-center justify-center bg-white"
            onClick={() => {
              mutation.mutate(id);
              setIsSuccess(true);
            }}
          >
            <svg width={28} height={28}>
              <use href="/Icons/sprite.svg#icon-drop"></use>
            </svg>
          </button>
          <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
            <Link href={`/admin/posts/edit/${id}`}>
              <svg width={28} height={28}>
                <use href="/Icons/sprite.svg#icon-pen"></use>
              </svg>
            </Link>
          </button>
        </div>
      )}
      {isSuccess && (
        <SuccessAlert
          title="Статтю видалено"
          onClose={() => setIsSuccess(false)}
          isSuccess={isSuccess}
        />
      )}
    </article>
  );
};

export default Post;
