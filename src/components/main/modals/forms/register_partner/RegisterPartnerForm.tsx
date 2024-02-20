'use client';

import * as z from 'zod';

import React, { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { stack } from './data';
import { defaultValues } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from './validationScheme';

import PhoneInput from '@/components/main/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/main/ui/form_inputs/SelectInput';
import TextInput from '@/components/main/ui/form_inputs/TextInput';
import TextArea from '@/components/main/ui/form_inputs/TextArea';
import CustomCheckbox from '@/components/main/ui/form_inputs/CustomCheckbox';

const RegisterPartnerForm = () => {
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
      setIsProcessing(false);
      setIsSubmitted(true);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="mb-[64px] flex w-full flex-col items-center justify-center">
          <h1 className="mb-[26px] mt-[40px] text-base font-semibold sm:mt-[68px] sm:text-xl md:mt-[40px] md:text-2xl md:font-bold">
            Стати нашим Партнером
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="mb-[32px] flex flex-col"
          >
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Назва компанії"
                    {...field}
                    errorText={errors.name?.message}
                    placeholder="Назва"
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="link"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Сайт компанії"
                    {...field}
                    errorText={errors.link?.message}
                    placeholder="Сайт"
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    title="Телефон"
                    {...field}
                    errorText={errors.phone?.message}
                    placeholder="Телефон"
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Email"
                    {...field}
                    errorText={errors.email?.message}
                    placeholder="Email"
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Імʼя"
                    {...field}
                    errorText={errors.first_name?.message}
                    placeholder="Імʼя"
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Прізвище"
                    {...field}
                    errorText={errors.last_name?.message}
                    placeholder="Прізвище"
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="specialist"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    errorText={errors.specialist?.message}
                    title="Шукаю"
                    {...field}
                    options={stack}
                    placeholder="Спеціальність"
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Посада представника"
                    {...field}
                    errorText={errors.position?.message}
                    placeholder="Посада"
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
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
              <div className="mt-[20px] flex-col md:mt-[32px]">
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      {...field}
                      title="Прошу надіслати договір на ознайомлення"
                      isRequired={true}
                      errorText={errors.terms?.message}
                    />
                  )}
                />
                <Controller
                  name="terms_2"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      {...field}
                      title="Даю згоду на обробку персональних даних"
                      isRequired={true}
                      errorText={errors.terms_2?.message}
                    />
                  )}
                />
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="mt-[2rem] w-[231px] rounded-md border border-graphite px-8 py-2 hover:bg-green"
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

export default RegisterPartnerForm;
