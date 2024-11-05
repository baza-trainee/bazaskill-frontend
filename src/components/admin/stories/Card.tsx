'use client';

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/formatData";
import Image from "next/image";
import { IStory } from "@/types/stories";
import Link from "next/link";
import { deleteStories } from "@/api/stories";
import { constants } from "@/constants";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import QuestionAlert from "../alerts/QuestionAlert";
import SuccessAlert from "../alerts/SuccessAlert";

export default function JuniorCard({ data }: { data: IStory }): JSX.Element {
  const t = useTranslations('Why_juniors.history-juniors');
  const locale: string = useLocale();
  const [isSuccess, setIsSuccess] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const client = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteStories,
    onSuccess: () => {
      setIsSuccess(true)
      client.invalidateQueries({
        queryKey: [constants.stories.GET_STORIES],
      })
    },
  })


  const handleDeleteConfirm = async () => {
    setIsDeleting(false)
    try {
      await mutation.mutateAsync(data.id)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSuccessAlertClose = () => {
    setIsSuccess(false)
    setIsDeleting(false)
  }

  return (
    <article className="flex items-center justify-center relative">
      <div className="bg-secondaryGray rounded-2xl p-4  h-[336px] w-[442px] max-w-[442px]">
        <div className="relative w-full h-full rounded-md overflow-hidden">
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
            className={clsx("absolute z-10 bottom-0 left-0 text-white font-normal md:font-semibold px-1 p-1 md:px-6 md:pt-6 flex flex-col h-full md:h-fit overflow-y-auto")}>

            <h3 className="text-xl md:text-2xl font-bold md:mb-6 -order-2 md:order-none">{data.name_ua}</h3>

            <p className="text-base md:text-xl mb-4 md:mb-0">{data.speciality}</p>
            <p className="text-sm md:mb-5 -order-1 md:order-none">
              {formatDate(data.created_at, locale)}
            </p>

            <p className={clsx("text-sm md:text-xl mb-3 md:mb-6 mt-auto md:mt-0 ",'line-clamp-4 md:line-clamp-2')}>
              {data.text_ua}
            </p>

            <button type="button"
              className="min-w-[230px] sm:max-w-[240px] flex items-center justify-center px-1 py-4 main-gradient text-black rounded-md mb-1 md:mb-6 text-xl">
              {t("btn_details")}
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
  )
}