'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/redux/hook';
import { defaultValues } from './defaultValues';
import { testimonialValidation } from './validationSchema';
import { TestimonialFormInput } from '@/types/testimonials';
import { addNewTestimonial } from '@/redux/slices/testimonialSlice';

import TextArea from '../ui/TextArea';
import TextInput from '../ui/TextInput';

const AddTestimonial = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<TestimonialFormInput>({
    resolver: zodResolver(testimonialValidation),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<
    TestimonialFormInput
  > = async (values: TestimonialFormInput) => {
    try {
      setIsProcessing(true);
      await dispatch(addNewTestimonial(values));
      setIsProcessing(false);
      router.push('/');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center ">
      <div className="mb-9 mt-12">
        <h1 className="text-3xl font-bold">
          Додавання відгуку
        </h1>
      </div>
      <div className="flex w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="mx-auto flex flex-1 flex-col items-center justify-center gap-4"
        >
          <div className="mb-5 flex gap-2">
            <section className="flex flex-col gap-4">
              <div className="flex gap-6">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      errorText={errors.name?.message}
                      placeholder="Введіть ім’я відвідувача"
                      title="Ім’я відвідувача:"
                    />
                  )}
                />
              </div>

              <div className="flex gap-6">
                <Controller
                  name="review"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      errorText={errors.review?.message}
                      placeholder="Введіть відгук"
                      title="Відгук:"
                    />
                  )}
                />
              </div>
            </section>
          </div>
          <p
            className={`leading-normal text-black ${
              isDirty && isValid
                ? 'text-black'
                : 'text-green-700'
            }`}
          >
            Додати новий відгук на сайт?
          </p>
          <div className="flex gap-4">
            <button
              className={`w-[13.5rem] border border-black px-6 py-2 font-medium text-green-700 ${
                isDirty && isValid
                  ? 'cursor-pointer bg-green-300 text-black'
                  : 'cursor-not-allowed bg-slate-100 text-slate-500'
              }`}
            >
              {isProcessing
                ? 'Обробка запиту...'
                : 'Додати'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonial;
