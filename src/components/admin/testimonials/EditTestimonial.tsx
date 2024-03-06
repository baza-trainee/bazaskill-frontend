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

const EditTestimonial = () => {
  const [isProcessing, setIsProcessing] = useState(false);

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
      console.log(values);
      const formData = new FormData();
      if (values.name_ua)
        formData.append('name_ua', values.name_ua);
      if (values.name_en)
        formData.append('name_en', values.name_en);
      if (values.name_pl)
        formData.append('name_pl', values.name_pl);
      if (values.position)
        formData.append('position', values.position);
      if (values.date) formData.append('date', values.date);
      if (values.review_ua)
        formData.append('review_ua', values.review_ua);
      if (values.review_en)
        formData.append('review_en', values.review_en);
      if (values.review_pl)
        formData.append('review_pl', values.review_pl);
      /*    if (values.image) {
        formData.append('image', values.image);
      } */
      setIsProcessing(false);
      reset();
    } catch (errors: unknown) {
      console.log(errors);
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
                name="image"
                control={control}
                render={({ field }) => (
                  <FileInputPost
                    {...field}
                    placeholder="Завантажте зображення"
                    title="Фото"
                    onChange={(v) => console.log(v)}
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
            <button
              className={`h-[44px] w-[286px] rounded-[6px] bg-[#939393] px-6 py-2 text-[16px] font-medium text-[#fefffe] [border:1px_solid_#fefffe] ${
                isDirty
                  ? 'bg-green-300 cursor-pointer text-black'
                  : 'cursor-not-allowed bg-slate-100 text-slate-500'
              }`}>
              {isProcessing
                ? 'Обробка запиту...'
                : 'Зберегти зміни'}
            </button>
            <button
              type="reset"
              onClick={() => reset(defaultValues)}
              className={`h-[44px] w-[286px] rounded-[6px] bg-[#212121] px-6 py-2 text-[16px] font-medium text-[#fefffe] [border:1px_solid_#fefffe] `}>
              Скасувати
            </button>
          </div>
        </form>
      </div>
      <div>
        <TestimonialCard item={testimonials[1]} />
      </div>
    </section>
  );
};

export default EditTestimonial;
