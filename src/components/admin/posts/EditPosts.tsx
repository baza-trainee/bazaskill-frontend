'use client';

import type {
  SubmitHandler,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';

import { getPostsID, updatePost } from '@/api/posts';
import { constants } from '@/constants';

import type { TPostScheme } from './postScheme';

import Loader from '../../shared/loader/Loader';
import SuccessAlert from '../alerts/SuccessAlert';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import FileInputPost from '../ui/FileInputPost';
import PageTitle from '../ui/PageTitle';
import TextAreaArticle from '../ui/TextAreaArticle';
import TextInput from '../ui/TextInput';
import PostPreview from './PostPreview';
import { postScheme } from './postScheme';

function EditPosts() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState('');
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
    watch,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<TPostScheme>({
    mode: 'onChange',
    resolver: zodResolver(postScheme),
    defaultValues: {
      title: '',
      image: '',
      link: '',
      text: '',
    },
  });

  const currentValues = watch();

  useEffect(() => {
    if (!data)
      return;
    setValue('title', data.title);
    setValue('text', data.text);
    setValue('link', data.link);
    setFile(
      [new File([], data.image_url, { type: 'for-url' })][0],
    );
    setImage(data.image_url);
  }, [data]);

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file);
    setImage(img);
  };

  useEffect(() => {
    if (!file || !touchedFields.image)
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

      const response = await updatePost(id, formData);

      if (response.status === 200) {
        setIsSuccess(true);
      }
      setIsProcessing(false);
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

  console.log(image);

  return (
    <div className="pl-[24px] pt-[20px]">
      <PageTitle title="Редагувати статтю" />
      <section className="pt-[50px]">
        <form
          className="flex flex-col gap-[50px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-[200px]">
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
                      file={file}
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
}

export default EditPosts;
