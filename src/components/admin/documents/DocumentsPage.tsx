'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { documentsScheme } from './documentsScheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { defaultValues } from './defaultValues';
import PageTitle from '../ui/PageTitle';
import FileInputDoc from '../ui/FileInputDoc';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';

import {
  getDocuments,
  updateDocument,
} from '@/api/documents';
import SuccessAlert from '../alerts/SuccessAlert';

const DocumentsPage = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments,
  });

  console.log(data);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<z.infer<typeof documentsScheme>>({
    resolver: zodResolver(documentsScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof documentsScheme>
  > = async (values: z.infer<typeof documentsScheme>) => {
    try {
      setIsProcessing(true);
      let currentId;
      const formData = new FormData();
      if (values.reporting.length) {
        const currentItem = data?.find(
          (item) => item.title === 'reporting'
        );
        currentId = currentItem?.id;
        formData.append('file', values.reporting[0]);
      }
      if (values.regulations.length) {
        const currentItem = data?.find(
          (item) => item.title === 'regulations'
        );
        currentId = currentItem?.id;
        formData.append('file', values.regulations[0]);
      }
      if (values.rules_of_use.length) {
        const currentItem = data?.find(
          (item) => item.title === 'rules_of_use'
        );
        currentId = currentItem?.id;
        formData.append('file', values.rules_of_use[0]);
      }
      if (values.privacy_policy.length) {
        const currentItem = data?.find(
          (item) => item.title === 'privacy_policy'
        );
        currentId = currentItem?.id;
        formData.append('file', values.privacy_policy[0]);
      }
      const response = await updateDocument(
        currentId as string,
        formData
      );
      if (response.status === 200) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
      reset();
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative h-[100vh] max-h-[100vh] p-[24px]">
      <PageTitle title="Документи" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="mt-[50px]"
      >
        <div className="mb-[50px] flex gap-[80px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="reporting"
              control={control}
              placeholder={'Завантажте документ'}
              title="Звітність"
              isRequired={false}
            />
            <button
              type="button"
              className="mb-[0.5rem]"
              onClick={() => router.refresh()}
            >
              <TrashIcon className="h-[32px] w-[32px] fill-white" />
            </button>
          </div>
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="regulations"
              control={control}
              placeholder={'Завантажте документ'}
              title="Статут"
              isRequired={false}
            />
            <button
              type="button"
              className="mb-[0.5rem]"
              onClick={() => router.refresh()}
            >
              <TrashIcon className="h-[32px] w-[32px] fill-white" />
            </button>
          </div>
        </div>
        <div className="mb-[50px] flex gap-[50px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="privacy_policy"
              control={control}
              placeholder={'Завантажте документ'}
              title="Політика конфіденційності"
              isRequired={false}
            />
            <button
              type="button"
              className="mb-[0.5rem]"
              onClick={() => router.refresh()}
            >
              <TrashIcon className="h-[32px] w-[32px] fill-white" />
            </button>
          </div>
        </div>
        <div className="mb-[50px] flex gap-[50px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="rules_of_use"
              control={control}
              placeholder={'Завантажте документ'}
              title="Правила користування сайтом"
              isRequired={false}
            />
            <button
              type="button"
              className="mb-[0.5rem]"
              onClick={() => router.refresh()}
            >
              <TrashIcon className="h-[32px] w-[32px] fill-white" />
            </button>
          </div>
        </div>
        <div className="buttons flex gap-[24px] py-[24px]">
          <PrimaryButton
            text={
              isProcessing
                ? 'Обробка запиту'
                : 'Зберегти зміни'
            }
            disabled={!isDirty}
          />
          <SecondaryButton
            text="Скасувати"
            onClick={() => router.refresh()}
          />
        </div>
      </form>
      {isSuccess && (
        <SuccessAlert
          title="PDF документ успішно оновлено"
          onClose={() => setIsSuccess(false)}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default DocumentsPage;
