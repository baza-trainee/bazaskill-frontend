'use client';
import React, { useState, useEffect } from 'react';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PageTitle from '../ui/PageTitle';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import {
  getPartnersId,
  updatePartners,
} from '@/api/partners';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { partnersScheme } from './partnersScheme';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import SuccessAlert from '../alerts/SuccessAlert';

const EditPartners = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };
  const { id } = useParams<{ id: string }>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [constants.partners.FETCH_PARTNERS, id],
    queryFn: () => getPartnersId(id),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors },
  } = useForm<z.infer<typeof partnersScheme>>({
    resolver: zodResolver(partnersScheme),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof partnersScheme>
  > = async (values: z.infer<typeof partnersScheme>) => {
    try {
      setIsProcessing(true);

      const formData = new FormData();
      formData.append('name', values.name);

      if (file) {
        formData.append('file', file);
      }
      const response = await updatePartners(id, formData);
      if (response.status === 200) {
        setIsSuccess(true);
        refetch();
      }
      setIsProcessing(false);
      reset();
    } catch (errors: unknown) {
      console.log(errors);
    } finally {
      setIsProcessing(false);
    }
  };
  if (!data || data === undefined || isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-[24px]">
      <PageTitle title="Редагувати партнера" />
      <div className="mt-[80px] flex flex-wrap gap-[180px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[597px] flex-col gap-[30px]"
        >
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInputPartner
                  {...field}
                  errorText={errors.name?.message}
                  placeholder="Введіть назву"
                  title="Назва партнера"
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="logo"
              control={control}
              render={({ field }) => (
                <FileInputPartner
                  {...field}
                  placeholder="Завантажте логотип"
                  title="Логотип партнера"
                  isRequired={true}
                  onChange={handleFileChange}
                />
              )}
            />
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton
              text={
                isProcessing
                  ? 'Обробка запиту'
                  : 'Зберегти зміни'
              }
              disabled={!isDirty}
            />
            <SecondaryButton
              onClick={() => router.refresh()}
              text="Скасувати"
            />
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Партнера оновлено"
            onClose={() => setIsSuccess(false)}
            isSuccess={isSuccess}
          />
        )}
        <div></div>
      </div>
    </div>
  );
};

export default EditPartners;
