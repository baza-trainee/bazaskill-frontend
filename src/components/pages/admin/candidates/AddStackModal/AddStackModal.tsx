import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import type { UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type {
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler
} from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { getSpecializations } from '@/api/specialization';
import { addStack } from '@/api/stack';
import { constants } from '@/constants';
import { useModal } from '@/stores/useModal';
import type { ISpecialization } from '@/types/specialization';

import TextInput from '../AddCandidate/TextInput';
import schema from './schema';

interface FormData {
  specialization_id: string;
  title: string;
}

function AddStackModal() {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  const [isProcessing, setIsProcessing] = useState(false);

  const specialization: UseQueryResult<ISpecialization[], Error> = useQuery({
    queryKey: [constants.specialization.FETCH_SPECIALIZATIONS],
    queryFn: getSpecializations
  });

  const { mutate } = useMutation({
    mutationKey: [constants.stack.ADD_STACK],
    mutationFn: addStack,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.stack.GET_STACK]
      });
      setIsProcessing(false);
      closeModal();
    },
    onError: (error) => {
      alert(error);
    }
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      specialization_id: '',
      title: ''
    },
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<FormData> = (values, event) => {
    event?.preventDefault();
    setIsProcessing(true);
    mutate(values);
  };
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black/70">
      <div className=" relative  w-[50vw] bg-graphite p-2 text-white">
        <div
          onClick={closeModal}
          className="absolute right-4 top-4 size-6 cursor-pointer text-3xl text-white"
        >
          <IoClose />
        </div>
        <h2 className="mb-8 text-center text-3xl font-bold">Додавання Стеку</h2>
        <form className="mx-auto flex flex-col items-center justify-center gap-[32px] font-sans text-[16px]">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                error={errors.title?.message as string}
                isRequired={true}
                placeholder="Назва технології"
                title="Назва технології"
              />
            )}
          />

          <Controller
            name="specialization_id"
            control={control}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
                <label htmlFor="specialization">
                  Cпеціальність &nbsp;
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="specialization"
                  value={value}
                  onChange={onChange}
                  className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                >
                  <option value="">Оберіть спеціальність</option>
                  {specialization.data?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <span className="font-sans text-[12px] text-error">
                  {
                    (
                      errors.specialization_id as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                </span>
              </div>
            )}
          />
          <div className="flex justify-start gap-[24px] py-[40px]">
            <button
              className="flex h-[44px] w-[286px] items-center justify-center rounded-[6px] bg-white font-sans font-[600] leading-[22px] text-black transition-all hover:border hover:bg-transparent hover:text-white"
              type="button"
              onClick={() => handleSubmit(onSubmit)()}
            >
              {isProcessing ? 'Обробка запиту...' : 'Додати'}
            </button>
            <button
              onClick={closeModal}
              className="flex h-[44px] w-[286px] cursor-pointer items-center justify-center rounded-[6px] border font-sans font-[600] leading-[22px] text-white transition-all hover:bg-white hover:text-black"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStackModal;
