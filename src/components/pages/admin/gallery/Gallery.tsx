'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteImage, getImages } from '@/api/gallery';
import PlusIcon from '@/components/shared/icons/Admin-icons/PlusIcon';
import { constants } from '@/constants';
import type { IImage } from '@/types/gallery';

import Loader from '../../../shared/loader/Loader';
import QuestionAlert from '../alerts/QuestionAlert';
import PageTitle from '../ui/PageTitle';

function Gallery() {
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { data, isFetching } = useQuery<IImage[], Error>({
    queryKey: [constants.gallery.GET_IMAGES],
    queryFn: getImages
  });

  const deleteMutation = useMutation({
    mutationKey: [constants.gallery.DELETE_IMAGE],
    mutationFn: (id: string) => deleteImage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.gallery.GET_IMAGES]
      });
      setIsLoading(false);
    },
    onError: (error) => {
      alert(error);
    }
  });

  const handleDelete = async () => {
    setIsDeleting(false);
    setIsLoading(true);
    try {
      await deleteMutation.mutateAsync(currentId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative p-[24px]">
      <PageTitle title="Галерея"></PageTitle>
      <div className="mx-auto mt-[80px] w-[90%]">
        <ul className="flex flex-wrap justify-center xs:gap-[20px] md:gap-[24px] xl:gap-[16px] 2xl:gap-[32px] 4xl:gap-[40px] 5xl:gap-[50px]">
          <li className="relative overflow-hidden rounded-[100px] border-[#7EFE92] hover:cursor-pointer">
            <Link
              href="/admin/gallery/add"
              className="flex flex-col items-center"
            >
              <PlusIcon />
            </Link>
          </li>
          {data &&
            Array.isArray(data) &&
            data?.map((photo, index) => (
              <li
                key={index}
                className="relative overflow-hidden rounded-[100px] grayscale hover:scale-105 hover:cursor-pointer"
              >
                <Image
                  src={photo.image_url}
                  width={117}
                  height={117}
                  alt="specialist"
                  className="zoom hover:scale-103 xs:size-[80px] xl:size-[112px] 2xl:size-[117px] 5xl:size-[132px]"
                />
                <div className="absolute bottom-[12px] right-[12px] z-10 flex gap-[32px]">
                  <button
                    onClick={() => {
                      setIsDeleting(true);
                      setCurrentId(photo.id.toString());
                    }}
                    className="flex size-[32px] items-center justify-center bg-white"
                  >
                    <svg width={28} height={28}>
                      <use href="/Icons/sprite.svg#icon-drop"></use>
                    </svg>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {(isFetching || isLoading) && <Loader />}
      {isDeleting && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити фото зі сторінки?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Gallery;
