'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useLocale } from 'next-intl';

import HeaderCaretDown from '@/components/shared/icons/HeaderCaretDown';
import { locales } from '@/i18n';
import { usePathname, useRouter } from '@/navigation';

function LanguageSwitcher() {
  const router = useRouter();
  const path = usePathname();
  const locale: string = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const isActive = (name: string): boolean => locale === name;

  const handleCheckLocale = (item: string) => {
    setIsOpen(false);
    setCurrentLocale(item);
    router.replace(path, { locale: item });
  };

  const handleOutsideClick = (event: Event): void => {
    if (
      !submenuRef.current?.contains(event.target as HTMLElement) &&
      !menuRef.current?.contains(event.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="relative z-20 flex cursor-pointer items-center">
      <button
        type="button"
        ref={menuRef}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        className="flex h-[50px] w-[60px] items-center justify-between px-[6px] text-white"
      >
        <span className="text-[18px] font-semibold">{currentLocale.toUpperCase()}</span>
        <span className={`${isOpen ? '' : 'rotate-180'}`}>
          <HeaderCaretDown />
        </span>
      </button>

      {isOpen && (
        <div
          ref={submenuRef}
          id="language-menu"
          role="menu"
          aria-labelledby="language-switcher"
          className="absolute top-full flex w-[60px] flex-col rounded-[4px] border-2 border-[#4E4E4E] bg-[#202020]"
        >
          {locales.map(
            (item: string) =>
              !isActive(item) && (
                <button
                  key={item}
                  type="button"
                  role="menuitem"
                  className="flex h-[50px] cursor-pointer items-center justify-center border-b border-b-[#4E4E4E] text-[18px] font-semibold text-white duration-300 last:border-none hover:bg-[#2B2B2B] hover:text-yellow"
                  onClick={() => handleCheckLocale(item)}
                >
                  {item.toUpperCase()}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
