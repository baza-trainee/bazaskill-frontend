import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from '@/types/posts';
import { formatDate } from './dateHelper';
import { constants } from '@/constants';
import SuccessAlert from '../alerts/SuccessAlert';

import { deletePosts } from '@/api/posts';
import {
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';
import QuestionAlert from '../alerts/QuestionAlert';

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
    } catch (error) {
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
      className="relative hidden h-[336px] w-[442px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92] md:flex  md:w-[340px] 5xl:h-[336px] 5xl:w-[464px]"
    >
      <div className="relative">
        <Image
          src={image_url}
          alt={title}
          width={250}
          height={150}
          className={`h-[100px] w-full object-cover grayscale ${isHovered && 'filter-none'} transition-all `}
        />
        <p className="absolute left-0 top-0 z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white">
          {creationDate}
        </p>
      </div>

      <div className="z-10 h-[69%] bg-black p-6 md:p-3 xl:p-6">
        <a href={link} target="_blank">
          <h4 className="pb-6 text-left text-xl font-semibold text-white md:pb-4 md:text-base xl:pb-6 xl:text-xl">
            {title}
          </h4>
        </a>
        <p className="text-lg text-white md:line-clamp-4 xl:line-clamp-4">
          {text}
        </p>
      </div>
      {isAdmin && (
        <div className="absolute bottom-[5px] right-[12px] z-10 flex gap-[32px]">
          <button
            className="flex h-[32px] w-[32px] items-center justify-center bg-white"
            onClick={() => setIsDeleting(true)}
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
};

export default Post;
