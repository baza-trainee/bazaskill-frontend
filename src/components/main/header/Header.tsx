'use client';

import React from 'react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import MenuItem from './MenuItem';
import LanguageSwitcher from './LanguageSwitcher';
import { data } from './data';

const Header = () => {
  return (
    <div className="container relative z-50 flex h-[100px] w-full items-center gap-[4px] border-b border-[#4E4E4E] bg-graphite 2xl:gap-[23px] 3xl:gap-[42px] 4xl:gap-[90px] 5xl:gap-[208px]">
      <div className="w-full xl:h-[40px] xl:w-[169px]">
        <Link
          className="flex w-full justify-center "
          href="/"
        >
          <Logo className="transition duration-500 hover:scale-110" />
        </Link>
      </div>

      <div className="hidden grow justify-between gap-[4px] xl:flex 2xl:gap-[23px] 3xl:gap-[42px] 4xl:gap-[90px] 5xl:gap-[208px]">
        <div className="flex grow justify-center gap-0 2xl:gap-[10px] 5xl:gap-[24px]">
          <MenuItem title="Design" inputs={data.design} />
          <MenuItem title="FrontEnd" inputs={data.front} />
          <MenuItem title="BackEnd" inputs={data.full} />
          <MenuItem title="FullStack" inputs={data.full} />
          <MenuItem title="QA Manual" inputs={data.qa} />
          <MenuItem title="PM" inputs={data.pm} />
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
