'use client';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import SignInPassword from '../ui/SignInPassword';
import { signInScheme } from './signInScheme';
import { defaultValues } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SignInEmail from '../ui/SignInEmail';
import SignInButton from '../ui/buttons/SignInButton';
import ErrorAlert from '../alerts/ErrorAlert';
import { authLogin } from '@/api/signIn';

const SignIn = () => {
  const [isError, setIsError] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof signInScheme>>({
    resolver: zodResolver(signInScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  useEffect(() => {
    const savedCredentials =
      localStorage.getItem('credentials');
    if (savedCredentials) {
      const { email, password, rememberMe } = JSON.parse(
        savedCredentials
      );
      setValue('email', email);
      setValue('password', password);
      setValue('rememberMe', rememberMe);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<
    z.infer<typeof signInScheme>
  > = async (values) => {
    try {
      const response = await authLogin({
        email: values.email,
        password: values.password,
      });
      if (response.status === 201) {
        console.log(values);
        window.location.href = '/admin/candidates';
      }

      if (values.rememberMe) {
        localStorage.setItem(
          'credentials',
          JSON.stringify(values)
        );
      } else {
        localStorage.removeItem('credentials');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Неочікувана помилка', error);
      }
    } finally {
      console.log('ok');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#212121]">
        <div className="relative flex  w-[520px] flex-col items-center justify-center rounded-md bg-white px-[35px] py-[35px] font-['Tahoma',_sans-serif]  text-black 5xl:w-[600px]">
          <div className="px-6 py-4 text-center">
            <h2 className="mb-[24px] text-[36px] font-bold 5xl:text-[40px]">
              Вхід
            </h2>
            <p className="mb-[24px] text-[20px] text-[#020202] 5xl:mb-[36px] 5xl:text-[18px]">
              Введіть дані для входу
            </p>
            <form
              className="w-[326px] flex-col"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[20px] text-left text-[18px] text-[#020202] 5xl:gap-[24px] 5xl:text-[20px]">
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
                <div className="flex items-center  gap-[10px]">
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="checkbox"
                        className="h-[18px] w-[18px] rounded-[2px] border  [border:1px_solid_#232323]"
                      />
                    )}
                  />
                  <p className="font-['Open_Sans',_sans-serif] text-[12px] text-[#353535]">
                    Запам’ятати пароль
                  </p>
                </div>
                <SignInButton
                  text="Увійти"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  disabled={
                    !Object.keys(errors).length && !isDirty
                  }
                />
              </div>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 left-0  w-full bg-[#191919] ">
          <p className="mt-0 text-left text-center font-['Open_Sans',_sans-serif] text-[14px] text-[#ffffff]">
            Компанія направляє 10% прибутку на підтримку
            59-ї бригади ім. Якова Гандзюка
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
};

export default SignIn;
