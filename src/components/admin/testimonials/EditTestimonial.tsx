'use client';
import type {
  SubmitHandler,
} from 'react-hook-form';
import type { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import type { TestimonialPreview } from '@/types/testimonials';

import {
  getTestimonialsId,
  updateTestimonial,
} from '@/api/testimonials';
import { constants } from '@/constants';

import Loader from '../../shared/loader/Loader';
import SuccessAlert from '../alerts/SuccessAlert';
import { testimonialValidation } from '../testimonials/validationSchema';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputPost from '../ui/FileInputPost';
import PageTitle from '../ui/PageTitle';
import TextArea from '../ui/TextAreaReviews';
import TextInput from '../ui/TextInput';
import EditTestimonialCard from './EditTestimonialsCard';

function EditTestimonial() {
  const [previewCard, setPreviewCard] = useState<
    TestimonialPreview | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);
  const [file, setFile] = useState<File | null | string>(
    null,
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams<{ id: string }>();

  const { data, refetch, isFetching } = useQuery({
    queryKey: [
      constants.testimonials.FETCH_TESTIMONIALS,
      id,
    ],
    queryFn: () => getTestimonialsId(id),
  });

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<z.infer<typeof testimonialValidation>>({
    resolver: zodResolver(testimonialValidation),
    mode: 'onChange',
  });

  useEffect(() => {
    if (!data)
      return;
    setValue('name_ua', data.name_ua);
    setValue('name_en', data.name_en);
    setValue('name_pl', data.name_pl);
    setValue('position', data.position);
    setValue('date', data.date);
    setValue('review_ua', data.review_ua);
    setValue('review_en', data.review_en);
    setValue('review_pl', data.review_pl);
    setValue('file', data.file, {
      shouldValidate: false,
      shouldDirty: true,
    });
  }, [data, file, setValue]);

  const watchedValues = watch();
  useEffect(() => {
    setPreviewCard({
      name_ua: watchedValues.name_ua,
      name_en: watchedValues.name_en,
      name_pl: watchedValues.name_pl,
      position: watchedValues.position,
      date: watchedValues.date,
      review_ua: watchedValues.review_ua,
      review_en: watchedValues.review_en,
      review_pl: watchedValues.review_pl,
      file: file ?? watchedValues.file,
      images_url: data?.image_url,
    });
  }, [
    watchedValues.name_ua,
    watchedValues.name_en,
    watchedValues.name_pl,
    watchedValues.position,
    watchedValues.date,
    watchedValues.review_ua,
    watchedValues.review_en,
    watchedValues.review_pl,
    file,
  ]);

  const onSubmit: SubmitHandler<
    z.infer<typeof testimonialValidation>
  > = async (
    values: z.infer<typeof testimonialValidation>,
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
        id,
        formData,
      );
      if (response.status === 200) {
        setIsSuccess(true);
        refetch();
      }
      setIsProcessing(false);
    }
    catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      else {
        console.error('Неочікувана помилка', error);
      }
    }
    finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative h-screen max-h-screen p-6 ">
      <div className="mb-[50px]">
        <PageTitle title="Редагувати Відгук" />
      </div>
      <div className="flex w-full flex-wrap">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" mb-[50px] flex flex-col  flex-wrap gap-[50px]"
        >
          <div className=" flex flex-col flex-wrap gap-[50px]">
            <section className="flex flex-wrap  gap-6">
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
            <section className="flex flex-wrap  gap-6">
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
            <section className="flex flex-wrap gap-[50px]">
              <div className="flex flex-wrap gap-6">
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
          <div className="flex  gap-6">
            <div className="flex gap-6">
              <PrimaryButton
                text={
                  isProcessing
                    ? 'Обробка запиту'
                    : 'Зберегти зміни'
                }
                disabled={
                  errors && !!Object.keys(errors).length
                }
              />
              <Link href="/admin/testimonials">
                <SecondaryButton text="Скасувати" />
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div>
        {previewCard
        && typeof previewCard !== 'undefined' && (
          <EditTestimonialCard item={previewCard} />
        )}
      </div>
      {isSuccess && (
        <SuccessAlert
          title="Відгук успішно змінено"
          onClose={() => setIsSuccess(false)}
          isSuccess={isSuccess}
        />
      )}
      {isFetching && <Loader />}
    </div>
  );
}

export default EditTestimonial;
