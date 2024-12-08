'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { changeEmail } from '@/utils/api/settings';
import { getProfile } from '@/utils/api/signIn';
import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';
import { constants } from '@/constants';
import type { IUser } from '@/types/singIn';

import Loader from '../../../shared/loader/Loader';
import SuccessAlert from '../alerts/SuccessAlert';
import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { defaultValues } from './defaultValues';
import { settingsScheme } from './settingsScheme';

function Settings() {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors, isDirty }
  } = useForm<z.infer<typeof settingsScheme>>({
    resolver: zodResolver(settingsScheme),
    mode: 'onChange',
    defaultValues
  });

  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: user, isFetching } = useQuery<IUser>({
    queryKey: [constants.profile.FETCH_PROFILE],
    queryFn: getProfile
  });

  console.log(user);

  useEffect(() => {
    if (!user) return;
    setValue('email', user.email);
    setValue('password', '......');
  }, [user]);

  console.log(watch());

  const onSubmit: SubmitHandler<z.infer<typeof settingsScheme>> = async (
    values: z.infer<typeof settingsScheme>
  ) => {
    try {
      setIsProcessing(true);
      const response = await changeEmail({
        id: user?.id as string,
        email: values.email
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
    <div className="relative h-screen max-h-screen p-[24px]">
      <PageTitle title="Налаштування"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form className="w-[597px] flex-col" onSubmit={handleSubmit(onSubmit)}>
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
            <div className=" mb-[50px] flex items-end  gap-[20px]">
              {' '}
              <div>
                {' '}
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      title="Пароль"
                      placeholder="Пароль"
                      errorText={errors.password?.message}
                      isPassword
                    />
                  )}
                />
              </div>
              <div className="size-[44px]">
                {' '}
                <button type="button">
                  <Link href="settings/edit">
                    <WriteIcon className="size-[44px] bg-white" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton
              text={isProcessing ? 'Обробка запиту...' : 'Зберегти зміни'}
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={!!Object.keys(errors).length || !isDirty}
            />
            <SecondaryButton text="Скасувати" type="reset" onClick={handleCloseAndReset} />
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
      {isFetching && <Loader />}
    </div>
  );
}

export default Settings;
