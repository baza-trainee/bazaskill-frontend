'use client';
import React, { useState } from 'react';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PartnersCard from './PartnersCard';
import { zodResolver } from '@hookform/resolvers/zod';
import { partners } from './data';
import { defaultValues } from '../partners/defaultValues';
import { validationSchema } from '../partners/validationSchema';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import PageTitle from '../ui/PageTitle';

const AddPartners = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const item = partners[0];
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };
  return (
    <div className="p-[24px]">
      <PageTitle title="Додати партнера" />
      <div className="mt-[80px] flex gap-[180px]">
        <form className="flex w-[597px] flex-col gap-[30px]">
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
            <FileInputPartner
              placeholder="Завантажте логотип"
              title="Логотип партнера"
              onChange={handleFileChange}
              isRequired={true}
            />
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton text="Додати" />
            <SecondaryButton text="Скасувати" />
          </div>
        </form>
        <div>
          <PartnersCard item={item} />
        </div>
      </div>
    </div>
  );
};

export default AddPartners;
