'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';

import { createSpecialization } from '@/utils/api/specialization';
import { constants } from '@/constants';

import SuccessAlert from '../alerts/SuccessAlert';
import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import type { TSpecializationScheme } from './scheme';
import { specializationScheme } from './scheme';

function AddSpecialization() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors }
  } = useForm<TSpecializationScheme>({
    mode: 'onChange',
    defaultValues: {
      title: ''
    },
    resolver: zodResolver(specializationScheme)
  });

  const { mutate } = useMutation({
    mutationKey: [constants.specialization.ADD_SPECIALIZATION],
    mutationFn: createSpecialization,
    onSuccess: () => {
      setIsProcessing(false);
      queryClient.invalidateQueries({
        queryKey: [constants.specialization.FETCH_SPECIALIZATIONS]
      });
      router.push('/admin/specializations');
    },
    onError: (error) => {
      alert(error);
      setIsProcessing(false);
    }
  });

  const onSubmit: SubmitHandler<TSpecializationScheme> = async (data) => {
    try {
      setIsProcessing(true);
      mutate(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCloseSuccessAlert = () => {
    setIsSuccess(false);
    router.push('/admin/specializations');
  };

  return (
    <div className="pl-[24px] pt-[20px]">
      <PageTitle title="Додати спеціалізацію" />
      <section className="pt-[50px]">
        <form className="flex flex-col gap-[50px]" onSubmit={handleSubmit(onSubmit)}>
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
            <PrimaryButton text={isProcessing ? 'Обробка запиту' : 'Додати'} disabled={!isDirty} />
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
            title="Спеціалізація успішно додана"
            onClose={handleCloseSuccessAlert}
            isSuccess={isSuccess}
          />
        )}
      </section>
    </div>
  );
}

export default AddSpecialization;
