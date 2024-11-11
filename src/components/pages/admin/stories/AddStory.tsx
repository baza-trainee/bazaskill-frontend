'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Controller,
  useForm,
  SubmitHandler
} from 'react-hook-form';

import { TStoryScheme, storyScheme } from './storyScheme';

import SuccessAlert from '../alerts/SuccessAlert';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputPost from '../ui/FileInputPost';
import PageTitle from '../ui/PageTitle';
import TextAreaArticle from '../ui/TextAreaArticle';
import TextInput from '../ui/TextInput';
import { defaultStoryValues } from './defaultValues';
import JuniorCardPreview from './CardPreview';
import { createStory } from '@/api/stories';

function AddStory() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [image, setImage] = useState('');
  const router = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isDirty, errors },
  } = useForm<TStoryScheme>({
    mode: 'onChange',
    defaultValues: defaultStoryValues,
    resolver: zodResolver(storyScheme),
  });

  const currentValues = watch();

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file);
    setImage(img);
  };

  useEffect(() => {
    if (!file) return;
    setImagePreview(file);
  }, [file]);

  const onSubmit: SubmitHandler<TStoryScheme> = async (
    values,
  ) => {
    try {
      setIsProcessing(true);

      const formData = new FormData();

      formData.append('name_ua', values.name_ua);
      formData.append('name_en', values.name_en);
      formData.append('name_pl', values.name_pl);
      formData.append('speciality', values.speciality);
      formData.append('date', values.date);
      formData.append('text_ua', values.text_ua);
      formData.append('text_en', values.text_en);
      formData.append('text_pl', values.text_pl);


      if (file) {
        formData.append('file', file);
      }

      const response = await createStory(formData);

      if (response.status === 201) {
        setIsSuccess(true);
      }

      setIsProcessing(false);
      reset();
    }
    catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
    finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleCloseSuccessAlert = () => {
    setIsSuccess(false);
    router.push('/admin/stories');
  };

  return (
    <div className="pl-[24px] py-[20px]">
      <PageTitle title="Додати історію" />
      <section className="pt-[50px]">
        <form
          className="flex flex-col gap-[50px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-[150px]">
            <div className="flex flex-col gap-[50px]">
              <Controller
                name="name_ua"
                control={control}
                render={({ field }) => {
                  return (
                    <TextInput
                      {...field}
                      errorText={errors.name_ua?.message}
                      title="Ім'я учасника українською"
                      placeholder="Введіть ім'я учасника"
                    />
                  );
                }}
              />
              <Controller
                name="name_en"
                control={control}
                render={({ field }) => {
                  return (
                    <TextInput
                      {...field}
                      errorText={errors.name_en?.message}
                      title="Ім'я учасника англійською"
                      placeholder="Введіть ім'я учасника"
                    />
                  );
                }}
              />
              <Controller
                name="name_pl"
                control={control}
                render={({ field }) => {
                  return (
                    <TextInput
                      {...field}
                      errorText={errors.name_pl?.message}
                      title="Ім'я учасника польською"
                      placeholder="Введіть ім'я учасника"
                    />
                  );
                }}
              />
              <Controller
                name="date"
                control={control}
                render={({ field }) => {
                  return (
                    <TextInput
                      {...field}
                      errorText={errors.date?.message}
                      title="Дата додання історії"
                      placeholder="Дата додання"
                    />
                  );
                }}
              />
            </div>
            <JuniorCardPreview   
               currentValues={currentValues}
              image={image}/>
          </div>
          <Controller
            name="speciality"
            control={control}
            render={({ field }) => {
              return (
                <TextInput
                  {...field}
                  title="Спеціальність учасника"
                  placeholder="Введіть назву спеціальності"
                  errorText={errors.speciality?.message}
                />
              );
            }}
          />
               <Controller
                name="image"
                control={control}
                render={({ field }) => {
                  return (
                    <FileInputPost
                      {...field}
                      placeholder="Завантажте зображення"
                      title="Зображення"
                      onChange={handleFileChange}
                    />
                  );
                }}
              />
                           <Controller
                name="text_ua"
                control={control}
                render={({ field }) => {
                  return (
                    <TextAreaArticle
                      {...field}
                      errorText={errors.text_ua?.message}
                      title="Текст статті українською"
                      placeholder="Введіть текст статті"
                    />
                  );
                }}
              />
              <Controller
                name="text_en"
                control={control}
                render={({ field }) => {
                  return (
                    <TextAreaArticle
                      {...field}
                      errorText={errors.text_en?.message}
                      title="Текст статті англійською"
                      placeholder="Введіть текст статті"
                    />
                  );
                }}
              />
              <Controller
                name="text_pl"
                control={control}
                render={({ field }) => {
                  return (
                    <TextAreaArticle
                      {...field}
                      errorText={errors.text_pl?.message}
                      title="Текст статті польською"
                      placeholder="Введіть текст статті"
                    />
                  );
                }}
              />
          <div className="flex gap-[24px]">
            <PrimaryButton
              text={
                isProcessing ? 'Обробка запиту' : 'Додати'
              }
              disabled={!isDirty}
            />
            <SecondaryButton
              text="Скасувати"
              onClick={() => {
                reset();
                router.push('/admin/posts');
              }}
            />
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Стаття успішно додана"
            onClose={handleCloseSuccessAlert}
            isSuccess={isSuccess}
          />
        )}
      </section>
    </div>
  );
}

export default AddStory;
