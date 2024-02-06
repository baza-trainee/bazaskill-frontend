'use client';

import * as z from 'zod';
import React, { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { defaultValues, options } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from './validationScheme';
import PhoneInput from '@/components/main/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/main/ui/form_inputs/SelectInput';
import TextInput from '@/components/main/ui/form_inputs/TextInput';
import TextArea from '@/components/main/ui/form_inputs/TextArea';

const RegisterHrForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);

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
      }, 2000);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-[2rem] text-3xl font-bold">
        Стати нашим HRom
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col">
        <div className="flex">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                errorText={errors.phone?.message}
                placeholder="Телефон"
              />
            )}
          />
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.first_name?.message}
                placeholder="Ім’я"
              />
            )}
          />
        </div>
        <div className="flex">
          <Controller
            name="specialist"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectInput
                {...field}
                title="Шукаю"
                options={options}
                placeholder="Спеціальність"
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.message?.message}
                placeholder="Ім’я"
              />
            )}
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="mt-[2rem] rounded-sm border border-graphite px-8 py-2 hover:bg-yellow"
            disabled={
              errors && !!Object.keys(errors).length
            }>
            {isProcessing
              ? 'Обробка запиту...'
              : 'Відправити'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterHrForm;
