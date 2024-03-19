'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { constants } from '@/constants';
import { defaultValues } from '../partners/defaultValues';
import { partnersScheme } from './partnersScheme';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import PageTitle from '../ui/PageTitle';

import {
  createPartners,
  getPartners,
} from '@/api/partners';
import SuccessAlert from '../alerts/SuccessAlert';
import { useQuery } from '@tanstack/react-query';

const AddPartners = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const { data } = useQuery({
    queryKey: [constants.partners.ADD_PARTNERS],
    queryFn: getPartners,
  });
  console.log(data);
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors },
  } = useForm<z.infer<typeof partnersScheme>>({
    resolver: zodResolver(partnersScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
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
    } catch (errors: unknown) {
      console.log(errors);
    } finally {
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
                isProcessing
                  ? 'Обробка запиту'
                  : 'Зберегти зміни'
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
            title="Лого успішно додане"
            onClose={handleCloseSuccessAlert}
            isSuccess={isSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default AddPartners;
