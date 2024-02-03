'use client';

import React, { useState, useEffect } from 'react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import { occupations } from './data';
import HeaderDropdown from './header_dropdown/HeaderDropdown';
import HeaderSearchIcon from '@/components/icons/HeaderSearchIcon';
import HeaderCaretDown from '@/components/icons/HeaderCaretDown';
import HeaderCaretUp from '@/components/icons/HeaderCaretUp';
import { transformMenuItem } from '@/helpers/transformMenuItem';
import { usePathname, useRouter } from 'next/navigation';
import DropDown from './DropDown';

const languages = ['ua', 'en', 'pl'];
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
    <header className="sticky z-50 flex h-[100px] w-full items-center border-b border-[#4E4E4E] bg-graphite px-[80px]">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="ml-[30px] flex justify-between">
        <div className="flex justify-center gap-[15px]">
          <DropDown title="Design" inputs={data} />

          <DropDown title="Front End" inputs={data} />

          <DropDown title="Back End" inputs={data} />
          <DropDown title="Full Stack" inputs={data} />
          <DropDown title="QA Manual" inputs={data} />
          <DropDown title="PM" inputs={data} />
        </div>

        <DropDown title="UA" inputs={data} />
      </div>
    </header>
  );
};

export default Header;
