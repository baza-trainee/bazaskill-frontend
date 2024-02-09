'use client';

import React from 'react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import MenuItem from './MenuItem';
import LanguageSwitcher from './LanguageSwitcher';
import { data } from './data';

const Header = () => {
  return (
    <div className="container relative z-50 flex h-[100px] w-full items-center border-b border-[#4E4E4E] bg-graphite">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="ml-[30px] flex grow justify-between gap-[30px]">
        <div className="flex grow justify-center gap-[15px]">
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
