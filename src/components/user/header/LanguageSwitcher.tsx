'use client';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import HeaderCaretDown from '@/components/shared/icons/HeaderCaretDown';
import { locales } from '@/i18n';
import { usePathname, useRouter } from '@/navigation';
import clsx from 'clsx';

function LanguageSwitcher() {
  const router = useRouter();
  const path = usePathname();
  const locale: string = useLocale();
  const [currentLocale, setCurrentLocale]
    = useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const isActive = (name: string): boolean =>{
    return locale == name
  }

  const handleCheckLocale = (item: string) => {
    setIsOpen(!isOpen);
    setCurrentLocale(item);
    router.replace(path, { locale: item });
  };

  const handleOutsideClick = (event: Event): void => {
    if (
      !submenuRef.current?.contains(
        event.target as HTMLElement,
      )
      && !(
        event.target === menuRef.current
        || menuRef.current?.contains(
          event.target as HTMLElement,
        )
      )
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () =>
      window.removeEventListener(
        'click',
        handleOutsideClick,
      );
  }, [isOpen]);
  return (
    <div
      className={clsx('relative flex cursor-pointer items-center rounded-t-[8px] duration-300 hover:bg-[#525252]', isOpen && 'bg-[#525252]')}
    >
      <button
        type='button'
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[50px] w-[60px] items-center justify-between px-[6px] text-white"
      >
        <span className="font-sans' text-[18px] font-semibold">
          {currentLocale.toUpperCase()}
        </span>
        <span className={`${!isOpen && 'rotate-180'}`}>
          <HeaderCaretDown />
        </span>
      </button>
      {isOpen && (
        <div
          ref={submenuRef}
          className="absolute top-full flex w-[60px] flex-col rounded-[4px] rounded-tl-none border-2 border-[#4E4E4E] bg-[#202020]"
        >
          {locales.map((item: string) => {
            if(isActive(item) ){
              return null
            }else {
              return (
                <button 
                  key={item}
                  type='button'
                  className="flex h-[50px] cursor-pointer items-center justify-center border-b border-b-[#4E4E4E] font-sans text-[18px] font-semibold text-white duration-300 last:border-none hover:bg-[#2B2B2B] hover:text-yellow"
                  onClick={() => handleCheckLocale(item)}
                >
                  {item.toUpperCase()}
                </button>
              )
            } 
          })}
        </div>
      )}
    </div>
  );
}
export default LanguageSwitcher;
