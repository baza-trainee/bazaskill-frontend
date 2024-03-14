'use client';

import { useForm, Controller } from 'react-hook-form';
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

const Settings = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof settingsScheme>>({
    resolver: zodResolver(settingsScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Налаштування"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form
          className="flex w-[597px] flex-col gap-[30px]"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            handleCancel();
          })}
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
            <div className="mb-[50px] flex items-end gap-[20px]">
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
              <button type="button">
                <Link href="settings/edit">
                  <WriteIcon className="flex h-[44px] w-[44px] items-center justify-center bg-white" />
                </Link>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton text="Зберегти зміни" />
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

export default Settings;
