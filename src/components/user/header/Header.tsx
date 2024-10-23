'use client';
import Link from 'next/link';
import React from 'react';
import Logo from '@/components/shared/icons/Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import AffiliateBanner from './AffiliateBanner';

export default function Header(): React.JSX.Element {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const isActive = (name: string):boolean =>{
    return pathname.split('/').includes(name)
  }

  interface Item{
    title: string;
    pathname: string;
    href: string;
  }

  const itemsLink: Item[] = [
    {
      title:'about',
      pathname:'about',
      href:'/about'
    },
    {
      title:'why_juniors',
      pathname:'why-juniors',
      href:'/why-juniors'
    },
    {
      title:'candidates',
      pathname:'candidates',
      href:'/candidates'
    },
    {
      title:'contacts',
      pathname:'contacts',
      href:'/contacts'
    }
  ]
  // border-b border-[#4E4E4E] 
  return (
    <header className='fixed top-0 z-50 w-full bg-black'>
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
          <nav className='hidden items-center justify-center w-full md:flex gap-[3%] xl:gap-[6%]'>
            {itemsLink.map((el)=>{
              return (
                <Link key={el.pathname}
                className={`group duration-500 flex flex-col gap-0.5 hover:opacity-70 text-white text-open-sans text-lg font-semibold ${isActive(el.pathname) ? 'opacity-70' : ''}`}
                  href={el.href}>
                  <span className='px-2 text-nowrap'>{t(el.title)}</span>
                <span className={`duration-500 h-[2px] bg-yellow group-hover:w-full ${isActive(el.pathname) ? 'w-full' : 'w-0'}`}></span>  
              </Link>
              )
            })}
          </nav>


        <div className='flex items-center justify-center gap-2'>
          <LanguageSwitcher />
          <button type="button" className='md:hidden text-white text-open-sans text-lg font-semibold border h-10 w-10'>me</button>
        </div>
          
        </div>
      </div>
    </header>  
  )
}