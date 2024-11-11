'use client';

import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import type { IContacts } from '@/types/contacts';

import { addContact, getContact, updateContact } from '@/api/contacts';
import { constants } from '@/constants';

import Loader from '../../../shared/loader/Loader';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PageTitle from '../ui/PageTitle';
import PhoneInput from '../ui/PhoneInput';
import TextInput from '../ui/TextInput';
import { contactsScheme } from './contactsScheme';
import { defaultValues } from './defaultValues';

function Contacts() {
  const [id, setId] = useState<number>(0);
  const { data, refetch, isFetching } = useQuery<IContacts[], Error>({
    queryKey: [constants.contacts.FETCH_CONTACTS],
    queryFn: getContact,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof contactsScheme>>({
    resolver: zodResolver(contactsScheme),
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const value: IContacts = data[0];
      setId(data[0].id);
      reset({
        phone: value.phone_1,
        secondPhone: value.phone_2,
        email: value.email,
        telegram: value.telegram,
        linkedin: value.linkedin,
        facebook: value.facebook,
        discord: value.discord,
        instagram: value.instagram,
      });
    }
  }, [data, reset]);

  const submitForm: SubmitHandler<z.infer<typeof contactsScheme>> = async (
    values: z.infer<typeof contactsScheme>
  ) => {
    try {
      if (id) {
        await updateContact({
          id,
          updateData: {
            phone_1: values.phone,
            phone_2: values.secondPhone,
            email: values.email,
            telegram: values.telegram,
            linkedin: values.linkedin,
            facebook: values.facebook,
            discord: values.discord,
            instagram: values.instagram,
          },
        });
      } else {
        await addContact({
          phone_1: values.phone,
          phone_2: values.secondPhone,
          email: values.email,
          telegram: values.telegram,
          linkedin: values.linkedin,
          facebook: values.facebook,
          discord: values.discord,
          instagram: values.instagram,
        });
      }

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" relative px-[24px] py-[40px]">
      <PageTitle title="Контакти"></PageTitle>
      <form
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
        className="mt-[50px] flex w-[908px] flex-wrap gap-x-[24px] gap-y-[50px]  "
      >
        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                isIcon={true}
                type="text"
                title="Телефон"
                placeholder="Телефон"
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
                placeholder="Телефон"
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
                placeholder="Email"
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
                type="text"
                isIcon={true}
                errorText={errors.telegram?.message}
                title="Telegram"
                placeholder="Додайте посилання"
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
                placeholder="Додайте посилання"
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
                placeholder="Додайте посилання"
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
                placeholder="Додайте посилання"
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
                placeholder="Додайте посилання"
              />
            )}
          />
        </div>
        <div className="flex w-max items-center gap-[24px]">
          <PrimaryButton
            text="Зберегти зміни"
            type="submit"
            disabled={!isDirty}
          />
          <SecondaryButton
            text="Скасувати"
            type="button"
            onClick={() => reset()}
          />
        </div>
      </form>
      {isFetching && <Loader />}
    </section>
  );
}

export default Contacts;
