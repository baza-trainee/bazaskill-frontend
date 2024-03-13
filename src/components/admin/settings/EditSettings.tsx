'use client';

import { useForm, Controller } from 'react-hook-form';
import PageTitle from '../ui/PageTitle';
import PasswordInput from '../ui/PasswordInput';
import NotEyeIcon from '@/components/icons/Admin-icons/NotEyeIcon';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { defaultValues } from './editSettingsDefaultValues';
import { settingsScheme } from './editSettingsScheme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const EditSettings = () => {
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

export default EditSettings;
