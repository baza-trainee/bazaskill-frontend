import Link from 'next/link';
import React from 'react';
import Logo from '@/components/shared/icons/Logo';
import LanguageSwitcher from './LanguageSwitcher';
import AffiliateBanner from './AffiliateBanner';
import NavHeader from './NavHeader';

export default function Header(): React.JSX.Element {

  return (
    <header className='fixed top-0 z-50 w-screen bg-black'>
      <AffiliateBanner />
      <div className='px-8'>
        <div className='mx-auto max-w-[1280px] flex items-center justify-between py-[16px] md:py-[25px]'>
          <div className="flex items-center xl:h-[40px]">
            <Link
              className="flex w-full justify-start md:justify-center"
              href="/"
              >
            <Logo className="ml-[-20px] scale-75 transition duration-500 md:ml-0 md:scale-100 md:hover:scale-110" />
          </Link>
          </div>

          <NavHeader/>

          <div className='flex items-center justify-center gap-2'>
            <LanguageSwitcher />
            <button type="button" className='md:hidden text-white text-open-sans text-lg font-semibold border h-10 w-10'>me</button>
          </div>
        </div>
      </div>
    </header>  
  )
}