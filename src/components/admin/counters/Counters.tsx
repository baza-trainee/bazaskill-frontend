'use client';

import type {
  SubmitHandler,
} from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import type { ICounters } from '@/types/counters';

import { getCounters, updateCounter } from '@/api/counters';
import { constants } from '@/constants';

import Loader from '../../shared/loader/Loader';
import SuccessAlert from '../alerts/SuccessAlert';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import { countersScheme } from './countersScheme';
import { defaultValues } from './defaultValues';

function Counters() {
  const [id, setId] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const { data, refetch, isFetching, error } = useQuery<
    ICounters[],
    Error
  >({
    queryKey: [constants.counters.FETCH_COUNTERS],
    queryFn: getCounters,
  });

  console.log(data);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof countersScheme>>({
    resolver: zodResolver(countersScheme),
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const value: ICounters = data[0];
      setId(Number(data[0].id));
      reset({
        liveProject: value.liveProject.toString(),
        members: value.members.toString(),
        employed: value.employed.toString(),
        technologies: value.technologies.toString(),
        libraries: value.libraries.toString(),
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
          liveProject: Number(values.liveProject),
          members: Number(values.members),
          employed: Number(values.employed),
          technologies: Number(values.technologies),
          libraries: Number(values.libraries),
        },
      });
      refetch();
      setShowModal(true);
      reset();
    }
    catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
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
    <div className="relative p-[24px]">
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
                name="liveProject"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Живих проектів"
                    placeholder="Введіть кількість"
                    errorText={errors.liveProject?.message}
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="members"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Залучених учасників"
                    placeholder="Вкажіть кількість"
                    errorText={errors.members?.message}
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
              text="Зберегти зміни"
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
              title="Дані збережено"
              onClose={() => setShowModal(false)}
              isSuccess={true}
            />
          )}
        </form>
      </div>
      {isFetching && <Loader />}
    </div>
  );
}

export default Counters;
