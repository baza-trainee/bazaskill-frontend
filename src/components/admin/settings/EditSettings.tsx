'use client';

import type {
  SubmitHandler,
} from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import type { IUser } from '@/types/singIn';

import { changePassword } from '@/api/settings';
import { getProfile } from '@/api/signIn';
import { constants } from '@/constants';

import Loader from '../../shared/loader/Loader';
import SuccessAlert from '../alerts/SuccessAlert';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import { defaultValues } from './defaultValues';
import { defaultValuesEdit } from './editSettingsDefaultValues';
import { settingsScheme } from './editSettingsScheme';

function EditSettings() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof settingsScheme>>({
    resolver: zodResolver(settingsScheme),
    mode: 'onChange',
    defaultValues: defaultValuesEdit,
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const { data: user, isFetching } = useQuery<IUser>({
    queryKey: [constants.profile.FETCH_PROFILE],
    queryFn: getProfile,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof settingsScheme>
  > = async (values: z.infer<typeof settingsScheme>) => {
    try {
      const response = await changePassword({
        data: {
          email: user?.email as string,
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        },
      });
      if (response.status === 200) {
        defaultValues.password = values.newPassword;
        setShowModal(true);
      }
    }
    catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          setError('Некоректно введений попередній пароль');
          setTimeout(() => {
            setError('');
          }, 3000);
        }
        else {
          console.log(error);
          setError('Помилка сервера');
          setTimeout(() => {
            setError('');
          }, 3000);
        }
      }
    }
    finally {
      setError('');
    }
    reset();
  };

  const handleCloseAndReset = () => {
    setShowModal(false);
    reset();
  };

  if (isFetching)
    return <Loader />;

  return (
    <div className="relative p-[24px]">
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
                  <TextInput
                    {...field}
                    title="Старий пароль"
                    placeholder="Введіть старий пароль"
                    errorText={errors.oldPassword?.message}
                    isRequired={true}
                    isPassword
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Новий пароль"
                    placeholder="Введіть новий пароль"
                    errorText={errors.newPassword?.message}
                    isRequired={true}
                    isPassword
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="repeatPassword"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Повторіть новий пароль"
                    placeholder="Повторіть новий пароль"
                    errorText={
                      errors.repeatPassword?.message
                    }
                    isRequired={true}
                    isPassword
                  />
                )}
              />
            </div>
            {error.length
              ? (
                  <p className="text-[1.2rem] text-error">
                    {error}
                  </p>
                )
              : null}
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
            <Link href="/admin/settings">
              <SecondaryButton text="Скасувати" />
            </Link>
          </div>
          {showModal && (
            <Link href="/admin/settings">
              <SuccessAlert
                title="Дані успішно змінено"
                onClose={handleCloseAndReset}
                isSuccess={showModal}
              />
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default EditSettings;
