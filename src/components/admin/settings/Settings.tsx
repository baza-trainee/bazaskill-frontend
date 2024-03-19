'use client';

import React, { useState } from 'react';
import {
  useForm,
  Controller,
  SubmitHandler,
} from 'react-hook-form';
import PageTitle from '../ui/PageTitle';
import PasswordInput from '../ui/PasswordInput';
import NotEyeIcon from '@/components/icons/Admin-icons/NotEyeIcon';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TextInput from '../ui/TextInput';
import Link from 'next/link';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { defaultValues } from './defaultValues';
import { settingsScheme } from './settingsScheme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface CounterFormValues {
  email: string;
  password: string;
}

const Settings = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof settingsScheme>>({
    resolver: zodResolver(settingsScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });
  const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<CounterFormValues> = (
    data
  ) => {
    console.log(data);
    setShowModal(true);
    reset();
  };

  const handleCloseAndReset = () => {
    setShowModal(false);
    reset();
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Налаштування"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form
          className="w-[597px] flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-[50px]">
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type="email"
                    isIcon={true}
                    errorText={errors.email?.message}
                    title="Email"
                  />
                )}
              />
            </div>
            <div className=" mb-[50px] flex gap-[20px]">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Пароль"
                    placeholder="Пароль"
                    errorText={errors.password?.message}
                    iconComponent={<NotEyeIcon />}
                  />
                )}
              />
              <div className="pt-[34px]">
                <button type="button">
                  <Link href="settings/edit">
                    <WriteIcon className="h-[44px] w-[44px] bg-white" />
                  </Link>
                </button>
              </div>
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
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="h-[223px] w-[600px] rounded-[10px] bg-white text-black">
                <button
                  onClick={handleCloseAndReset}
                  className="ml-[530px] mr-[40px] mt-[45px] text-[20px] text-gray"
                >
                  X
                </button>
                <p className="mt-[28px] flex items-center justify-center text-[24px] font-bold">
                  Дані змінено
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
