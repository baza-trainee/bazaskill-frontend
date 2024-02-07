'use client';

import * as z from 'zod';
import React, { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {
  defaultValues,
  options,
  stack,
} from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from './validationScheme';
import PhoneInput from '@/components/main/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/main/ui/form_inputs/SelectInput';
import TextInput from '@/components/main/ui/form_inputs/TextInput';
import TextArea from '@/components/main/ui/form_inputs/TextArea';
import CustomCheckbox from '@/components/main/ui/form_inputs/CustomCheckbox';
import Select from 'react-select';

const RegisterHrForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof registerScheme>>({
    resolver: zodResolver(registerScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof registerScheme>
  > = async (values: z.infer<typeof registerScheme>) => {
    try {
      setIsProcessing(true);
      console.log(values);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSubmitted(true);
      }, 2000);
    } catch (error: unknown) {
      console.log(error);
    }
  };

<<<<<<< HEAD
  return (
    <div className="mb-[64px] flex w-full flex-col items-center justify-center">
      <h1 className="mb-[48px] mt-[60px] text-3xl font-bold">
        Стати нашим HRom
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="mb-[32px] flex flex-col">
        <div className="flex">
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <TextInput
                title="Імʼя*"
                {...field}
                errorText={errors.first_name?.message}
                placeholder="Імʼя"
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <TextInput
                title="Прізвище*"
                {...field}
                errorText={errors.last_name?.message}
                placeholder="Імʼя"
              />
            )}
          />
        </div>
        <div className="flex">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                title="Телефон*"
                {...field}
                errorText={errors.phone?.message}
                placeholder="Телефон"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                title="Email*"
                {...field}
                errorText={errors.email?.message}
                placeholder="Email"
              />
            )}
          />
        </div>
        <div className="flex">
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                title="Компанія"
                {...field}
                placeholder="Компанія"
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectInput
                title="Країна"
                {...field}
                options={options}
                placeholder="Країна"
              />
            )}
          />
        </div>
        <div className="flex">
          <div>
            <Controller
              name="specialist"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <SelectInput
                  title="Шукаю"
                  {...field}
                  options={options}
                  placeholder="Спеціаліст"
                />
              )}
            />
            <div className="mt-[32px] flex-col">
              <CustomCheckbox title="Прошу надіслати договір на ознайомлення" />
              <CustomCheckbox title="Даю згоду на обробку персональних даних" />
            </div>
          </div>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextArea
                title="Коментар"
                {...field}
                errorText={errors.message?.message}
                placeholder="Коментар"
              />
            )}
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="mt-[2rem] w-[231px] rounded-md border border-graphite px-8 py-2 hover:bg-yellow"
            disabled={
              errors && !!Object.keys(errors).length
            }>
            {isProcessing
              ? 'Обробка запиту...'
              : 'Відправити'}
          </button>
=======
  const handleClose = () => {
    setIsSubmitted(false); // Скидаємо стан після закриття форми
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="mb-[64px] flex w-full flex-col items-center justify-center">
          <h1 className="mb-[48px] mt-[60px] text-3xl font-bold">
            Стати нашим HRom
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="mb-[32px] flex flex-col"
          >
            <div className="flex">
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Імʼя*"
                    {...field}
                    errorText={errors.first_name?.message}
                    placeholder="Імʼя"
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Прізвище*"
                    {...field}
                    errorText={errors.last_name?.message}
                    placeholder="Імʼя"
                  />
                )}
              />
            </div>
            <div className="flex">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    title="Телефон*"
                    {...field}
                    errorText={errors.phone?.message}
                    placeholder="Телефон"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Email*"
                    {...field}
                    errorText={errors.email?.message}
                    placeholder="Email"
                  />
                )}
              />
            </div>
            <div className="flex">
              <Controller
                name="company"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    title="Компанія"
                    {...field}
                    placeholder="Компанія"
                  />
                )}
              />
              <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    title="Країна"
                    {...field}
                    options={options}
                    placeholder="Країна"
                  />
                )}
              />
            </div>
            <div className="flex">
              <div>
                <Controller
                  name="speciality"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <SelectInput
                      title="Шукаю*"
                      {...field}
                      options={stack}
                      placeholder="Спеціальність"
                    />
                  )}
                />
                <div className="mt-[32px] flex-col">
                  <CustomCheckbox title="Прошу надіслати договір на ознайомлення" />
                  <CustomCheckbox title="Даю згоду на обробку персональних даних" />
                </div>
              </div>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextArea
                    title="Коментар"
                    {...field}
                    errorText={errors.message?.message}
                    placeholder="Коментар"
                  />
                )}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="mt-[2rem] w-[231px] rounded-md border border-graphite px-8 py-2 hover:bg-yellow"
                disabled={
                  errors && !!Object.keys(errors).length
                }
              >
                {isProcessing
                  ? 'Обробка запиту...'
                  : 'Відправити'}
              </button>
            </div>
          </form>
>>>>>>> c5d149a0f0457ec2628a22e8936dba7b479cc868
        </div>
      ) : (
        <div>
          <p>Ваш запит був успішно відправлений!</p>
          <button onClick={handleClose}>Закрити</button>
        </div>
      )}
    </>
  );
};

export default RegisterHrForm;
