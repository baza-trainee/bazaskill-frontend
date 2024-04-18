'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Partners } from '@/types/partners';
import Link from 'next/link';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import { deletePartners } from '@/api/partners';
import QuestionAlert from '../alerts/QuestionAlert';
import SuccessAlert from '../alerts/SuccessAlert';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { constants } from '@/constants';

const PartnersCard = ({
  item,
  isEditing,
  showName = true,
}: {
  item: Partners;
  isEditing: boolean;
  showName?: boolean;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const deletePartnersMutation = useMutation({
    mutationFn: deletePartners,
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({
        queryKey: [constants.partners.FETCH_PARTNERS],
      });
    },
  });

  const handleDeleteConfirm = async () => {
    setIsDeleting(false);
    try {
      await deletePartnersMutation.mutateAsync(item.id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSuccessAlertClose = () => {
    setIsSuccess(false);
    setIsDeleting(false);
  };

  return (
    <>
      {isDeleting && !isSuccess && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити партнера зі сторінки?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Партнера видалено"
          onClose={handleSuccessAlertClose}
          isSuccess={isSuccess}
        />
      )}
      <div className="relative flex h-[286px] w-[286px] flex-col items-center justify-center rounded-xl border-4">
        <div className=" flex items-center justify-center gap-[129px]">
          <div
            className="
           flex-1 items-center justify-center gap-[24px]"
          >
            <Image
              src={item.image_url}
              alt={item.name}
              width={273}
              height={61}
              className=" object-fit h-[61px] rounded-[8px]"
            />
          </div>
        </div>
        <Link
          className="absolute bottom-6"
          href={item.partner_url}
        >
          {showName && (
            <h4 className="flex justify-center font-tahoma font-bold tracking-[.72px] text-white">
              {item.name}
            </h4>
          )}
        </Link>

        {!isEditing && (
          <div className="absolute bottom-0 right-0 flex gap-[32px] rounded-tl-lg bg-white p-2 ">
            <Link href={`/admin/partners/edit/${item.id}`}>
              <WriteIcon className="h-[32px] w-[32px] fill-black" />
            </Link>
            <button
              type="button"
              onClick={() => setIsDeleting(true)}
              className="cursor-pointer"
            >
              <TrashIcon className="h-[32px] w-[32px] cursor-pointer " />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PartnersCard;
