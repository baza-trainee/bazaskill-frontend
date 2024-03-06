'use client';

import { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultValues } from '../testimonials/defaultValues';
import { testimonialValidation } from '../testimonials/validationSchema';
import TextArea from '../ui/TextAreaReviews';
import TextInput from '../ui/TextInput';
import PageTitle from '../ui/PageTitle';
import { z } from 'zod';
import FileInputPost from '../ui/FileInputPost';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './data';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import SuccessAlert from '../alerts/SuccessAlert';
import { updateTestimonial } from '@/api/testimonials';
import { useRouter } from 'next/navigation';

const EditTestimonial = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, errors },
  } = useForm<z.infer<typeof testimonialValidation>>({
    resolver: zodResolver(testimonialValidation),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof testimonialValidation>
  > = async (
    values: z.infer<typeof testimonialValidation>
  ) => {
    try {
      setIsProcessing(true);
      const formData = new FormData();

      formData.append('name_ua', values.name_ua);
      formData.append('name_en', values.name_en);
      formData.append('name_pl', values.name_pl);
      formData.append('position', values.position);
      formData.append('date', values.date);
      formData.append('review_ua', values.review_ua);
      formData.append('review_en', values.review_en);
      formData.append('review_pl', values.review_pl);
      if (file) {
        formData.append('file', file);
      }
      const response = await updateTestimonial(
        '1',
        formData
      );
      if (response.status === 200) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
      reset();
    } catch (errors: unknown) {
      console.log(errors);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col px-[24px] pt-[40px]">
      <div className="mb-[50px]">
        <PageTitle title="Редагувати Відгук" />
      </div>
      <div className="flex w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-[50px] flex flex-1  flex-col gap-[50px]">
          <div className=" flex flex-col gap-[50px]">
            <section className="flex gap-6">
              <Controller
                name="name_ua"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.name_ua?.message}
                    placeholder="Введіть ім'я"
                    title="Ім'я"
                    isIcon
                  />
                )}
              />
              <Controller
                name="name_en"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.name_en?.message}
                    placeholder="Введіть ім'я"
                    title="Name"
                    isIcon
                  />
                )}
              />
              <Controller
                name="name_pl"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.name_pl?.message}
                    placeholder="Введіть ім'я"
                    title="Imię"
                    isIcon
                  />
                )}
              />
            </section>
            <section className="flex  gap-6">
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.position?.message}
                    placeholder="Введіть спеціалізацію"
                    title="Спеціалізація"
                    isIcon
                  />
                )}
              />
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    errorText={errors.date?.message}
                    placeholder="Введіть дату"
                    title="Дата"
                    isIcon
                  />
                )}
              />
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <FileInputPost
                    {...field}
                    placeholder="Завантажте зображення"
                    title="Фото"
                    onChange={handleFileChange}
                  />
                )}
              />
            </section>
            <section className="flex flex-col gap-[50px]">
              <div className="flex gap-6">
                <Controller
                  name="review_ua"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      errorText={errors.review_ua?.message}
                      placeholder="Введіть текст відгуку"
                      title="Текст"
                    />
                  )}
                />
                <Controller
                  name="review_en"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      errorText={errors.review_en?.message}
                      placeholder="Введіть текст відгуку"
                      title="Text"
                    />
                  )}
                />
                <Controller
                  name="review_pl"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      errorText={errors.review_pl?.message}
                      placeholder="Введіть текст відгуку"
                      title="Tekst"
                    />
                  )}
                />
              </div>
            </section>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-6">
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
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Новий відгук додано"
            onClose={() => setIsSuccess(false)}
            isSuccess={isSuccess}
          />
        )}
      </div>
      <div>
        <TestimonialCard item={testimonials[1]} />
      </div>
    </section>
  );
};

export default EditTestimonial;
