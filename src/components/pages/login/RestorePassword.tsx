'use client';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { resetPassword } from '@/api/signIn';

import SuccessButton from '../admin/ui/buttons/SuccessButton';
import SignInPassword from '../admin/ui/SignInPassword';
import { defaultValuesPassword } from './defaultValues';
import { passwordScheme } from './signInScheme';

function RestorePassword() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof passwordScheme>>({
    resolver: zodResolver(passwordScheme),
    mode: 'onChange',
    defaultValues: defaultValuesPassword,
  });

  const onSubmit: SubmitHandler<z.infer<typeof passwordScheme>> = async (
    values
  ) => {
    try {
      setIsProcessing(true);
      const response = await resetPassword({
        token,
        password: values.password,
      });
      if (response.status === 201) {
        setIsProcessing(false);
        router.replace('/login');
      }
    } catch (error) {
      if (error instanceof Error) {
        setIsProcessing(false);
        console.error(error.message);
      } else {
        setIsProcessing(false);
        console.error('Неочікувана помилка', error);
      }
    }
  };

  return (
    <div className="absolute  inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-graphite">
      <div className="relative flex  w-[520px] flex-col items-center justify-center overflow-auto rounded-md bg-white p-[50px] font-['Tahoma',_sans-serif]  text-black 5xl:w-[600px]">
        <div className="px-6 py-4 text-center">
          <h2 className="mb-6 text-4xl font-bold 5xl:text-[40px]">
            Відновити пароль
          </h2>
          <p className="mb-6 mt-0 text-center font-['Open_Sans',_sans-serif] text-base font-semibold not-italic text-[#020202] 5xl:mb-9 ">
            Створіть новий пароль
          </p>
          <form
            className="w-[326px] flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5 text-left text-lg text-[#020202] 5xl:gap-6 5xl:text-xl">
              <div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <SignInPassword
                      {...field}
                      title="Новий пароль"
                      placeholder="********"
                      errorText={errors.password?.message}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="passwordAccept"
                  control={control}
                  render={({ field }) => (
                    <SignInPassword
                      {...field}
                      title="Підтвердіть пароль"
                      placeholder="********"
                      errorText={errors.passwordAccept?.message}
                    />
                  )}
                />
              </div>
              <div className="flex gap-[18px] ">
                <SuccessButton
                  className="flex h-9 min-w-[170px] items-center justify-center  rounded-md bg-[#0A871E] text-white"
                  onClick={handleSubmit(onSubmit)}
                  text={isProcessing ? 'Обробка запиту...' : 'Зберегти'}
                />
                <Link
                  href="/login"
                  className=" flex h-9 min-w-[170px] items-center justify-center  rounded-md bg-white text-[#0A871E] [border:1px_solid_#0a871e]"
                >
                  Скасувати
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0  w-full bg-darkGraphite ">
        <p className="mt-0  text-center font-['Open_Sans',_sans-serif] text-[14px] text-[#ffffff]">
          Компанія направляє 10% прибутку на підтримку 59-ї бригади ім. Якова
          Гандзюка
        </p>
      </div>
    </div>
  );
}

export default RestorePassword;
