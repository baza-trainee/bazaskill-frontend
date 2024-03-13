'use client';

import React from 'react';
import {
  useForm,
  Controller,
  SubmitHandler,
} from 'react-hook-form';
import TextInput from '../ui/TextInput';
import { defaultValues } from './defaultValues';
import { contactsScheme } from './contactsScheme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PhoneInput from '../ui/PhoneInput';

const Contacts = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactsScheme>>({
    resolver: zodResolver(contactsScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const submitForm: SubmitHandler<
    z.infer<typeof contactsScheme>
  > = (values) => {
    console.log('values: ', values);
  };

  return (
    <section className="px-[24px] py-[40px]">
      <div className="mb-[70px] text-[40px] font-bold leading-[150%] tracking-[-0.03em] text-[#fff]">
        Контакти
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
        className="flex w-[725px] flex-wrap gap-x-[24px] gap-y-[50px]  ">
        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                isIcon={true}
                type="tel"
                title="Телефон"
                errorText={errors.phone?.message}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="secondPhone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                isIcon={true}
                type="tel"
                errorText={errors.secondPhone?.message}
                title="Телефон"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="email"
                isIcon={true}
                errorText={errors.email?.message}
                title="Email"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="telegram"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="url"
                isIcon={true}
                errorText={errors.telegram?.message}
                title="Telegram"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="linkedin"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="url"
                isIcon={true}
                errorText={errors.linkedin?.message}
                title="Linkedin"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="discord"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="url"
                isIcon={true}
                errorText={errors.discord?.message}
                title="Discord"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="facebook"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="url"
                isIcon={true}
                errorText={errors.facebook?.message}
                title="Facebook"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="instagram"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="url"
                isIcon={true}
                errorText={errors.instagram?.message}
                title="Instagram"
              />
            )}
          />
        </div>
        <div className="flex w-max items-center gap-[24px]">
          <PrimaryButton
            text="Зберегти зміни"
            type="submit"
          />
          <SecondaryButton
            text="Скасувати"
            type="button"
            onClick={() => reset()}
          />
        </div>
      </form>
    </section>
  );
};

export default Contacts;
