'use client';

import React from 'react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import MenuItem from './MenuItem';
import LanguageSwitcher from './LanguageSwitcher';

const data = [
  'React',
  'Redux',
  'Vue',
  'React Query',
  'Angular',
  'Next.js',
  'HTML',
  'CSS',
  'Tailwind',
  'Material UI',
  'Zustand',
  'React Native',
];
const Header = () => {
  return (
    <header className="relative z-50 flex h-[100px] w-full items-center border-b border-[#4E4E4E] bg-graphite px-[80px] xl:px-[60px]">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="ml-[30px] flex grow justify-between gap-[30px]">
        <div className="flex grow justify-center gap-[15px]">
          <MenuItem title="Design" inputs={data} />
          <MenuItem title="Front End" inputs={data} />
          <MenuItem title="Back End" inputs={data} />
          <MenuItem title="Full Stack" inputs={data} />
          <MenuItem title="QA Manual" inputs={data} />
          <MenuItem title="PM" inputs={data} />
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
