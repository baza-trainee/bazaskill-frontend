'use client';

import React, { useState, useEffect } from 'react';
import {
  useForm,
  Controller,
  SubmitHandler,
} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { changeEmail } from '@/api/settings';
import { defaultValues } from './defaultValues';
import { settingsScheme } from './settingsScheme';
import PageTitle from '../ui/PageTitle';
import PasswordInput from '../ui/PasswordInput';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TextInput from '../ui/TextInput';
import Link from 'next/link';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import SuccessAlert from '../alerts/SuccessAlert';

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
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    reset({
      email: 'admin@mail.ua',
    });
  }, [reset]);

  const onSubmit: SubmitHandler<
    z.infer<typeof settingsScheme>
  > = async (values: z.infer<typeof settingsScheme>) => {
    try {
      setIsProcessing(true);
      const response = await changeEmail({
        id: '12',
        email: values.email,
      });
      if (response.status === 200) {
        console.log(values);
        setShowModal(true);
      }
      setIsProcessing(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Неочікувана помилка', error);
      }
    } finally {
      setIsProcessing(false);
    }
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
          onSubmit={handleSubmit(onSubmit)}>
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
                    placeholder="Email"
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
              text={
                isProcessing
                  ? 'Обробка запиту...'
                  : 'Зберегти зміни'
              }
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={
                !!Object.keys(errors).length || !isDirty
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
              title="Дані успішно змінено"
              onClose={handleCloseAndReset}
              isSuccess={showModal}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
