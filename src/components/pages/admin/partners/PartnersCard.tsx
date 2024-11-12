'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePartners } from '@/api/partners';
import TrashIcon from '@/components/shared/icons/Admin-icons/TrashIcon';
import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';
import { constants } from '@/constants';
import type { TPartner } from '@/types/partners';

import QuestionAlert from '../alerts/QuestionAlert';
import SuccessAlert from '../alerts/SuccessAlert';

function PartnersCard({
  item,
  isEditing,
  showName = true
}: {
  item: TPartner;
  isEditing: boolean;
  showName?: boolean;
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const deletePartnersMutation = useMutation({
    mutationFn: deletePartners,
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({
        queryKey: [constants.partners.FETCH_PARTNERS]
      });
    }
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
      <div className="relative flex size-[286px] flex-col items-center justify-center rounded-xl border-4">
        <div className=" flex items-center justify-center gap-[129px]">
          <div
            className="
           flex-1 items-center justify-center gap-[24px]"
          >
            <Image
              src={item.image_url}
              alt={item.name}
              width={200}
              height={151}
              className="rounded-[8px] object-cover"
            />
          </div>
        </div>
        <Link className="absolute bottom-6" href={item.partner_url}>
          {showName && (
            <h4 className="flex justify-center font-tahoma font-bold tracking-[.72px] text-white">
              {item.name}
            </h4>
          )}
        </Link>

        {!isEditing && (
          <div className="absolute bottom-0 right-0 flex gap-[32px] rounded-tl-lg bg-white p-2 ">
            <Link href={`/admin/partners/edit/${item.id}`}>
              <WriteIcon className="size-[32px] fill-black" />
            </Link>
            <button
              type="button"
              onClick={() => setIsDeleting(true)}
              className="cursor-pointer"
            >
              <TrashIcon className="size-[32px] cursor-pointer " />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default PartnersCard;
