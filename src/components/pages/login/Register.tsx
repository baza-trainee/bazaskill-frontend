'use client';

import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { registerUser } from '@/api/signIn';

import ErrorAlert from '../admin/alerts/ErrorAlert';
import SignInButton from '../admin/ui/buttons/SignInButton';
import SignInEmail from '../admin/ui/SignInEmail';
import SignInPassword from '../admin/ui/SignInPassword';
import { defaultValues } from './defaultValues';
import { signInScheme } from './signInScheme';

function Register() {
  const [isError, setIsError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof signInScheme>>({
    resolver: zodResolver(signInScheme),
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit: SubmitHandler<z.infer<typeof signInScheme>> = async (
    values
  ) => {
    try {
      setIsProcessing(true);
      const response = await registerUser({
        email: values.email,
        password: values.password,
        role: 'ADMIN',
      });
      if (response.status === 201) {
        alert('Користувач створений');
      }
      setIsProcessing(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        setIsProcessing(false);
        console.error(error.message);
      } else {
        console.error('Неочікувана помилка', error);
        setIsProcessing(false);
      }
    }
  };

  const email = watch('email');
  const password = watch('password');
  return (
    <>
      <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-graphite">
        <div className="relative flex w-[520px]  flex-col items-center justify-center overflow-auto rounded-md bg-white p-[35px] font-['Tahoma',_sans-serif] text-black  5xl:w-[600px]">
          <div className="px-6 py-4 text-center">
            <h2 className="mb-[24px] text-[36px] font-bold 5xl:text-[40px]">
              Реєстрація користувача
            </h2>
            <p className="mb-[24px] text-[20px] text-[#020202] 5xl:mb-[36px] 5xl:text-[18px]">
              Введіть дані для реєстрації
            </p>
            <form
              className="w-[326px] flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-[36px] flex flex-col gap-5 text-left text-lg text-[#020202] 5xl:gap-6 5xl:text-xl">
                <div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <SignInEmail
                        {...field}
                        type="email"
                        errorText={errors.email?.message}
                        title="Email"
                        placeholder="Email"
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <SignInPassword
                        {...field}
                        title="Пароль"
                        placeholder="********"
                        errorText={errors.password?.message}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[36px]">
                <SignInButton
                  text={isProcessing ? 'Обробка запиту...' : 'Створити'}
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  disabled={
                    (!isDirty && !email && !password) ||
                    !!Object.keys(errors).length
                  }
                />
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
        {isError && (
          <ErrorAlert
            title="Невірні облікові дані"
            text="Надані облікові дані невірні. Будь ласка, перевірте своє ім’я користувача та пароль і спробуйтеще раз"
            onClose={() => setIsError(false)}
            isError={isError}
          />
        )}
      </div>
    </>
  );
}

export default Register;
