'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
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

import { getPartners } from '@/api/partners';
import SuccessAlert from '../alerts/SuccessAlert';
import { useQuery } from '@tanstack/react-query';

const AddPartners = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data } = useQuery({
    queryKey: [constants.partners.FETCH_PARTNERS],
    queryFn: getPartners,
  });
  console.log('data', data);
  const {
    handleSubmit,
    control,
    formState: { isDirty },
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
      if (values.logo.length) {
        formData.append('file', values.logo[0]);
      }
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Додати партнера" />
      <div className="mt-[80px] flex gap-[180px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[597px] flex-col gap-[30px]"
        >
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => {
                console.log(field);
                return (
                  <TextInputPartner
                    {...field}
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
              name="logo"
              control={control}
              render={({ field }) => (
                <FileInputPartner
                  {...field}
                  control={control}
                  placeholder="Завантажте логотип"
                  title="Логотип партнера"
                  isRequired={true}
                />
              )}
            />
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton
              type="submit"
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
            title="Лого успішно додане"
            onClose={() => setIsSuccess(false)}
            isSuccess={isSuccess}
          />
        )}
        <div>
          <div className="relative flex h-[286px] w-[286px] flex-col items-center justify-center rounded-xl border-4">
            <div className="flex gap-[129px]">
              <div className="flex items-center gap-[24px] ">
                {/* <Image
                  src={item.image}
                  alt={item.name}
                  width={273}
                  height={61}
                  className=" rounded-[8px] "
                /> */}
              </div>
            </div>
            <div className="w-[159px] text-start">
              <h4 className="font-tahoma font-bold tracking-[.72px] text-white ">
                {/* {item.name} */}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPartners;
