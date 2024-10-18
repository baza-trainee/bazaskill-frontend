'use client';

import type {
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import type { ISpecialization } from '@/types/specialization';

import { createCard } from '@/api/cards';
import { getSpecializations } from '@/api/specialization';
import { constants } from '@/constants';

import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputDoc from '../ui/FileInputDoc';
import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import { cardValidation } from './scheme';

function AddCard() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(cardValidation),
    mode: 'onChange',
    defaultValues: {
      image: [],
      name: '',
      specialization: '',
    },
  });

  const specialization: UseQueryResult<
    ISpecialization[],
    Error
  > = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });

  const { mutate } = useMutation({
    mutationKey: [constants.cards.ADD_CARD],
    mutationFn: createCard,
    onSuccess: () => {
      setIsProcessing(false);
      queryClient.invalidateQueries({
        queryKey: [constants.cards.GET_CARDS],
      });
      setIsProcessing(false);
      router.push('/admin/cards');
    },
    onError: (error) => {
      alert(error);
      setIsProcessing(false);
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (
    values,
  ) => {
    setIsProcessing(true);
    const specializationTitle: ISpecialization | undefined
      = specialization.data?.find(
        item =>
          item.id.toString() === values.specialization,
      );
    try {
      const formData = new FormData();
      formData.append('file', values.image[0]);
      formData.append('name', values.name);
      formData.append(
        'specialization',
        specializationTitle?.title as string,
      );
      mutate(formData);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative p-[24px]">
      <PageTitle title="Додати учасника"></PageTitle>
      <div className="mt-[80px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[597px] flex-col gap-[30px]"
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <TextInput
                  {...field}
                  errorText={
                    (
                      errors.name as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                  title="Ім’я"
                  placeholder="Введіть ім’я"
                />
              );
            }}
          />

          <Controller
            name="specialization"
            control={control}
            render={({
              field: { onChange, value },
              formState: { errors },
            }) => (
              <div className="flex w-full max-w-[242px] grow flex-col gap-[5px]">
                <label htmlFor="specialization">
                  Cпеціальність &nbsp;
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="specialization"
                  value={value}
                  onChange={onChange}
                  className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                >
                  <option value="">
                    Оберіть спеціальність
                  </option>
                  {specialization.data?.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <span className="font-sans text-[12px] text-error">
                  {
                    (
                      errors.specialization as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                </span>
              </div>
            )}
          />

          <FileInputDoc
            name="image"
            control={control}
            placeholder="Завантажте зображення"
            title="Фото"
            isRequired={true}
            accept="image/*"
          />

          <div className="flex w-full justify-between">
            <PrimaryButton
              text={
                isProcessing ? 'Обробка запиту' : 'Додати'
              }
              disabled={!isValid}
            />
            <SecondaryButton
              onClick={() => router.push('/admin/cards')}
              text="Скасувати"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
