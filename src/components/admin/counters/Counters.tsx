'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import {
  useForm,
  Controller,
  SubmitHandler,
} from 'react-hook-form';
import TextInput from '../ui/TextInput';
import PageTitle from '../ui/PageTitle';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { defaultValues } from './defaultValues';
import { countersScheme } from './countersScheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getCounters, updateCounter } from '@/api/counters';
import SuccessAlert from '../alerts/SuccessAlert';

// interface CounterFormValues {
//   live_projects: string;
//   participants: string;
//   employed: string;
//   technologies: string;
//   libraries: string;
// }

const Counters = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data } = useQuery({
    queryKey: [constants.counters.FETCH_COUNTERS],
    queryFn: getCounters,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof countersScheme>>({
    resolver: zodResolver(countersScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<
    z.infer<typeof countersScheme>
  > = async (values: z.infer<typeof countersScheme>) => {
    try {
      setIsProcessing(true);
      let currentId;
      const formData = new FormData();
      if (values.live_projects.length) {
        const currentItem = data?.find(
          (item) => item.title === 'live_projects'
        );
        currentId = currentItem?.id;
        formData.append('file', values.live_projects[0]);
      }
      if (values.participants.length) {
        const currentItem = data?.find(
          (item) => item.title === 'participants'
        );
        currentId = currentItem?.id;
        formData.append('file', values.participants[0]);
      }
      const response = await updateCounter(
        currentId as string,
        formData
      );
      if (response.status === 200) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
      reset();
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<
    HTMLFormElement
  > = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleCloseAndReset = () => {
    setShowModal(false);
    reset();
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Каунтер"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form
          className="flex w-[597px] flex-col gap-[30px]"
          onSubmit={handleSubmit(onSubmit)}
          onKeyPress={handleKeyPress}
        >
          <div className="mb-[50px] flex flex-col gap-[50px]">
            <div>
              <Controller
                name="live_projects"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Живих проектів"
                    placeholder="Введіть кількість"
                    errorText={
                      errors.live_projects?.message
                    }
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="participants"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Залучених учасників"
                    placeholder="Вкажіть кількість"
                    errorText={errors.participants?.message}
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="employed"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Працевлаштовано"
                    placeholder="Вкажіть кількість"
                    errorText={errors.employed?.message}
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="technologies"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Технологій"
                    placeholder="Вкажіть кількість"
                    errorText={errors.technologies?.message}
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="libraries"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Бібліотек"
                    placeholder="Вкажіть кількість"
                    errorText={errors.libraries?.message}
                    isIcon
                  />
                )}
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton
              text={
                isProcessing
                  ? 'Обробка запиту'
                  : 'Зберігти зміни'
              }
              type="submit"
              // onClick={handleSubmit(onSubmit)}
              disabled={
                !Object.keys(errors).length && !isDirty
              }
            />
            <SecondaryButton
              text="Скасувати"
              type="reset"
              onClick={handleCloseAndReset}
            />
          </div>
          {isSuccess && (
            <SuccessAlert
              title="Дані змінено"
              onClose={() => setIsSuccess(false)}
              isSuccess={isSuccess}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Counters;
