'use client';

import React, { useEffect, useState } from 'react';
import {
  useForm,
  Controller,
  SubmitHandler,
} from 'react-hook-form';
import { z } from 'zod';
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
import { ICounters } from '@/types/counters';
import SuccessAlert from '../alerts/SuccessAlert';

const Counters = () => {
  const [id, setId] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const { data, refetch, isFetching, error } = useQuery<
    ICounters[],
    Error
  >({
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

  useEffect(() => {
    if (data && data.length > 0) {
      const value: ICounters = data[0];
      setId(Number(data[0].id));
      reset({
        live_projects: value.live_projects,
        participants: value.participants,
        employed: value.employed,
        technologies: value.technologies,
        libraries: value.libraries,
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<
    z.infer<typeof countersScheme>
  > = async (values: z.infer<typeof countersScheme>) => {
    try {
      await updateCounter({
        id,
        updateData: {
          live_projects: Number(values.live_projects),
          participants: Number(values.participants),
          employed: Number(values.employed),
          technologies: Number(values.technologies),
          libraries: Number(values.libraries),
        },
      });
      refetch();
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
              text="Зберігти зміни"
              type="submit"
              onClick={handleSubmit(onSubmit)}
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
          {showModal && (
            <SuccessAlert
              title="PDF документ успішно оновлено"
              onClose={() => setShowModal(false)}
              isSuccess={true}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Counters;
