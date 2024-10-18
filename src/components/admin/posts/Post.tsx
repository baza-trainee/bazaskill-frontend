import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';

import type { IPost } from '@/types/posts';

import { deletePosts } from '@/api/posts';
import { constants } from '@/constants';

import QuestionAlert from '../alerts/QuestionAlert';
import SuccessAlert from '../alerts/SuccessAlert';
import { formatDate } from './dateHelper';

function Post({
  id,
  title,
  link,
  created_at,
  text,
  image_url,
  isAdmin,
}: IPost) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const creationDate = formatDate(created_at);

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePosts,
    onSuccess: () => {
      setIsSuccess(true);
      client.invalidateQueries({
        queryKey: [constants.posts.FETCH_POSTS],
      });
    },
  });

  const handleDeleteConfirm = async () => {
    setIsDeleting(false);
    try {
      await mutation.mutateAsync(id);
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleSuccessAlertClose = () => {
    setIsSuccess(false);
    setIsDeleting(false);
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative hidden h-[336px] w-[442px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92] md:flex md:w-[340px] 5xl:h-[336px] 5xl:w-[464px]"
    >
      <div className="relative">
        <div
          className={`absolute inset-0 h-[150px] w-full bg-cover bg-center grayscale transition-all ${isHovered && 'filter-none'}`}
          style={{ backgroundImage: `url(${image_url})` }}
          title={title}
        >
        </div>
        <p className="backdrop-brightness-10 absolute left-0 top-0 z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white backdrop-blur-sm">
          {creationDate}
        </p>
      </div>

      <div className="z-10 h-[55%] bg-black p-6 md:p-3 xl:p-6">
        <h4 className="pb-4 text-left text-[16px] font-semibold text-white md:pb-4 md:text-base xl:pb-6 xl:text-xl">
          <a href={link} target="_blank">
            {title}
          </a>
        </h4>

        <p className="mb-2 text-[14px] text-white md:line-clamp-4 xl:line-clamp-4">
          {text}
        </p>
      </div>
      {isAdmin && (
        <div className="absolute bottom-[5px] right-[12px] z-10 flex gap-[24px]">
          <button
            className="flex size-[32px] items-center justify-center bg-white"
            onClick={() => setIsDeleting(true)}
          >
            <svg width={28} height={28}>
              <use href="/Icons/sprite.svg#icon-drop"></use>
            </svg>
          </button>
          <button className="flex size-[32px] items-center justify-center bg-white">
            <Link href={`/admin/posts/edit/${id}`}>
              <svg width={28} height={28}>
                <use href="/Icons/sprite.svg#icon-pen"></use>
              </svg>
            </Link>
          </button>
        </div>
      )}
      {isDeleting && !isSuccess && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити пост зі сторінки?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Статтю видалено"
          onClose={handleSuccessAlertClose}
          isSuccess={isSuccess}
        />
      )}
    </article>
  );
}

export default Post;
