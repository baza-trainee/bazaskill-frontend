'use client';

import React from 'react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postScheme } from './postScheme';
import { TPostScheme } from './postScheme';
import { updatePost } from '@/api/posts';
import { getPostsID } from '@/api/posts';
import { constants } from '@/constants';

import PageTitle from '../ui/PageTitle';
import TextInput from '../ui/TextInput';
import FileInputPost from '../ui/FileInputPost';
import TextAreaArticle from '../ui/TextAreaArticle';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import SuccessAlert from '../alerts/SuccessAlert';
import Loader from '../../shared/loader/Loader';

const EditPosts = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const { data, isFetching } = useQuery({
    queryKey: [constants.posts.FETCH_POSTS, id],
    queryFn: () => getPostsID(id),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm<TPostScheme>({
    mode: 'onChange',
    resolver: zodResolver(postScheme),
    values: data,
    defaultValues: {
      title: '',
      image: '',
      link: '',
      text: '',
    },
  });

  const onsubmit: SubmitHandler<TPostScheme> = async (
    data
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

      const response = await updatePost(id, formData);

      if (response.status === 200) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
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
      <PageTitle title={'Редагувати статтю'} />
      <section className="pt-[50px]">
        <form
          className="flex flex-col gap-[50px]"
          onSubmit={handleSubmit(onsubmit)}
        >
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
                  isIcon
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
                isProcessing
                  ? 'Обробка запиту'
                  : 'Зберегти зміни'
              }
              disabled={!Object.keys(touchedFields).length}
            />
            <SecondaryButton
              text="Скасувати"
              onClick={() => router.push('/admin/posts')}
            />
          </div>
        </form>
        {isSuccess && (
          <SuccessAlert
            title="Дані змінено"
            onClose={handleCloseSuccessAlert}
            isSuccess={isSuccess}
          />
        )}
      </section>
      {isFetching && <Loader />}
    </div>
  );
};

export default EditPosts;
