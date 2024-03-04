'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const EditSettings = () => {
  const [showOldPassword, setShowOldPassword] =
    useState(false);
  const [showNewPassword, setShowNewPassword] =
    useState(false);
  const [showRepeatPassword, setShowRepeatPassword] =
    useState(false);

  const togglePasswordVisibility = (
    passwordType: string
  ) => {
    switch (passwordType) {
      case 'old':
        setShowOldPassword((prevState) => !prevState);
        break;
      case 'new':
        setShowNewPassword((prevState) => !prevState);
        break;
      case 'repeat':
        setShowRepeatPassword((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  return (
    <form
      className="ml-16 mt-4 w-[596px]"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const oldPassword = formData.get('old-password');
        const newPassword = formData.get('new-password');
        const repeatPassword = formData.get(
          'repeat-password'
        );
        console.log({
          oldPassword,
          newPassword,
          repeatPassword,
        });
      }}
    >
      <div className="my-5">
        <h1 className="mb-5 text-3xl font-bold tracking-wide">
          Змінити пароль
        </h1>
      </div>
      <div className="mt-10 w-[442px]">
        <label htmlFor="old-password" className="relative">
          Старий пароль
          <input
            type={showOldPassword ? 'text' : 'password'}
            id="old-password"
            name="old-password"
            placeholder="Старий пароль"
            required
            className="mb-10 mt-1 h-[46px] w-full rounded p-2 text-xs text-black"
          />
          <Image
            src="/admin/settings/hide-password.svg"
            alt="old-password"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
            onClick={() => togglePasswordVisibility('old')}
          ></Image>
        </label>
        <label htmlFor="new-password" className="relative">
          Новий пароль
          <input
            type={showNewPassword ? 'text' : 'password'}
            id="new-password"
            name="new-password"
            placeholder="Новий пароль"
            required
            className="mb-10 mt-1 h-[46px] w-full rounded p-2 text-xs text-black"
          />
          <Image
            src="/admin/settings/hide-password.svg"
            alt="new-password"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px] cursor-pointer"
            onClick={() => togglePasswordVisibility('new')}
          ></Image>
        </label>
        <label
          htmlFor="repeat-password"
          className="relative"
        >
          Повторіть новий пароль
          <input
            type={showRepeatPassword ? 'text' : 'password'}
            id="repeat-password"
            name="repeat-password"
            placeholder="Повторіть новий пароль"
            required
            className="mb-10 mt-1 h-[46px] w-full rounded p-2 text-xs text-black"
          />
          <Image
            src="/admin/settings/hide-password.svg"
            alt="repeat-password"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px] cursor-pointer"
            onClick={() =>
              togglePasswordVisibility('repeat')
            }
          ></Image>
        </label>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="mr-4 h-11 w-[286px] rounded border border-solid border-white hover:bg-white hover:text-black"
          onClick={() => console.log('відправлення форми')}
        >
          Зберігти зміни
        </button>
        <button
          type="reset"
          className="mr-4 h-11 w-[286px] rounded border border-solid border-white hover:bg-white hover:text-black"
          onClick={() => console.log('скасування')}
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default EditSettings;
