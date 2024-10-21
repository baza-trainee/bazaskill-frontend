'use client';
import Link from 'next/link';
import React from 'react';
import Logo from '@/components/shared/icons/Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';

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

  return (
    <header className='bg-graphite border-b border-[#4E4E4E] px-9'>
      {/* <AffiliateBanner /> */}
      <div className='mx-auto max-w-[1280px] flex items-center justify-between py-[30px]'>
        <div className="flex items-center xl:h-[40px] xl:w-[169px]">
          <Link
            className="flex w-full justify-start md:justify-center "
            href="/"
            >
           <Logo className="ml-[-20px] scale-75 transition duration-500 md:ml-0 md:scale-100 md:hover:scale-110" />
         </Link>
        </div>
        <nav className='flex items-center justify-center w-full  gap-[7%]'>
          {itemsLink.map((el)=>{
            return (
              <Link key={el.pathname}
              className={`group duration-500 flex flex-col gap-0.5 hover:opacity-70 text-white text-open-sans text-base font-semibold ${isActive(el.pathname) ? 'opacity-70' : ''}`}
                href={el.href}>
               {t(el.title)}
              <span className={`duration-500 h-[2px] bg-[#4DC760] group-hover:w-full ${isActive(el.pathname) ? 'w-full' : 'w-0'}`}></span>  
            </Link>
            )
          })}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>  
  )
}