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
import { createTestimonial } from '@/api/testimonials';
import SuccessAlert from '../alerts/SuccessAlert';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PrimaryButtonAdd from '../ui/buttons/PrimaryButtonAdd';
import Link from 'next/link';

const AddTestimonial = () => {
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
      const response = await createTestimonial(formData);
      if (response.status === 201) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Неочікувана помилка', error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="relative h-[100vh] max-h-[100vh] p-6 ">
      <div className="mb-[50px]">
        <PageTitle title="Додати Відгук" />
      </div>
      <div className="flex w-full flex-wrap">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex flex-1 flex-col flex-wrap  gap-[50px]"
        >
          <div className=" flex flex-col flex-wrap gap-[50px]">
            <section className="flex flex-wrap gap-6">
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
                    isRequired
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
                    isRequired
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
                    isRequired
                  />
                )}
              />
            </section>
            <section className="flex flex-wrap gap-6">
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
                    isRequired
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
                    isRequired
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
                    isRequired
                  />
                )}
              />
            </section>
            <section className="flex flex-col flex-wrap gap-[50px]">
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
                      isRequired
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
                      isRequired
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
                      isRequired
                    />
                  )}
                />
              </div>
            </section>
          </div>
          <div className="flex gap-6">
            <PrimaryButtonAdd
              text={
                isProcessing ? 'Обробка запиту' : 'Додати'
              }
              disabled={!isDirty}
            />
            <Link href="/admin/testimonials">
              <SecondaryButton text="Скасувати" />
            </Link>
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
    </section>
  );
};

export default AddTestimonial;
