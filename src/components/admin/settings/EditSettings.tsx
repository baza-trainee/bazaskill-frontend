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
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { defaultValues } from './editSettingsDefaultValues';
import { settingsScheme } from './editSettingsScheme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface CounterFormValues {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}

const EditSettings = () => {
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
      <PageTitle title="Змінити пароль"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form
          className="flex w-[597px] flex-col gap-[30px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-[50px] flex flex-col gap-[50px]">
            <div>
              <Controller
                name="oldPassword"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Старий пароль"
                    placeholder="Введіть старий пароль"
                    errorText={errors.oldPassword?.message}
                    iconComponent={<NotEyeIcon />}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Новий пароль"
                    placeholder="Введіть новий пароль"
                    errorText={errors.newPassword?.message}
                    iconComponent={<NotEyeIcon />}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="repeatPassword"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Повторіть новий пароль"
                    placeholder="Повторіть новий пароль"
                    errorText={
                      errors.repeatPassword?.message
                    }
                    iconComponent={<NotEyeIcon />}
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

export default EditSettings;
