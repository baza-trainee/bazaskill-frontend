'use client';
import React from 'react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import MenuItem from './MenuItem';
import LanguageSwitcher from './LanguageSwitcher';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getSpecializationsWithStack } from '@/api/specialization';
import { ISpecializationWithStack } from '@/types/specialization';
import AffiliateBanner from './AffiliateBanner';

const Header = () => {
  const { data } = useQuery({
    queryKey: [
      constants.specialization
        .FETCH_SPECIALIZATIONS_WITH_STACK,
    ],
    queryFn: getSpecializationsWithStack,
  });

  const sortedStack =
    data && data?.sort((a, b) => b.id - a.id);

  console.log(data);

  return (
    <div>
      <AffiliateBanner />
      <div className="container relative z-50 flex h-[80px] w-full items-center gap-[4px] border-b border-[#4E4E4E] bg-graphite xl:h-[100px] 2xl:gap-[23px] 3xl:gap-[42px] 4xl:gap-[90px] 5xl:gap-[208px]">
        <div className="flex w-full items-center xl:h-[40px] xl:w-[169px]">
          <Link
            className="flex w-full justify-start md:justify-center "
            href="/"
          >
            <Logo className="ml-[-20px] scale-75 transition duration-500 md:ml-0 md:scale-100 md:hover:scale-110" />
          </Link>
        </div>

        <div className="hidden grow justify-between gap-[4px]  xl:flex 2xl:gap-[23px] 3xl:gap-[42px] 4xl:gap-[90px] 5xl:gap-[208px]">
          <nav className="flex grow justify-center gap-0 2xl:gap-[10px] 5xl:gap-[24px]">
            {data &&
              Array.isArray(data) &&
              sortedStack?.map(
                ({
                  id,
                  title,
                  stack,
                }: ISpecializationWithStack) => (
                  <MenuItem
                    key={id}
                    title={title}
                    inputs={stack}
                  />
                )
              )}
          </nav>

          <LanguageSwitcher />
        </div>
        <div className="absolute right-[40px] flex h-full items-center xl:hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
