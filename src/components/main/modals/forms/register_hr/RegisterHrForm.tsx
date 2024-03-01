'use client';

import * as z from 'zod';
import React, { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { stack, countries } from './data';
import { defaultValues } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from './validationScheme';
import { useModal } from '@/stores/useModal';

import PhoneInput from '@/components/main/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/main/ui/form_inputs/SelectInput';
import TextInput from '@/components/main/ui/form_inputs/TextInput';
import TextArea from '@/components/main/ui/form_inputs/TextArea';
import CustomCheckbox from '@/components/main/ui/form_inputs/CustomCheckbox';
import SuccessModal from '../SuccesModal';

const RegisterHrForm = () => {
  const { closeModal } = useModal();
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
    closeModal();
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="mb-[64px] flex w-full flex-col items-center justify-center">
          <h1 className="mb-[26px] mt-[40px] text-base font-semibold sm:mt-[68px] sm:text-xl md:mt-[40px] md:text-2xl md:font-bold">
            Стати нашим HRom
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="mb-[32px] flex flex-col"
          >
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
                name="company"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    title="Компанія"
                    {...field}
                    placeholder="Компанія"
                    errorText={errors.company?.message}
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
                    errorText={errors.country?.message}
                    options={countries}
                    placeholder="Країна"
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <div>
                <Controller
                  name="specialist"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <SelectInput
                      title="Шукаю"
                      {...field}
                      errorText={errors.specialist?.message}
                      options={stack}
                      placeholder="Спеціальність"
                      isRequired={true}
                    />
                  )}
                />
                <div className="mt-[32px] flex-col">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <CustomCheckbox
                        {...field}
                        title="Прошу надіслати договір рекрутінгу на ознайомлення"
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
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextArea
                    title="Коментар"
                    {...field}
                    errorText={errors.message?.message}
                    placeholder="Коментар"
                    isRequired={true}
                  />
                )}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-[2rem] w-[231px] rounded-md border border-graphite px-8 py-2 hover:border-transparent hover:bg-green disabled:cursor-not-allowed disabled:border-graphite disabled:bg-inputBgGray disabled:hover:border-graphite"
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
        <SuccessModal onClose={handleClose} />
      )}
    </>
  );
};

export default RegisterHrForm;
