'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Counters = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setShowModal(true);

    const formData = new FormData(e.currentTarget);
    const liveProjects = formData.get('live-projects');
    const participants = formData.get(
      'involved-participants'
    );
    const employed = formData.get('employed');
    const technologies = formData.get('technologies');
    const libraries = formData.get('libraries');

    console.log({
      liveProjects,
      participants,
      employed,
      technologies,
      libraries,
    });
  };

  return (
    <form
      className="ml-16 mt-4 w-[596px]"
      onSubmit={handleSubmit}
    >
      <div className="my-5">
        <h1 className="mb-5 text-3xl font-bold tracking-wide">
          Каунтер
        </h1>
      </div>
      <div className="mt-10 w-[442px]">
        <label htmlFor="live-projects" className="relative">
          Живих проектів
          <input
            type="number"
            id="live-projects"
            name="live-projects"
            placeholder="Вкажіть кількість"
            required
            inputMode="numeric"
            className="mb-[50px] mt-1 h-[46px] w-full rounded p-2 text-xs text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Image
            src="/admin/settings/pencil.svg"
            alt="live-projects"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
          ></Image>
        </label>
        <label
          htmlFor="involved-participants"
          className="relative"
        >
          Залучених учасників
          <input
            type="number"
            id="involved-participants"
            name="involved-participants"
            placeholder="Вкажіть кількість"
            required
            inputMode="numeric"
            className="mb-[50px] mt-1 h-[46px] w-full rounded p-2 text-xs text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Image
            src="/admin/settings/pencil.svg"
            alt="involved-participants"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
          ></Image>
        </label>
        <label htmlFor="employed" className="relative">
          Працевлаштовано
          <input
            type="number"
            id="employed"
            name="employed"
            placeholder="Вкажіть кількість"
            required
            inputMode="numeric"
            className="mb-[50px] mt-1 h-[46px] w-full rounded p-2 text-xs text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Image
            src="/admin/settings/pencil.svg"
            alt="employed"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
          ></Image>
        </label>
        <label htmlFor="technologies" className="relative">
          Технологій
          <input
            type="number"
            id="technologies"
            name="technologies"
            placeholder="Вкажіть кількість"
            required
            inputMode="numeric"
            className="mb-[50px] mt-1 h-[46px] w-full rounded p-2 text-xs text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Image
            src="/admin/settings/pencil.svg"
            alt="technologies"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
          ></Image>
        </label>
        <label htmlFor="libraries" className="relative">
          Бібліотек
          <input
            type="number"
            id="libraries"
            name="libraries"
            placeholder="Вкажіть кількість"
            required
            inputMode="numeric"
            className="mb-[50px] mt-1 h-[46px] w-full rounded p-2 text-xs text-black [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Image
            src="/admin/settings/pencil.svg"
            alt="libraries"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
          ></Image>
        </label>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="mr-4 h-11 w-[286px] rounded border border-solid border-white hover:bg-[#a9a9a9] active:bg-white active:text-black"
          onClick={() => console.log('відправлення форми')}
        >
          Зберігти зміни
        </button>
        <button
          type="reset"
          className="mr-4 h-11 w-[286px] rounded border border-solid border-white hover:bg-[#a9a9a9] active:bg-white active:text-black"
          onClick={() => console.log('скасування')}
        >
          Скасувати
        </button>
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
  );
};

export default Counters;
