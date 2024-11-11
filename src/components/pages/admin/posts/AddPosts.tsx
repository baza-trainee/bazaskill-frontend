'use client';

import type {
  SubmitHandler,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import { createPost } from '@/api/posts';

import type { TPostScheme } from './postScheme';

import SuccessAlert from '../alerts/SuccessAlert';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputPost from '../ui/FileInputPost';
import PageTitle from '../ui/PageTitle';
import TextAreaArticle from '../ui/TextAreaArticle';
import TextInput from '../ui/TextInput';
import PostPreview from './PostPreview';
import { postScheme } from './postScheme';

function AddPosts() {
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
  } = useForm<TPostScheme>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      image: '',
      link: '',
      text: '',
    },
    resolver: zodResolver(postScheme),
  });

  const currentValues = watch();

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file);
    setImage(img);
  };

  useEffect(() => {
    if (!file)
      return;
    setImagePreview(file);
  }, [file]);

  const onSubmit: SubmitHandler<TPostScheme> = async (
    data,
  ) => {
    try {
      setIsProcessing(true);

      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('link', data.link);
      formData.append('text', data.text);

      if (file) {
        formData.append('file', file);
      }

      const response = await createPost(formData);

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
    router.push('/admin/posts');
  };

  return (
    <div className="pl-[24px] pt-[20px]">
      <PageTitle title="Додати статтю" />
      <section className="pt-[50px]">
        <form
          className="flex flex-col gap-[50px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-[50px]">
              <Controller
                name="title"
                control={control}
                render={({ field }) => {
                  return (
                    <TextInput
                      {...field}
                      errorText={errors.title?.message}
                      title="Назва статті"
                      placeholder="Введіть назву статті"
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
                name="link"
                control={control}
                render={({ field }) => {
                  return (
                    <TextInput
                      {...field}
                      errorText={errors.link?.message}
                      title="Стаття в Linkedin"
                      placeholder="Додати ссилку"
                      isIcon={true}
                    />
                  );
                }}
              />
            </div>
            <PostPreview
              currentValues={currentValues}
              image={image}
            />
          </div>
          <Controller
            name="text"
            control={control}
            render={({ field }) => {
              return (
                <TextAreaArticle
                  {...field}
                  title="Текст"
                  placeholder="Введіть текст"
                  errorText={errors.text?.message}
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

export default AddPosts;
