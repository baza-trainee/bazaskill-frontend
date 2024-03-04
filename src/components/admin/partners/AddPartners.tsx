'use client';
import React, { useState } from 'react';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PartnersCard from './PartnersCard';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { partners } from './data';
import { defaultValues } from '../partners/defaultValues';
import { partnersScheme } from './partnersScheme';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import PageTitle from '../ui/PageTitle';
import Image from 'next/image';

const AddPartners = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(partnersScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const submitForm: SubmitHandler<
    z.infer<typeof partnersScheme>
  > = (values) => {
    console.log('values: ', values);
    console.log('file: ', file);
  };

  const item = partners[0];
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Додати партнера" />
      <div className="mt-[80px] flex gap-[180px]">
        <form
          onSubmit={handleSubmit(submitForm)}
          autoComplete="off"
          className="flex w-[597px] flex-col gap-[30px]"
        >
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInputPartner
                  {...field}
                  isRequired={true}
                  placeholder="Введіть назву"
                  title="Назва партнера"
                  value=""
                  errorText={errors.name?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="logo"
              control={control}
              render={({ field }) => (
                <FileInputPartner
                  {...field}
                  placeholder="Завантажте логотип"
                  title="Логотип партнера"
                  onChange={handleFileChange}
                  isRequired={true}
                  errorText={errors.logo?.message}
                />
              )}
            />
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton type="submit" text="Додати" />
            <SecondaryButton
              onClick={() => reset()}
              text="Скасувати"
            />
          </div>
        </form>
        <div>
          <div className="relative flex h-[286px] w-[286px] flex-col items-center justify-center rounded-xl border-4">
            <div className="flex gap-[129px]">
              <div className="flex items-center gap-[24px] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={273}
                  height={61}
                  className=" rounded-[8px] "
                />
              </div>
            </div>
            <div className="w-[159px] text-start">
              <h4 className="font-tahoma font-bold tracking-[.72px] text-white ">
                {item.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPartners;
