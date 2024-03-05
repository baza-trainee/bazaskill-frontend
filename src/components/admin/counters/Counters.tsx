'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextInput from '../ui/TextInput';
import PageTitle from '../ui/PageTitle';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';

const Counters = () => {
  const { handleSubmit, control, reset } = useForm();
  const [showModal, setShowModal] = useState(false);
  const handleCancel = () => {
    reset();
  };

  return (
    <div className="p-[24px]">
      <PageTitle title="Каунтер"></PageTitle>
      <div className="mt-[80px] flex gap-[180px]">
        <form
          className="flex w-[597px] flex-col gap-[30px]"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setShowModal(true);
            handleCancel();
          })}
        >
          <div className="mb-[50px] flex flex-col gap-[50px]">
            <div>
              <Controller
                name="live_projects"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Живих проектів"
                    placeholder="Введіть кількість"
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="participants"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Залучених учасників"
                    placeholder="Вкажіть кількість"
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="employed"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Працевлаштовано"
                    placeholder="Вкажіть кількість"
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="technologies"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Технологій"
                    placeholder="Вкажіть кількість"
                    isIcon
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="libraries"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    title="Бібліотек"
                    placeholder="Вкажіть кількість"
                    isIcon
                  />
                )}
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton text="Зберігти зміни" />
            <SecondaryButton
              text="Скасувати"
              type="reset"
              onClick={handleCancel}
            />
          </div>
          {showModal && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="h-[223px] w-[600px] rounded-[10px] bg-white text-black">
                <button
                  onClick={() => setShowModal(false)}
                  className="ml-[530px] mr-[40px] mt-[45px] text-[20px] text-gray"
                >
                  X
                </button>
                <p className="mt-[28px] flex items-center justify-center text-[24px] font-bold">
                  Дані змінено
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Counters;
