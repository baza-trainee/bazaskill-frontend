'use client';

import type {
  SubmitHandler,
} from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import { createPartners } from '@/api/partners';

import SuccessAlert from '../alerts/SuccessAlert';
import { defaultValues } from '../partners/defaultValues';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputPartner from '../ui/FileInputPartner';
import PageTitle from '../ui/PageTitle';
import TextInputPartner from '../ui/TextInputPartner';
import { partnersScheme } from './partnersScheme';

function AddPartners() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors },
  } = useForm<z.infer<typeof partnersScheme>>({
    resolver: zodResolver(partnersScheme),
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof partnersScheme>
  > = async (values: z.infer<typeof partnersScheme>) => {
    try {
      setIsProcessing(true);
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('partner_url', values.partner_url);

      if (file) {
        formData.append('file', file);
      }
      const response = await createPartners(formData);
      if (response.status === 201) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
      reset();
    }
    catch (errors: unknown) {
      console.log(errors);
    }
    finally {
      setIsProcessing(false);
    }
  };
  const handleCloseSuccessAlert = () => {
    setIsSuccess(false);
    router.push('/admin/partners');
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Додати партнера" />
      <div className="mt-[80px] flex flex-wrap gap-[180px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[597px] flex-col gap-[30px]"
        >
          <div className="w-full">
            <Controller
              name="name"
              control={control}
              render={({ field }) => {
                return (
                  <TextInputPartner
                    {...field}
                    errorText={errors.name?.message}
                    isRequired={true}
                    placeholder="Введіть назву"
                    title="Назва партнера"
                  />
                );
              }}
            />
          </div>
          <div>
            <Controller
              name="partner_url"
              control={control}
              render={({ field }) => (
                <TextInputPartner
                  {...field}
                  errorText={errors.partner_url?.message}
                  isRequired={true}
                  placeholder="partner_url"
                  title="partner_url"
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
                isProcessing ? 'Обробка запиту' : 'Додати'
              }
              disabled={!isDirty}
            />
            <SecondaryButton
              onClick={() => reset()}
              text="Скасувати"
            />
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Партнера успішно додано"
            onClose={handleCloseSuccessAlert}
            isSuccess={isSuccess}
          />
        )}
      </div>
    </div>
  );
}

export default AddPartners;
