'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';
import PageTitle from '../ui/PageTitle';
import PasswordInput from '../ui/PasswordInput';
import NotEyeIcon from '@/components/icons/Admin-icons/NotEyeIcon';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';

const EditSettings = () => {
  const { handleSubmit, control, reset } = useForm();
  const handleCancel = () => {
    reset();
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Змінити пароль"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form
          className="flex w-[597px] flex-col gap-[30px]"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            handleCancel();
          })}
        >
          <div className="mb-[50px] flex flex-col gap-[50px]">
            <div>
              <Controller
                name="old-password"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Старий пароль"
                    placeholder="Введіть старий пароль"
                    iconComponent={<NotEyeIcon />}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="new-password"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Новий пароль"
                    placeholder="Введіть новий пароль"
                    iconComponent={<NotEyeIcon />}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="repeat-password"
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    title="Повторіть новий пароль"
                    placeholder="Повторіть новий пароль"
                    iconComponent={<NotEyeIcon />}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton text="Зберігти зміни" />
            <SecondaryButton
              text="Скасувати"
              type="reset"
              onClick={handleCancel}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSettings;
