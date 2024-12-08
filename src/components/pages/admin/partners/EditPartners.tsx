'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { getPartnersId, updatePartners } from '@/utils/api/partners';
import { constants } from '@/constants';

import SuccessAlert from '../alerts/SuccessAlert';
import FileInputPartner from '../ui/FileInputPartner';
import PageTitle from '../ui/PageTitle';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PartnersCard from './PartnersCard';
import { partnersScheme } from './schema';

function EditPartners() {
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
    queryFn: () => getPartnersId(id)
  });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<z.infer<typeof partnersScheme>>({
    resolver: zodResolver(partnersScheme),
    mode: 'onChange'
  });

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('partner_url', data.partner_url);
    }
  }, [data, setValue]);

  const onSubmit: SubmitHandler<z.infer<typeof partnersScheme>> = async (
    values: z.infer<typeof partnersScheme>
  ) => {
    try {
      setIsProcessing(true);

      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('partner_url', values.partner_url);

      if (file) {
        formData.append('file', file);
      }
      const response = await updatePartners(id, formData);
      if (response.status === 200) {
        setIsSuccess(true);
        refetch();
      }
      setIsProcessing(false);
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
      <PageTitle title="Редагування данних партнерів" />
      <div className="mt-[80px] flex flex-wrap gap-[180px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-[597px] flex-col gap-[30px]">
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
              text={isProcessing ? 'Обробка запиту' : 'Зберегти зміни'}
              disabled={errors && !!Object.keys(errors).length}
            />
            <SecondaryButton onClick={() => router.refresh()} text="Скасувати" />
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Партнера оновлено"
            onClose={() => {
              setIsSuccess(false);
              router.push('/admin/partners');
            }}
            isSuccess={isSuccess}
          />
        )}
        <div>
          <PartnersCard isEditing={true} item={data} />
        </div>
      </div>
    </div>
  );
}

export default EditPartners;
