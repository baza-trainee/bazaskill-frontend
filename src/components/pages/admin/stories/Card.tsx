'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';

import { deleteStories } from '@/api/stories';
import { constants } from '@/constants';
import { formatDate } from '@/lib/formatData';
import { IStory } from '@/types/stories';

import QuestionAlert from '../alerts/QuestionAlert';
import SuccessAlert from '../alerts/SuccessAlert';

export default function JuniorCard({ data }: { data: IStory }): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteStories,
    onSuccess: () => {
      setIsSuccess(true);
      client.invalidateQueries({
        queryKey: [constants.stories.GET_STORIES]
      });
    }
  });

  const handleDeleteConfirm = async () => {
    setIsDeleting(false);
    try {
      await mutation.mutateAsync(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccessAlertClose = () => {
    setIsSuccess(false);
    setIsDeleting(false);
  };

  return (
    <article className="relative flex items-center justify-center">
      <div className="h-[336px] w-[442px] max-w-[442px]  rounded-2xl bg-secondaryGray p-4">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src={data.image_url}
            fill
            alt={data.name_ua}
            sizes="100%"
            objectFit="cover"
            objectPosition="top"
            className="brightness-[60%]"
          />

          <div
            className={clsx(
              'absolute bottom-0 left-0 z-10 flex h-full flex-col overflow-y-auto p-1 px-1 font-normal text-white md:h-fit md:px-6 md:pt-6 md:font-semibold'
            )}
          >
            <h3 className="-order-2 text-xl font-bold md:order-none md:mb-6 md:text-2xl">
              {data.name_ua}
            </h3>

            <p className="mb-4 text-base md:mb-0 md:text-xl">
              {data.speciality}
            </p>
            <p className="-order-1 text-sm md:order-none md:mb-5">
              {formatDate(data.created_at, locale)}
            </p>

            <p
              className={clsx(
                'mb-3 mt-auto text-sm md:mb-6 md:mt-0 md:text-xl ',
                'line-clamp-4 md:line-clamp-2'
              )}
            >
              {data.text_ua}
            </p>

            <button
              type="button"
              className="main-gradient mb-1 flex min-w-[230px] items-center justify-center rounded-md px-1 py-4 text-xl text-black sm:max-w-[240px] md:mb-6"
            >
              {t('btn_details')}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[5px] right-[12px] z-10 flex gap-[24px]">
        <button
          onClick={() => setIsDeleting(true)}
          className="flex size-[32px] items-center justify-center bg-white"
        >
          <svg width={28} height={28}>
            <use href="/Icons/sprite.svg#icon-drop"></use>
          </svg>
        </button>
        <button className="flex size-[32px] items-center justify-center bg-white">
          <Link href={`/admin/stories/edit/${data.id}`}>
            <svg width={28} height={28}>
              <use href="/Icons/sprite.svg#icon-pen"></use>
            </svg>
          </Link>
        </button>
      </div>
      {isDeleting && !isSuccess && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити цю історію?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Історію успішно видалено"
          onClose={handleSuccessAlertClose}
          isSuccess={isSuccess}
        />
      )}
    </article>
  );
}
