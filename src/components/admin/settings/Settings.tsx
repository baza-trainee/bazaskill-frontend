'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(
      (prevShowPassword) => !prevShowPassword
    );
  };

  return (
    <form
      className="ml-16 mt-4 w-[596px]"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log({ email, password });
      }}
    >
      <div className="my-5">
        <h1 className="mb-5 text-3xl font-bold tracking-wide">
          Налаштування
        </h1>
      </div>
      <div className="mt-10 w-[442px]">
        <label htmlFor="email" className="relative">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
            className="mb-16 mt-1 h-[46px] w-full rounded p-2 text-xs text-black"
          />
          <Image
            src="/admin/settings/pencil.svg"
            alt="pencil"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px]"
          ></Image>
        </label>
        <label htmlFor="password" className="relative">
          Пароль
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Пароль"
            required
            className="mb-10 mt-1 h-[46px] w-full rounded p-2 text-xs text-black"
          />
          <Image
            src="/admin/settings/hide-password.svg"
            alt="pencil"
            width={24}
            height={24}
            className="absolute bottom-[-4px] left-[405px] cursor-pointer"
            onClick={togglePasswordVisibility}
          ></Image>
          <button type="button">
            <Link href="settings/edit">
              <Image
                src="/admin/settings/pencil.svg"
                alt="pencil"
                width={44}
                height={44}
                className="absolute bottom-[-13px] left-[465px] bg-white"
              ></Image>
            </Link>
          </button>
        </label>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="mr-4 h-11 w-[286px] rounded border border-solid border-white hover:bg-[#a9a9a9]"
          onClick={() => console.log('відправлення форми')}
        >
          Зберігти зміни
        </button>
        <button
          type="reset"
          className="mr-4 h-11 w-[286px] rounded border border-solid border-white hover:bg-[#a9a9a9]"
          onClick={() => console.log('скасування')}
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default Settings;
