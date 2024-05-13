'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { documentsScheme } from './documentsScheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultValues } from './defaultValues';
import PageTitle from '../ui/PageTitle';
import FileInputDoc from '../ui/FileInputDoc';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { createDocument } from '@/api/documents';
import SuccessAlert from '../alerts/SuccessAlert';

const AddDocument = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    resetField,
    formState: { isDirty },
  } = useForm<z.infer<typeof documentsScheme>>({
    resolver: zodResolver(documentsScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    window.location.reload();
  };

  const onSubmit: SubmitHandler<
    z.infer<typeof documentsScheme>
  > = async (values: z.infer<typeof documentsScheme>) => {
    try {
      setIsProcessing(true);
      const formData = new FormData();
      formData.append('title', 'terms_of_use');
      formData.append('file', values.terms_of_use[0]);
      await createDocument(formData);
      formData.delete('file');
      formData.delete('title');
      formData.append('title', 'privacy_policy');
      formData.append('file', values.privacy_policy[0]);
      const response = await createDocument(formData);
      if (response.status === 201) alert('Документ додано');
      setIsProcessing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-[100vh] max-h-[100vh] p-[24px]">
      <PageTitle title="Додати документ" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="mt-[50px]"
      >
        <div className="mb-[50px] flex gap-[50px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="privacy_policy"
              control={control}
              placeholder={'Завантажте документ'}
              title="Політика конфіденційності"
              isRequired={false}
              accept=".pdf"
            />
            <button
              type="button"
              className="mb-[0.5rem]"
              onClick={() => resetField('privacy_policy')}
            >
              <TrashIcon className="h-[32px] w-[32px] fill-white" />
            </button>
          </div>
        </div>
        <div className="mb-[50px] flex gap-[50px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="terms_of_use"
              control={control}
              placeholder={'Завантажте документ'}
              title="Правила користування сайтом"
              isRequired={false}
              accept=".pdf"
            />
            <button
              type="button"
              className="mb-[0.5rem]"
              onClick={() => resetField('terms_of_use')}
            >
              <TrashIcon className="h-[32px] w-[32px] fill-white" />
            </button>
          </div>
        </div>
        <div className="buttons flex gap-[24px] py-[24px]">
          <PrimaryButton
            type="submit"
            text={
              isProcessing
                ? 'Обробка запиту'
                : 'Зберегти зміни'
            }
            disabled={!isDirty}
          />

          <SecondaryButton
            type="button"
            text="Скасувати"
            onClick={() => {
              reset(), window.location.reload();
            }}
          />
        </div>
      </form>
      {isSuccess && (
        <SuccessAlert
          title="PDF документ успішно оновлено"
          onClose={handleClose}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default AddDocument;
