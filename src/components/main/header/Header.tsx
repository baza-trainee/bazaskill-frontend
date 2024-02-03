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

const Header = () => {
  return (
    <header className="relative flex h-[100px] w-full items-center border-b border-[#4E4E4E] bg-graphite px-[80px]">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <DropDown
        title="Front End"
        inputs={['React', 'Redux', 'Vue', 'React Query']}
      />
    </header>
  );
};

export default Header;
