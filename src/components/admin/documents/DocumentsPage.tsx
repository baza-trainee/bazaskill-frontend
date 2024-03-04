'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { documentsScheme } from './documentsScheme';
import { zodResolver } from '@hookform/resolvers/zod';
import PageTitle from '../ui/PageTitle';
import FileInputDoc from '../ui/FileInputDoc';
import { defaultValues } from './defaultValues';

const DocumentsPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<z.infer<typeof documentsScheme>>({
    resolver: zodResolver(documentsScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const currentValues = watch();
  console.log(currentValues);

  const onSubmit: SubmitHandler<
    z.infer<typeof documentsScheme>
  > = async (values: z.infer<typeof documentsScheme>) => {
    try {
      setIsProcessing(true);
      console.log(values);
      setIsProcessing(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Документи" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="mt-[50px]"
      >
        <div className="mb-[50px] flex gap-[50px]">
          <FileInputDoc
            name="document"
            control={control}
            placeholder={'Завантажте документ'}
            title="Звітність"
            isRequired={false}
          />
          <FileInputDoc
            name="document"
            control={control}
            placeholder={'Завантажте документ'}
            title="Статут"
            isRequired={false}
          />
        </div>
      </form>
    </div>
  );
};

export default DocumentsPage;
