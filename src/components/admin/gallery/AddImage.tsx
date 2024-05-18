'use client';

import React, { useEffect, useState } from 'react';
import { createImage } from '@/api/gallery';
import { constants } from '@/constants';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { TGalleryScheme, imageValidation } from './scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import PageTitle from '../ui/PageTitle';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputDoc from '../ui/FileInputDoc';

const AddImage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [image, setImage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { isValid },
  } = useForm<TGalleryScheme>({
    resolver: zodResolver(imageValidation),
    mode: 'onChange',
    defaultValues: { image: [] },
  });

  const currentValues = watch();

  const { mutate } = useMutation({
    mutationKey: [constants.gallery.ADD_IMAGE],
    mutationFn: createImage,
    onSuccess: () => {
      setIsProcessing(false);
      queryClient.invalidateQueries({
        queryKey: [constants.gallery.GET_IMAGES],
      });
      setIsProcessing(false);
      router.push('/admin/gallery');
    },
    onError: (error) => {
      alert(error);
      setIsProcessing(false);
    },
  });

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file);
    setImage(img);
  };

  useEffect(() => {
    if (!currentValues.image?.length) return;
    const file = currentValues.image[0];
    setImagePreview(file);
  }, [currentValues.image]);

  const onSubmit: SubmitHandler<TGalleryScheme> = async (
    values: TGalleryScheme
  ) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('file', values.image[0]);
      mutate(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative p-[24px]">
      <PageTitle title="Додати фото"></PageTitle>
      <div className="mt-[80px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[597px] flex-col gap-[30px]"
        >
          <div className="flex w-full justify-between">
            <FileInputDoc
              name="image"
              control={control}
              placeholder={'Завантажте зображення'}
              title="Фото"
              isRequired={true}
              accept="image"
            />

            <Image
              src={
                image
                  ? image
                  : '/images/gallery-placeholder.jpg'
              }
              width={117}
              height={117}
              alt="specialist"
              className="rounded-full xs:h-[80px] xs:w-[80px] xl:h-[112px] xl:w-[112px]  2xl:h-[117px] 2xl:w-[117px] 5xl:h-[132px] 5xl:w-[132px]"
            />
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton
              text={
                isProcessing ? 'Обробка запиту' : 'Додати'
              }
              disabled={!isValid}
            />
            <SecondaryButton
              onClick={() => {
                reset();
                router.push('/admin/gallery');
              }}
              text="Скасувати"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImage;
