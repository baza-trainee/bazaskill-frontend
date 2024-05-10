'use client';

import Image from 'next/image';
import { deleteImage, getImages } from '@/api/gallery';
import { constants } from '@/constants';
import { IImage } from '@/types/gallery';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../ui/Loader';
import PageTitle from '../ui/PageTitle';
import QuestionAlert from '../alerts/QuestionAlert';
import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';
import Link from 'next/link';

const Gallery = () => {
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { data, isFetching } = useQuery<IImage[], Error>({
    queryKey: [constants.gallery.GET_IMAGES],
    queryFn: getImages,
  });

  const deleteMutation = useMutation({
    mutationKey: [constants.gallery.DELETE_IMAGE],
    mutationFn: (id: string) => deleteImage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.gallery.GET_IMAGES],
      });
      setIsLoading(false);
    },
    onError: (error) => {
      alert(error);
    },
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
              href={'/admin/gallery/add'}
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
                className="relative overflow-hidden rounded-[100px] grayscale filter hover:scale-105 hover:cursor-pointer"
              >
                <Image
                  src={photo.image_url}
                  width={117}
                  height={117}
                  alt="specialist"
                  className="zoom hover:scale-103 xs:h-[80px] xs:w-[80px] xl:h-[112px] xl:w-[112px] 2xl:h-[117px]  2xl:w-[117px] 5xl:h-[132px] 5xl:w-[132px]"
                />
                <div className="absolute bottom-[12px] right-[12px] z-10 flex gap-[32px]">
                  <button
                    onClick={() => {
                      setIsDeleting(true),
                        setCurrentId(photo.id.toString());
                    }}
                    className="flex h-[32px] w-[32px] items-center justify-center bg-white"
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
};

export default Gallery;
