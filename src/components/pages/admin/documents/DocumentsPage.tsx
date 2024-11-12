'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { getDocuments, updateDocument } from '@/utils/api/documents';
import { constants } from '@/constants';

import Loader from '../../../shared/loader/Loader';
import SuccessAlert from '../alerts/SuccessAlert';
import FileInputDoc from '../ui/FileInputDoc';
import PageTitle from '../ui/PageTitle';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { documentsScheme } from './documentsScheme';

function DocumentsPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data: documents, isFetching } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments
  });

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { isDirty }
  } = useForm<z.infer<typeof documentsScheme>>({
    resolver: zodResolver(documentsScheme),
    mode: 'onChange',
    defaultValues: {
      terms_of_use: [],
      privacy_policy: []
    }
  });

  useEffect(() => {
    if (!documents) return;
    setValue('terms_of_use', [
      new File([], documents[0].document_url, {
        type: 'for-url'
      })
    ]);
    setValue('privacy_policy', [
      new File([], documents[1].document_url, {
        type: 'for-url'
      })
    ]);
  }, [documents]);

  const currentValues = watch();

  const handleClose = () => {
    setIsSuccess(false);
    reset();
    window.location.reload();
  };

  const onSubmit: SubmitHandler<z.infer<typeof documentsScheme>> = async (
    values: z.infer<typeof documentsScheme>
  ) => {
    try {
      setIsProcessing(true);

      let currentId;
      const formData = new FormData();
      if (values.privacy_policy[0].size && values.terms_of_use[0].size) {
        const termsItem = documents?.find(
          (item) => item.title === 'terms_of_use'
        );
        currentId = termsItem?.id;
        formData.append('file', values.terms_of_use[0]);
        await updateDocument(currentId as string, formData);
        formData.delete('file');
        const policyItem = documents?.find(
          (item) => item.title === 'privacy_policy'
        );
        currentId = policyItem?.id;
        formData.append('file', values.privacy_policy[0]);
        const response = await updateDocument(currentId as string, formData);
        if (response.status === 200) {
          setIsSuccess(true);
        }
        setIsProcessing(false);
      }

      if (values.terms_of_use[0].size && !values.privacy_policy[0].size) {
        const currentItem = documents?.find(
          (item) => item.title === 'terms_of_use'
        );
        currentId = currentItem?.id;
        formData.append('file', values.terms_of_use[0]);
        const response = await updateDocument(currentId as string, formData);
        if (response.status === 200) {
          setIsSuccess(true);
        }
        setIsProcessing(false);
      }

      if (values.privacy_policy[0].size && !values.terms_of_use[0].size) {
        const currentItem = documents?.find(
          (item) => item.title === 'privacy_policy'
        );
        currentId = currentItem?.id;
        formData.append('file', values.privacy_policy[0]);
        const response = await updateDocument(currentId as string, formData);
        if (response.status === 200) {
          setIsSuccess(true);
        }
        setIsProcessing(false);
      }
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative h-screen max-h-screen p-[24px]">
      <PageTitle title="Документи" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="mt-[50px]"
      >
        <div className="mb-[50px] flex gap-[50px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="terms_of_use"
              control={control}
              placeholder="Завантажте документ"
              title="Правила користування сайтом"
              isRequired={false}
              accept=".pdf"
            />
            {currentValues?.terms_of_use && (
              <Link
                href={currentValues?.terms_of_use[0]?.name || ''}
                target="_blank"
              >
                <Image
                  src="/images/pdf-placeholder.png"
                  alt="pdf"
                  width={40}
                  height={40}
                />
              </Link>
            )}
          </div>
        </div>
        <div className="mb-[50px] flex gap-[50px]">
          <div className="flex items-end justify-center gap-[24px]">
            <FileInputDoc
              name="privacy_policy"
              control={control}
              placeholder="Завантажте документ"
              title="Політика конфіденційності"
              isRequired={false}
              accept=".pdf"
            />
            {currentValues?.terms_of_use && (
              <Link
                href={currentValues?.privacy_policy[0]?.name || ''}
                target="_blank"
              >
                <Image
                  src="/images/pdf-placeholder.png"
                  alt="pdf"
                  width={40}
                  height={40}
                />
              </Link>
            )}
          </div>
        </div>

        <div className="buttons flex gap-[24px] py-[24px]">
          <PrimaryButton
            type="submit"
            text={isProcessing ? 'Обробка запиту' : 'Зберегти зміни'}
            disabled={!isDirty}
          />

          <SecondaryButton
            type="button"
            text="Скасувати"
            onClick={() => {
              reset();
              window.location.reload();
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
      {isFetching && <Loader />}
    </div>
  );
}

export default DocumentsPage;
