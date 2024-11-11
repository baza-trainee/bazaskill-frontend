'use client';

import type {
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  SubmitHandler,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import type { Specialization } from '@/types/specialization';

import {
  getSpecializationById,
  updateSpecialization,
} from '@/api/specialization';
import { constants } from '@/constants';

import type {
  TSpecializationScheme,
} from './scheme';

import SuccessAlert from '../alerts/SuccessAlert';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import {
  specializationScheme,
} from './scheme';

function EditSpecialization({ id }: { id: string }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { isDirty, errors },
  } = useForm<TSpecializationScheme>({
    mode: 'onChange',
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(specializationScheme),
  });

  const specialization: UseQueryResult<
    Specialization,
    Error
  > = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATION_BY_ID,
    ],
    queryFn: () => getSpecializationById(id),
  });

  useEffect(() => {
    setValue('title', specialization.data?.title as string);
  }, [specialization]);

  const { mutate } = useMutation({
    mutationKey: [
      constants.specialization.UPDATE_SPECIALIZATION,
    ],
    mutationFn: (params: any) =>
      updateSpecialization(params.id, params.data),
    onSuccess: () => {
      setIsProcessing(false);
      queryClient.invalidateQueries({
        queryKey: [
          constants.specialization.FETCH_SPECIALIZATIONS,
        ],
      });
      router.push('/admin/specializations');
    },
    onError: (error) => {
      alert(error);
      setIsProcessing(false);
    },
  });

  const onSubmit: SubmitHandler<
    TSpecializationScheme
  > = async (data) => {
    try {
      setIsProcessing(true);
      mutate({ id, data });
    }
    catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
    finally {
      setIsProcessing(false);
    }
  };

  const handleCloseSuccessAlert = () => {
    setIsSuccess(false);
    router.push('/admin/posts');
  };

  return (
    <div className="pl-[24px] pt-[20px]">
      <PageTitle title="Редагувати спеціалізацію" />
      <section className="pt-[50px]">
        <form
          className="flex flex-col gap-[50px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => {
              return (
                <TextInput
                  {...field}
                  errorText={errors.title?.message}
                  title="Назва спеціалізації"
                  placeholder="Введіть назву спеціалізації"
                />
              );
            }}
          />
          <div className="flex gap-[24px]">
            <PrimaryButton
              text={
                isProcessing
                  ? 'Обробка запиту'
                  : 'Зберегти зміни'
              }
              disabled={!isDirty}
            />
            <SecondaryButton
              text="Скасувати"
              onClick={() => {
                reset();
                router.push('/admin/specializations');
              }}
            />
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Спеціалізація успішно змінена"
            onClose={handleCloseSuccessAlert}
            isSuccess={isSuccess}
          />
        )}
      </section>
    </div>
  );
}

export default EditSpecialization;
