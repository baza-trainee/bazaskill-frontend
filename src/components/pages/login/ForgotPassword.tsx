'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { forgotPassword } from '@/utils/api/signIn';

import SignInEmail from '../admin/ui/SignInEmail';
import SuccessButton from '../admin/ui/buttons/SuccessButton';
import { defaultValuesEmail } from './defaultValues';
import { emailScheme } from './signInScheme';

function ForgotPassword() {
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof emailScheme>>({
    resolver: zodResolver(emailScheme),
    mode: 'onChange',
    defaultValues: defaultValuesEmail
  });

  const onSubmit: SubmitHandler<z.infer<typeof emailScheme>> = async (values) => {
    try {
      setIsProcessing(true);
      const response = await forgotPassword({
        email: values.email
      });
      if (response.status === 201) {
        const token = response.data?.token;
        setIsProcessing(false);
        if (token) {
          router.push(`/ua/login/restore-password/${token}`);
        } else {
          console.error('Token is not defined');
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          setError('Такий емейл не знайдено');
          setIsProcessing(false);
        } else {
          console.log(error);
          setError('Помилка сервера');
          setIsProcessing(false);
        }
      }
    } finally {
      setTimeout(() => {
        setError('');
      }, 3000);
      setIsProcessing(false);
      reset();
    }
  };

  return (
    <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-graphite">
      <div className="relative flex w-[520px]  flex-col items-center justify-center overflow-auto rounded-md bg-white p-[50px] font-['Tahoma',_sans-serif] text-black  5xl:w-[600px]">
        <div className="px-6 py-4 text-center">
          <h2 className="mb-6 text-4xl font-bold 5xl:text-[40px]">Забули пароль?</h2>
          <p className="mb-[24px] mt-0 text-center font-['Open_Sans',_sans-serif] text-[16px] font-semibold not-italic text-[#020202] 5xl:mb-[36px] ">
            Вкажіть Вашу електронну адресу, щоб підтвердити Вашу особу
          </p>
          <form className="w-[326px] flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 text-left text-lg text-[#020202] 5xl:gap-6 5xl:text-xl">
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
                {error.length ? <p className="left absolute text-xs text-error">{error}</p> : null}
              </div>
              <div className="flex gap-[18px] ">
                <SuccessButton
                  className="flex h-9 min-w-[170px] items-center justify-center  rounded-md bg-[#0A871E] text-white"
                  onClick={handleSubmit(onSubmit)}
                  text={isProcessing ? 'Обробка запиту...' : 'Підтвердити'}
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
        <p className="mt-0 text-center font-['Open_Sans',_sans-serif] text-[14px] text-[#ffffff]">
          Компанія направляє 10% прибутку на підтримку 59-ї бригади ім. Якова Гандзюка
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
