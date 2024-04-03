'use client';
import React from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SignInEmail from '../admin/ui/SignInEmail';
import { emailScheme } from './signInScheme';
import { defaultValuesEmail } from './defaultValues';
import Link from 'next/link';
import { forgotPassword } from '@/api/signIn';

const ForgottenPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof emailScheme>>({
    resolver: zodResolver(emailScheme),
    mode: 'onChange',
    defaultValues: defaultValuesEmail,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof emailScheme>
  > = async (values) => {
    const response = await forgotPassword({
      email: values.email,
    });
    if (response.status === 201) {
      console.log(values);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#212121]">
      <div className="relative flex  w-[520px] flex-col items-center justify-center rounded-md bg-white px-[50px] py-[50px] font-['Tahoma',_sans-serif]  text-black 5xl:w-[600px]">
        <div className="px-6 py-4 text-center">
          <h2 className="mb-6 text-4xl font-bold 5xl:text-[40px]">
            Забули пароль?
          </h2>
          <p className="mb-[24px] mt-0 text-center font-['Open_Sans',_sans-serif] text-[16px] font-semibold not-italic text-[#020202] 5xl:mb-[36px] ">
            Вкажіть Вашу електронну адресу, щоб підтвердити
            Вашу особу
          </p>
          <form
            className="w-[326px] flex-col"
            onSubmit={handleSubmit(onSubmit)}>
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
              </div>
              <div className="flex gap-[18px] ">
                <button
                  className="flex h-9 min-w-[170px] items-center justify-center  rounded-md bg-[#0A871E] text-white"
                  onClick={handleSubmit(onSubmit)}>
                  Підтвердити
                </button>
                <Link
                  href={'/admin/signIn'}
                  className=" flex h-9 min-w-[170px] items-center justify-center  rounded-md bg-white text-[#0A871E] [border:1px_solid_#0a871e]">
                  Скасувати
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0  w-full bg-[#191919] ">
        <p className="mt-0 text-left text-center font-['Open_Sans',_sans-serif] text-[14px] text-[#ffffff]">
          Компанія направляє 10% прибутку на підтримку 59-ї
          бригади ім. Якова Гандзюка
        </p>
      </div>
    </div>
  );
};

export default ForgottenPassword;
